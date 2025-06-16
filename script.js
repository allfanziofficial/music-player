// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');
const songListElement = document.getElementById('songList');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Tombol kembali dari player ke home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elemen untuk Halaman Detail Lagu (tidak akan langsung digunakan saat klik lagu, tapi tetap di-load)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Tombol play di halaman detail

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Tambahkan ini
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Tambahkan ini

// App State
let songs = [
    {
        id: 1,
        title: "Consume",
        artist: "Chase Atlantic",
        album: "Beauty in Death",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.VwivM--7Xx_SmgsqXBLi8AAAAA&pid=Api&P=0&h=220",
        audioSrc: "audio/consume.mp3",
        videoBgSrc: "videos/consume.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 10.5, text: "She said, Careful, or you'll lose it" },
            { time: 13.8, text: "But, girl, I'm only human," },
            { time: 17, text: "And I know there's a blade where your heart is" },
            { time: 20, text: "And you know how to use it" },
            { time: 23.3, text: "And you can take my flesh if you want girl" },
            { time: 26.3, text: "But, baby, don't abuse it (Calm down)" },
            { time: 29.3, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 32.3, text: "I'm praying that they're human" },
            { time: 35.3, text: "Please understand that I'm trying my hardest" },
            { time: 38.3, text: "My head's a mess, but I'm trying regardless" },
            { time: 41.3, text: "Anxiety is one hell of a problem" },
            { time: 44.3, text: "She's latching onto me, I can't resolve it" },
            { time: 47.3, text: "It's not right, it's not fair, it's not fair" },
            { time: 51.8, text: "It's not fair, it's not fair, it's not fair" },
            { time: 57, text: "Oh, no, no, no, ooh-ooh" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "Ed Sheeran",
        album: "÷ (Divide)",
        albumArtUrl: "https://tse4.mm.bing.net/th?id=OIP.TjS4z1jJTsl6K3-ADIXFywHaEK&pid=Api&P=0&h=220",
        audioSrc: "audio/Ed Sheeran - Perfect.mp3",
        videoBgSrc: "videos/perfect_bg.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 8.6, text: "I found a love for me" },
            { time: 15.9, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 23, text: "Well, I found a girl, beautiful and sweet" },
            { time: 30, text: "Oh, I never knew you were the someone waiting for me" },
            { time: 37.1, text: "'Cause we were just kids when we fell in love" },
            { time: 41.8, text: "Not knowin' what it was" },
            { time: 45.4, text: "I will not give you up this time" },
            { time: 52.8, text: "But, darlin', just kiss me slow" },
            { time: 56.5, text: "Your heart is all I own" },
            { time: 60.5, text: "And in your eyes, you're holdin' mine" },
            { time: 67.5, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 75.8, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 83, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 90.1, text: "But you heard it, darling, you look perfect tonight" }
        ]
    },    
    {
        id: 3,
        title: "Unconditionally",
        artist: "Katy Perry",
        album: "Prism",
        albumArtUrl: "https://i.ytimg.com/vi/4NGVxU0qhZ8/maxresdefault.jpg",
        audioSrc: "audio/Katy Perry - Unconditionally.mp3",
        videoBgSrc: "videos/unconditionally_bg.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 15.5, text: "Oh no, did I get too close?" },
            { time: 19.8, text: "Oh, did I almost see what's really on the inside?" },
            { time: 28.5, text: "All your insecurities" },
            { time: 32.8, text: "All the dirty laundry" },
            { time: 35.8, text: "Never made me blink one time" },
            { time: 42, text: "Unconditional, unconditionally" },
            { time: 49, text: "I will love you unconditionally" },
            { time: 56.5, text: "There is no fear now" },
            { time: 100, text: "Let go and just be free" },
            { time: 104, text: "I will love you unconditionally" },
            // ... dan seterusnya disesuaikan
        ]
    },
    {
        id: 4,
        title: "Rewrite the Stars",
        artist: "James Arthur & Anne-Marie",
        album: "The Greatest Showman: Reimagined",
        albumArtUrl: "https://i.ytimg.com/vi/BqGCJUXEqxQ/maxresdefault.jpg",
        audioSrc: "audio/Rewrite The Stars - James Arthur feat. Anne Marie.mp3",
        videoBgSrc: "videos/rewrite_the_stars_bg.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 13.2, text: "You know I want you" },
            { time: 16.5, text: "It's not a secret I try to hide" },
            { time: 20.1, text: "You know you want me" },
            { time: 23.5, text: "So don't keep sayin' our hands are tied" },
            { time: 26.8, text: "You claim it's not in the cards" },
            { time: 30, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 33.8, text: "But you're here in my heart" },
            { time: 37, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 42.1, text: "What if we rewrite the stars?" },
            { time: 45.3, text: "Say you were made to be mine" },
            { time: 48.8, text: "Nothin' could keep us apart" },
            { time: 52.3, text: "You'd be the one I was meant to find" },
            { time: 55.7, text: "It's up to you and it's up to me" },
            { time: 59.2, text: "No one can say what we get to be" },
            { time: 102.5, text: "So why don't we rewrite the stars?" },
            { time: 105.9, text: "Maybe the world could be ours tonight" },
            { time: 112.5, text: "You think it's easy" },
            { time: 115.8, text: "You think I don't wanna run to you, yeah" },
            { time: 119.2, text: "But there are mountains" },
            { time: 122.8, text: "And there are doors that we can't walk through" },
            { time: 126.1, text: "I know you're wonderin' why" },
            { time: 129.2, text: "Because we're able to be just you and me within these walls" },
            { time: 133, text: "But when we go outside" },
            { time: 136.2, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 141.2, text: "No one can rewrite the stars" },
            { time: 144.5, text: "How can you say you'll be mine?" },
            { time: 148, text: "Everything keeps us apart" },
            { time: 151.3, text: "And I'm not the one you were meant to find" },
            { time: 154.8, text: "It's not up to you, it's not up to me" },
            { time: 158.2, text: "When everyone tells us what we can be" },
            { time: 161.8, text: "And how can we rewrite the stars?" },
            { time: 165.2, text: "Say that the world can be ours tonight" },
            { time: 170.5, text: "All I want is to fly with you" },
            { time: 174, text: "All I want is to fall with you" },
            { time: 177.5, text: "So just give me all of you" },
            { time: 181, text: "It feels impossible" },
            { time: 182.9, text: "It's not impossible" },
            { time: 184.6, text: "Is it impossible?" },
            { time: 186.2, text: "Say that it's possible" },
            { time: 189.5, text: "How do we rewrite the stars?" },
            { time: 192.9, text: "Say you were made to be mine" },
            { time: 196.3, text: "And nothin' could keep us apart" },
            { time: 199.8, text: "'Cause you are the one I was meant to find" },
            { time: 203.2, text: "It's up to you and it's up to me" },
            { time: 206.6, text: "No one could say what we get to be" },
            { time: 210, text: "And why don't we rewrite the stars?" },
            { time: 213.5, text: "Changin' the world to be ours" },
            { time: 221.8, text: "You know I want you" },
            { time: 223.7, text: "It's not a secret I try to hide" },
            { time: 227.1, text: "But I can't have you" },
            { time: 230.5, text: "We're bound to break and my hands are tied" }
        ]
    },
    {
        id: 5,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "lesson",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "audio/Somebodys Pleasure.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 16.5, text: "I've been too busy ignoring and hiding" },
            { time: 21, text: "About what my heart actually say" },
            { time: 26.2, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 30, text: "Sometimes a happiness is just a happiness" },
            { time: 35.8, text: "I've never been enjoying my serenity" },
            { time: 40.5, text: "Even if I've got a lot of company" },
            { time: 44.5, text: "That makes me happy" },
            { time: 51, text: "Soul try to figure it out" },
            { time: 53.8, text: "From where I've been escaping" },
            { time: 56.5, text: "Running to end all the sin" },
            { time: 59, text: "Get away from the pressure" },
            { time: 61.5, text: "Wondering to get a love that is so pure" },
            { time: 66, text: "Gotta have to always make sure" },
            { time: 69, text: "That I'm not just somebody's pleasure" },
            { time: 74.2, text: "I always pretending and lying" },
            { time: 78.5, text: "I got used to feel empty" },
            { time: 83.2, text: "'Cause all I got is unhappy" },
            { time: 87.5, text: "Happiness, can't I get happiness?" },
            { time: 92.8, text: "I've never been enjoying my serenity" },
            { time: 97.5, text: "Even if I've got a lot of company" },
            { time: 101.5, text: "That makes me happy" },
            { time: 104, text: "And I don't even feel my own pain" },
            { time: 106.5, text: "Whatever when the storms pouring rain" },
            { time: 111, text: "Feels like a wind" },
            { time: 117.8, text: "Soul try to figure it out" },
            { time: 120.8, text: "From where I've been escaping" },
            { time: 123.5, text: "Running to end all the sin" },
            { time: 125.8, text: "Get away from the pressure" },
            { time: 128.5, text: "Wondering to get a love that is so pure" },
            { time: 133, text: "Gotta have to always make sure" },
            { time: 136, text: "That I'm not just somebody's pleasure" },
            { time: 141.5, text: "I hold imagination" },
            { time: 144, text: "Cover all of the sadness" },
            { time: 146.5, text: "I don't feel something special" },
            { time: 148.8, text: "Turn off the phone to get some spatial" },
            { time: 151.2, text: "Never thought I'd living in true" },
            { time: 153.8, text: "The truth that has been so blue" },
            { time: 156.2, text: "It was in a blink of an eye" },
            { time: 158.5, text: "Find a way how to say goodbye" },
            { time: 161.2, text: "I've got to take me away from all sadness" },
            { time: 165.5, text: "Stitch all my wounds, confess all the sins" },
            { time: 170.2, text: "And took all my insecurities" },
            { time: 175.5, text: "When will I got the love that is so pure?" },
            { time: 180, text: "Gotta have to always make sure" },
            { time: 183.2, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 189.2, text: "Gotta have, gotta have to always make sure" },
            { time: 194.5, text: "I'm not just somebody's pleasure" }
        ]
    },
    {
        id: 6,
        title: "I Wanna Be Yours",
        artist: "Arctic Monkeys",
        album: "AM",
        albumArtUrl: "https://i.ytimg.com/vi/fJLQCf4mFP0/hqdefault.jpg",
        audioSrc: "audio/I Wanna Be Yours.mp3",
        videoBgSrc: "videos/i_wanna_be_yours_bg.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 13.5, text: "I wanna be your vacuum cleaner" },
            { time: 16.8, text: "Breathing in your dust" },
            { time: 20.2, text: "I wanna be your Ford Cortina" },
            { time: 23.5, text: "I will never rust" },
            { time: 26.8, text: "If you like your coffee hot" },
            { time: 30.2, text: "Let me be your coffee pot" },
            { time: 33.5, text: "You call the shots, babe" },
            { time: 36.5, text: "I just wanna be yours" },
            { time: 42.5, text: "Secrets I have held in my heart" },
            { time: 46.5, text: "Are harder to hide than I thought" },
            { time: 49.5, text: "Maybe I just wanna be yours" },
            { time: 55, text: "I wanna be yours, I wanna be yours" },
            { time: 101.5, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 108.5, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 111.8, text: "Let me be the portable heater that you'll get cold without" },
            { time: 115.1, text: "I wanna be your setting lotion" },
            { time: 118.5, text: "Hold your hair in deep devotion" },
            { time: 122, text: "At least as deep as the Pacific Ocean" },
            { time: 128.1, text: "I wanna be yours" },
            { time: 134.2, text: "Secrets I have held in my heart" },
            { time: 138.2, text: "Are harder to hide than I thought" },
            { time: 141.2, text: "Maybe I just wanna be yours" },
            { time: 146.8, text: "I wanna be yours, I wanna be yours" },
            { time: 167, text: "I wanna be your vacuum cleaner" },
            { time: 170.2, text: "Breathing in your dust" },
            { time: 173.5, text: "I wanna be your Ford Cortina" },
            { time: 176.9, text: "I will never rust" },
            { time: 180.2, text: "I just wanna be yours" },
            { time: 183.5, text: "I just wanna be yours" },
            { time: 186.9, text: "I just wanna be yours" }
        ]
    },
    {
        id: 7,
        title: "Multo",
        artist: "Dilaw",
        album: "Sansinukob",
        albumArtUrl: "https://c.termai.cc/i40/PqI2綖x8",
        audioSrc: "audio/multo.mp3",
        videoBgSrc: "videos/multo_bg.mp4",
        lyrics: [
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 13.5, text: "Bawat pagpihit ng manibela" },
            { time: 17, text: "Kalsada'y mistulang eksena sa pelikula" },
            { time: 20.5, text: "'Di mapigilang isipin ka" },
            { time: 24, text: "Lalo na't bumubuhos ang ulan" },
            { time: 27.5, text: "At nilalamig na ang mga kamay" },
            { time: 30, text: "Sumasayaw sa himig ng iyong ambon" },
            { time: 33, text: "Bumibilog, umiikot, paikot-ikot lang" },
            { time: 37.4, text: "Pinapanood ang iyong bawat galaw" },
            { time: 40.5, text: "Habang ako'y nalulunod sa 'yong mga tingin" },
            { time: 44.2, text: "Pilitin ma'y 'di makawala sa'yo" },
            { time: 47.5, text: "Bakit ba naman kasi ganito?" },
            { time: 51, text: "'Di na mapakali, 'di na mapalagay" },
            { time: 57.5, text: "Ang puso kong ito'y bihag mo na, sinta" },
            { time: 61.5, text: "Para bang multo, 'di maalis sa isipan ko" },
            { time: 68, text: "Ang 'yong mukha, ang 'yong ngiti, ang lahat sa 'yo" },
            { time: 82, text: "Bawat gabi, sa panaginip ay nando'n ka" },
            { time: 88, text: "Hinahagkan, niyayakap, ngunit 'di mahawakan" },
            { time: 92.5, text: "Isang multo ng nakaraan, 'di makalimutan" },
            { time: 99, text: "Nagpaparamdam, ngunit 'di na mababalikan" },
            { time: 104, text: "Pinapanood ang iyong bawat galaw" },
            { time: 107.5, text: "Habang ako'y nalulunod sa 'yong mga tingin" },
            { time: 111.2, text: "Pilitin ma'y 'di makawala sa'yo" },
            { time: 114.5, text: "Bakit ba naman kasi ganito?" },
            { time: 118, text: "'Di na mapakali, 'di na mapalagay" },
            { time: 124.5, text: "Ang puso kong ito'y bihag mo na, sinta" },
            { time: 128.5, text: "Para bang multo, 'di maalis sa isipan ko" },
            { time: 135.5, text: "Ang 'yong mukha, ang 'yong ngiti, ang lahat sa 'yo" },
            { time: 142.2, text: "Bakit ba ganito? Bakit ba lagi kang nandito?" },
            { time: 145.8, text: "Sa bawat sulok ng aking mundo" },
            { time: 149, text: "Isang multo, isang multo" },
            { time: 152.8, text: "Bakit ba ganito? Bakit ba lagi kang nandito?" },
            { time: 156.5, text: "Sa bawat sulok ng aking mundo" },
            { time: 159.8, text: "Isang multo, isang multo ka" },
            { time: 165, text: "'Di na mapakali, 'di na mapalagay" },
            { time: 171.5, text: "Ang puso kong ito'y bihag mo na, sinta" },
            { time: 175.5, text: "Para bang multo, 'di maalis sa isipan ko" },
            { time: 182.5, text: "Ang 'yong mukha, ang 'yong ngiti, ang lahat sa 'yo" },
        ]
    },
    {
        id: 8,
        title: "About You",
        artist: "The 1975",
        album: "Being Funny in a Foreign Language",
        albumArtUrl: "https://c.termai.cc/i0/c囌5屸",
        audioSrc: "audio/about_you.mp3",
        videoBgSrc: "videos/about_you_bg.mp4",
        lyrics: [
            // Intro lagu ini sangat panjang, sekitar 1 menit 24 detik
            { time: 0.1, text: "♪ ♪ ♪ INTRO ♪ ♪ ♪" },
            { time: 84.2, text: "I know a place" },
            { time: 88.2, text: "It's somewhere I go when I'm alone" },
            { time: 92.2, text: "I know a place" },
            { time: 96, text: "It's somewhere you'd say is pretty weird" },
            { time: 100.6, text: "I know a place" },
            { time: 104.6, text: "It's somewhere I go when I'm alone" },
            { time: 109.1, text: "And I know you'd love it there" },
            { time: 113, text: "So I'm not gonna take you there" },
            { time: 117.5, text: "There's a plane that's landin'" },
            { time: 121.4, text: "On the strip, it's a 757" },
            { time: 125.5, text: "There's a place I know" },
            { time: 129.4, text: "It's a place I go when I'm alone" },
            { time: 133.5, text: "I know a place" },
            { time: 137.4, text: "It's a place I go when I'm alone" },
            { time: 142, text: "And I know you'd love it there" },
            { time: 145.8, text: "So I'm not gonna take you there" },
            { time: 150.5, text: "Do you think I have forgotten?" },
            { time: 154.6, text: "Do you think I have forgotten?" },
            { time: 158.8, text: "Do you think I have forgotten about you?" },
            { time: 168.1, text: "You and I were alive" },
            { time: 172.1, text: "With the G.O.Y.A. in our eyes" },
            { time: 176.1, text: "I was goin' on about my life" },
            { time: 180, text: "And you said, \"I've been so worried 'bout you\"" },
            { time: 184.6, text: "I thought I'd lived a thousand lives" },
            { time: 188.6, text: "And I don't wanna die" },
            { time: 192.5, text: "But I've got no spiritual guide" },
            { time: 196.5, text: "And I'm not surprised" },
            { time: 200, text: "Do you think I have forgotten?" },
            { time: 204.1, text: "Do you think I have forgotten?" },
            { time: 208.2, text: "Do you think I have forgotten about you?" },
            { time: 214.2, text: "I'm sure that you're drinkin'" },
            { time: 218.2, text: "I'm sure that you're drinkin'" },
            { time: 222.2, text: "I'm sure that you're drinkin' about you" },
            { time: 226.5, text: "(Do you think I have forgotten about you?)" },
            { time: 231, text: "I'm sure that you're thinkin'" },
            { time: 235, text: "I'm sure that you're thinkin'" },
            { time: 239, text: "I'm sure that you're thinkin' about you" },
            { time: 243.5, text: "(Do you think I have forgotten about you?)" }
        ]
    }
];
let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active'); // Pastikan detail page disembunyikan
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active'); // Sembunyikan video background
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
    pauseTrack(); // Jeda musik saat kembali ke home
}

