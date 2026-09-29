import express from 'express';
import cors from 'cors';
import axios from 'axios';
import crypto from 'crypto';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

// Server membaca folder saat ini sebagai folder public (untuk index.html, css, js)
app.use(express.static(__dirname));

const SECRET_KEY = 'C5D58EF67A7584E4A29F6C35BBC4EB12';

function getVideoId(url) {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
  return match ? match[1] : null;
}

function decryptData(encryptedData) {
  const encryptedBuffer = Buffer.from(encryptedData, 'base64');
  const iv = encryptedBuffer.slice(0, 16);
  const content = encryptedBuffer.slice(16);
  const key = Buffer.from(SECRET_KEY, 'hex');
  const decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  const decrypted = Buffer.concat([decipher.update(content), decipher.final()]);
  return JSON.parse(decrypted.toString());
}

async function downloadFromSavetube(link, quality = 128) {
  const cdnResponse = await axios.get('https://media.savetube.vip/api/random-cdn');
  const cdn = cdnResponse.data.cdn;

  const infoResponse = await axios.post(
    `https://${cdn}/v2/info`,
    { url: link },
    { headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://save-tube.com/' } }
  );
  const info = decryptData(infoResponse.data.data);

  const downloadResponse = await axios.post(
    `https://${cdn}/download`,
    { downloadType: 'audio', quality: String(quality), key: info.key },
    { headers: { 'Content-Type': 'application/json', 'User-Agent': 'Mozilla/5.0', 'Referer': 'https://save-tube.com/' } }
  );

  return { title: info.title, downloadUrl: downloadResponse.data.data.downloadUrl };
}

async function innerTubeRequest(endpoint, data) {
  const res = await axios.post(
    `https://www.youtube.com/youtubei/v1/${endpoint}?prettyPrint=false`,
    data,
    {
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0',
        'X-YouTube-Client-Name': '1',
        'X-YouTube-Client-Version': '2.20250709.01.00'
      }
    }
  );
  return res.data;
}

async function searchYoutube(query) {
  const json = await innerTubeRequest('search', {
    context: { client: { clientName: 'WEB', clientVersion: '2.20250709.01.00' } },
    query
  });

  const contents = json.contents?.twoColumnSearchResultsRenderer?.primaryContents?.sectionListRenderer?.contents || [];

  for (const section of contents) {
    const items = section.itemSectionRenderer?.contents || [];
    for (const item of items) {
      const v = item.videoRenderer;
      if (!v) continue;
      return {
        title: v.title?.runs?.map(x => x.text).join('') || '',
        url: `https://youtu.be/${v.videoId}`,
        videoId: v.videoId,
        author: v.ownerText?.runs?.[0]?.text || 'YouTube'
      };
    }
  }
  throw new Error('Lagu tidak ditemukan');
}

// Endpoint API untuk Web
app.get('/api/search', async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Masukkan query pencarian!' });

    let videoInfo;
    if (/(youtube.com|youtu.be)/i.test(q)) {
      const videoId = getVideoId(q);
      videoInfo = { url: q, videoId, author: 'YouTube' };
    } else {
      videoInfo = await searchYoutube(q);
    }

    const dl = await downloadFromSavetube(videoInfo.url, 128);

    res.json({
      title: dl.title || videoInfo.title,
      artist: videoInfo.author,
      audioUrl: dl.downloadUrl,
      cover: videoInfo.videoId ? `https://i.ytimg.com/vi/${videoInfo.videoId}/hqdefault.jpg` : ''
    });
  } catch (err) {
    res.status(500).json({ error: err.message || 'Gagal memproses lagu' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`? Web & Server berjalan di: http://localhost:${PORT}`);
});
