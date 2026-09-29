// Data Lagu Manual (Tetap ada sebagai default)
const songs = [
  { title: "Consume", artist: "Chase Atlantic", audio: "audio/consume.mp3", cover: "856298.jpg" },
  { title: "Perfect", artist: "Ed Sheeran", audio: "audio/perfect.mp3", cover: "856298.jpg" },
  { title: "Unconditionally", artist: "Katy Perry", audio: "audio/unconditionally.mp3", cover: "856298.jpg" },
  { title: "Rewrite the Stars", artist: "James Arthur & Anne-Marie", audio: "audio/rewrite-the-stars.mp3", cover: "856298.jpg" },
  { title: "Somebody's Pleasure", artist: "Aziz Hedra", audio: "audio/somebodys-pleasure.mp3", cover: "856298.jpg" },
  { title: "I Wanna Be Yours", artist: "Arctic Monkeys", audio: "audio/i-wanna-be-yours.mp3", cover: "856298.jpg" }
];

let currentSongIndex = 0;
let isRealtimePlaying = false; // Penanda apakah yang sedang diputar adalah hasil pencarian

const songListEl = document.getElementById('songList');
const playerContainer = document.getElementById('playerContainer');
const backBtn = document.getElementById('backBtn');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressContainer = document.getElementById('progressContainer');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');

// --- RENDER PLAYLIST MANUAL ---
function renderSongs() {
  songListEl.innerHTML = '';
  songs.forEach((song, index) => {
    const item = document.createElement('div');
    item.className = 'song-item';
    item.innerHTML = `
      <div class="song-details" style="background: #2a1b4e; padding: 15px; margin-bottom: 10px; border-radius: 12px; cursor: pointer;">
        <h3 style="margin:0; color:#fff; font-size:16px;">${song.title}</h3>
        <p style="margin:5px 0 0; color:#aaa; font-size:12px;">${song.artist}</p>
      </div>
    `;
    item.addEventListener('click', () => loadAndPlay(index));
    songListEl.appendChild(item);
  });
}

function loadAndPlay(index) {
  isRealtimePlaying = false;
  currentSongIndex = index;
  const song = songs[index];
  
  document.getElementById('songTitle').innerText = song.title;
  document.getElementById('songArtist').innerText = song.artist;
  document.getElementById('songCover').src = song.cover;
  audioPlayer.src = song.audio;
  
  document.querySelector('.container').style.display = 'none';
  playerContainer.style.display = 'block';
  
  audioPlayer.play();
  playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

// --- LOGIKA PENCARIAN REAL-TIME ---
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value.trim();
  if (!query) return alert('Masukkan lagu yang ingin dicari!');

  searchBtn.innerText = '?';
  searchBtn.disabled = true;

  try {
    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
    const data = await res.json();

    if (data.error) throw new Error(data.error);

    // Mainkan hasil scraping langsung
    isRealtimePlaying = true;
    document.getElementById('songTitle').innerText = data.title;
    document.getElementById('songArtist').innerText = data.artist || 'YouTube';
    document.getElementById('songCover').src = data.cover || '856298.jpg';
    audioPlayer.src = data.audioUrl;

    document.querySelector('.container').style.display = 'none';
    playerContainer.style.display = 'block';

    audioPlayer.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';

  } catch (err) {
    alert(`Error: ${err.message}`);
  } finally {
    searchBtn.innerText = 'Cari';
    searchBtn.disabled = false;
  }
});

// --- KONTROL PLAYER ---
playBtn.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

prevBtn.addEventListener('click', () => {
  if (isRealtimePlaying) return; // Nonaktifkan prev/next jika lagu dari pencarian
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadAndPlay(currentSongIndex);
});

nextBtn.addEventListener('click', () => {
  if (isRealtimePlaying) return; 
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadAndPlay(currentSongIndex);
});

backBtn.addEventListener('click', () => {
  document.querySelector('.container').style.display = 'block';
  playerContainer.style.display = 'none';
});

// Update Progress Bar
audioPlayer.addEventListener('timeupdate', () => {
  const { currentTime, duration } = audioPlayer;
  if (duration) {
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    let currentMins = Math.floor(currentTime / 60);
    let currentSecs = Math.floor(currentTime % 60);
    if (currentSecs < 10) currentSecs = `0${currentSecs}`;
    currentTimeEl.innerText = `${currentMins}:${currentSecs}`;

    let durMins = Math.floor(duration / 60);
    let durSecs = Math.floor(duration % 60);
    if (durSecs < 10) durSecs = `0${durSecs}`;
    durationEl.innerText = `${durMins}:${durSecs}`;
  }
});

progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = audioPlayer.duration;
  audioPlayer.currentTime = (clickX / width) * duration;
});

audioPlayer.addEventListener('ended', () => {
  if (!isRealtimePlaying) nextBtn.click();
});

// Init
renderSongs();