// Fungsi untuk menampilkan halaman detail lagu (tetap dipertahankan, tapi tidak dipanggil dari song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Jeda video background
    backgroundVideo.src = ""; // Kosongkan src video
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active'); // Tampilkan video background

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load(); // Kosongkan src jika tidak ada video khusus
    }
}

// --- Home Page Logic ---
function renderSongList() {
    songListElement.innerHTML = '';
    if (songs.length === 0) {
        songListElement.innerHTML = '<li class="loading-songs">Tidak ada lagu tersedia.</li>';
        return;
    }
    songs.forEach((song, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-id', song.id);
        listItem.innerHTML = `
            <img src="${song.albumArtUrl}" alt="${song.title}" class="song-art-list">
            <div class="song-info-list">
                <h3>${song.title}</h3>
                <p>${song.artist}</p>
            </div>
        `;
        // --- Perubahan Penting di sini ---
        // Saat item lagu diklik, langsung muat & putar lagu lalu tampilkan halaman player
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage(); // Langsung pindah ke halaman pemutar musik
        });

        // Event listener untuk hover
        listItem.addEventListener('mouseenter', () => {
            // Hanya aktifkan video background jika kita di halaman home
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg'); // Tambahkan kelas untuk warna background body
            }
        });
        listItem.addEventListener('mouseleave', () => {
            // Sembunyikan video background hanya jika kita di halaman home
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause(); // Jeda video saat mouse meninggalkan
                backgroundVideo.src = ""; // Kosongkan src agar tidak memutar di background
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg'); // Hapus kelas warna background body
            }
        });

        songListElement.appendChild(listItem);
    });
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Lagu tidak ditemukan!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Lagu Tidak Tersedia";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>"; // Ganti textContent dengan innerHTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics); // Panggil fungsi renderLyrics
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
}

// Fungsi baru untuk merender lirik
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = ''; // Bersihkan container lirik
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time); // Simpan timestamp di data-attribute
        span.classList.add('lyric-line'); // Tambahkan kelas untuk styling
        lyricsContainer.appendChild(span);
        // Hapus penambahan <br> secara manual, gunakan CSS display:block atau flexbox
        // lyricsContainer.appendChild(document.createElement('br'));
    });
}


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("Tidak ada lagu untuk dimainkan.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error saat play:", error));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Perbarui video background
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Perbarui video background
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // --- Logic highlight lirik ---
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
            // Tentukan waktu berakhir baris lirik ini. Jika ini baris terakhir, anggap berakhir di akhir lagu.
            // Atau, lebih baik, anggap berakhir tepat sebelum baris berikutnya dimulai.
            let nextLineTime = Infinity; 
            if (index + 1 < lyricLines.length) {
                nextLineTime = parseFloat(lyricLines[index + 1].getAttribute('data-time'));
            }

            if (currentTime >= lineTime && currentTime < nextLineTime) {
                line.classList.add('highlight');
                highlightedLine = line;
            } else {
                line.classList.remove('highlight');
            }
        });

        // --- Auto-scroll lirik hanya jika baris yang disorot tidak terlihat ---
        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();

            // Periksa apakah baris di luar viewport kontainer
            const isOutsideTop = lineRect.top < containerRect.top;
            const isOutsideBottom = lineRect.bottom > containerRect.bottom;

            if (isOutsideTop || isOutsideBottom) {
                // Scroll agar baris terdekat muncul di dalam viewport, dengan animasi smooth
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener untuk slider kecepatan
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

audioPlayer.addEventListener('ended', () => {
    if (repeatMode === 1) {
        // Handled by audio.loop = true
    } else {
        nextTrack();
    }
});

// Event Listeners untuk tombol navigasi
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // Dari halaman detail ke home
backToHomeBtn.addEventListener('click', showHomePage); // Dari halaman player ke home

// Event Listener untuk tombol play dari halaman detail (jika Anda ingin menggunakannya)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    console.log("Initializing..."); // Tambahkan log untuk inisialisasi
    console.log("Songs array length:", songs.length); // Periksa jumlah lagu
    console.log("songListElement:", songListElement); // Cek apakah songListElement ditemukan

    renderSongList(); // Ini yang merender daftar lagu
    
    if (songs.length > 0) {
        loadSong(songs[currentSongIndex]);
    } else {
        // Ini akan ditampilkan jika array songs kosong
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = playerSpeedSlider.value; // Atur kecepatan awal
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`; // Perbarui tampilan kecepatan
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage(); // Mulai dari halaman daftar lagu
    console.log("Initialization complete."); // Log selesai inisialisasi
}

init();
