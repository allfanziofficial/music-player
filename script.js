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
const playerSpeedSlider = document.getElementById('playerSpeedSlider');
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay');

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
            { time: 0.8, text: "She said, Careful, or you'll lose it" },
            { time: 4, text: "But, girl, I'm only human," },
            { time: 7, text: "And I know there's a blade where your heart is" },
            { time: 10, text: "And you know how to use it" },
            { time: 13, text: "And you can take my flesh if you want girl" },
            { time: 16, text: "But, baby, don't abuse it (Calm down)" },
            { time: 19, text: "These voices in my head screaming, Run now (Don't run)" },
            { time: 22, text: "I'm praying that they're human" },
            { time: 25, text: "Please understand that I'm trying my hardest" },
            { time: 28, text: "My head's a mess, but I'm trying regardless" },
            { time: 31, text: "Anxiety is one hell of a problem" },
            { time: 34, text: "She's latching onto me, I can't resolve it" },
            { time: 37, text: "It's not right, it's not fair, it's not fair" },
            { time: 41.5, text: "It's not fair, it's not fair, it's not fair" },
            { time: 47, text: "Oh, no, no, no, ooh-ooh" },
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
            { time: 2.9 , text: "I found a love for me" },
            { time: 10.6, text: "Oh, darlin, just dive right in and follow my lead" },
            { time: 18, text: "I found a girl, beautiful and sweet" },
            { time: 25, text: "I never knew you were the someone waiting for me" },
            { time: 32, text: "'Cause we were just kids when we fell in love" },
            { time: 36.7, text: "Not knowin' what it was" },
            { time: 40.5, text: "I will not give you up this time" },
            { time: 48, text: "But, darlin', just kiss me slow" },
            { time: 51.6, text: "Your heart is all I own" },
            { time: 55.9, text: "And in your eyes, you're holdin' mine" },
            { time: 62.3, text: "Baby, I'm dancing in the dark with you between my arms" },
            { time: 73.6, text: "Barefoot on the grass, listening to our favorite song" },
            { time: 80.9, text: "When you said you looked a mess, I whispered underneath my breath" },
            { time: 88, text: "But you heard it, darling, you look perfect tonight" }
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
            { time: 7.1, text: "Oh no, did I get too close?" },
            { time: 12, text: "Oh, did I almost see what's really on the inside?" },
            { time: 22.6, text: "All your insecurities" },
            { time: 27.3, text: "All the dirty laundry" },
            { time: 30.3, text: "Never made me blink one time" },
            { time: 36.5, text: "Unconditional, unconditionally" },
            { time: 44, text: "I will love you unconditionally" },
            { time: 51, text: "There is no fear now" },
            { time: 55, text: "Let go and just be free" },
            { time: 58.6, text: "I will love you unconditionally" },
            { time: 67, text: "So come just as you are to me" },
            { time: 71, text: "Don't need apologies" },
            { time: 74.9, text: "Know that you are worthy" },
            { time: 82, text: "I'll take your bad days with your good" },
            { time: 86.5, text: "Walk through the storm, I would" },
            { time: 90, text: "I'd do it all because I love you" },
            { time: 96, text: "I love you" },
            { time: 99.5, text: "Unconditional, unconditionally" },
            { time: 107, text: "I will love you unconditionally" },
            { time: 114, text: "There is no fear now" },
            { time: 118, text: "Let go and just be free" },
            { time: 122, text: "I will love you unconditionally" },
            { time: 129.5, text: "So open up your heart and just let it begin" },
            { time: 133, text: "Open up your heart and just let it begin" },
            { time: 136.9, text: "Open up your heart and just let it begin" },
            { time: 141, text: "Open up your heart" },            
            { time: 145, text: "Acceptance is the key to be" },
            { time: 150.6, text: "To be truly free" },
            { time: 154, text: "Will you do the same for me?" },
            { time: 162.5, text: "Unconditional, unconditionally" },
            { time: 170, text: "I will love you unconditionally" },
            { time: 177.8, text: "There is no fear now" },
            { time: 181, text: "Let go and just be free" },
            { time: 185, text: "I will love you unconditionally" },
            { time: 200, text: "I will love you (Unconditionally)" },
            { time: 207.8, text: "I will love you" },
            { time: 215, text: "I will love you unconditionally" }
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
            { time: 9.3, text: "You know I want you" },
            { time: 12, text: "It's not a secret I try to hide" },
            { time: 16.5, text: "You know you want me" },
            { time: 19.3, text: "So don't keep sayin' our hands are tied" },
            { time: 23, text: "You claim it's not in the cards" },
            { time: 26, text: "And fate is pullin' you miles away and out of reach from me" },
            { time: 30.5, text: "But you're here in my heart" },
            { time: 33.5, text: "So who can stop me if I decide that you're my destiny?" },
            { time: 38, text: "What if we rewrite the stars?" },
            { time: 41.5, text: "Say you were made to be mine" },
            { time: 45.3, text: "Nothin' could keep us apart" },
            { time: 49, text: "You'd be the one I was meant to find" },
            { time: 52.8, text: "It's up to you and it's up to me" },
            { time: 56.5, text: "No one can say what we get to be" },
            { time: 60, text: "So why don't we rewrite the stars?" },
            { time: 64, text: "Maybe the world could be ours tonight" },
            { time: 75.5, text: "You think it's easy" },
            { time: 78, text: "You think I don't wanna run to you, yeah" },
            { time: 82.5, text: "But there are mountains" },
            { time: 86, text: "And there are doors that we can't walk through" },
            { time: 90, text: "I know you're wonderin' why" },
            { time: 92.5, text: "Because we're able to be just you and me within these walls" },
            { time: 97.5, text: "But when we go outside" },
            { time: 100, text: "You're gonna wake up and see that it was hopeless after all" },
            { time: 105, text: "No one can rewrite the stars" },
            { time: 108.5, text: "How can you say you'll be mine?" },
            { time: 112, text: "Everything keeps us apart" },
            { time: 116, text: "And I'm not the one you were meant to find" },
            { time: 119.5, text: "It's not up to you, it's not up to me" },
            { time: 123, text: "When everyone tells us what we can be" },
            { time: 127, text: "And how can we rewrite the stars?" },
            { time: 131, text: "Say that the world can be ours tonight" },
            { time: 135, text: "All I want is to fly with you" },
            { time: 139, text: "All I want is to fall with you" },
            { time: 142.5, text: "So just give me all of you" },
            { time: 145.5, text: "It feels impossible" },
            { time: 147.5, text: "It's not impossible" },
            { time: 149.5, text: "Is it impossible?" },
            { time: 151, text: "Say that it's possible" },
            { time: 153.5, text: "How do we rewrite the stars?" },
            { time: 157, text: "Say you were made to be mine" },
            { time: 200.5, text: "And nothin' could keep us apart" },
            { time: 204.5, text: "'Cause you are the one I was meant to find" },
            { time: 208, text: "It's up to you and it's up to me" },
            { time: 212, text: "No one could say what we get to be" },
            { time: 215.5, text: "And why don't we rewrite the stars?" },
            { time: 219.5, text: "Changin' the world to be ours" },
            { time: 226, text: "You know I want you" },
            { time: 229, text: "It's not a secret I try to hide" },
            { time: 233, text: "But I can't have you" },
            { time: 236.5, text: "We're bound to break and my hands are tied" }
        ]
    },
    {
        id: 5,
        title: "Somebody's Pleasure",
        artist: "Aziz Hedra", 
        album: "Unreleased",
        albumArtUrl: "https://tse3.mm.bing.net/th?id=OIP.5fDFhJU8ZYGRlPD4ffPlgAHaHa&pid=Api&P=0&h=220", 
        audioSrc: "audio/Somebodys Pleasure.mp3",
        videoBgSrc: "videos/somebodys_pleasure_bg.mp4",
        lyrics: [
            { time: 12.5, text: "I've been too busy ignoring and hiding" },
            { time: 18, text: "About what my heart actually say" },
            { time: 24, text: "Stay awake while I'm drowning on my thoughts" },
            { time: 30, text: "Sometimes a happiness is just a happiness" },
            { time: 36.5, text: "I've never been enjoying my serenity" },
            { time: 42.5, text: "Even if I've got a lot of company" },
            { time: 48, text: "That makes me happy" },
            { time: 54, text: "Soul try to figure it out" },
            { time: 57, text: "From where I've been escaping" },
            { time: 60.5, text: "Running to end all the sin" },
            { time: 63.5, text: "Get away from the pressure" },
            { time: 66, text: "Wondering to get a love that is so pure" },
            { time: 72, text: "Gotta have to always make sure" },
            { time: 78, text: "That I'm not just somebody's pleasure" },
            { time: 84.5, text: "I always pretending and lying" },
            { time: 91, text: "I got used to feel empty" },
            { time: 96.5, text: "'Cause all I got is unhappy" },
            { time: 103, text: "Happiness, can't I get happiness?" },
            { time: 109, text: "I've never been enjoying my serenity" },
            { time: 114, text: "Even if I've got a lot of company" },
            { time: 120.5, text: "That makes me happy" },
            { time: 127, text: "And I don't even feel my own pain" },
            { time: 133, text: "Whatever when the storms pouring rain" },
            { time: 138, text: "Feels like a wind" },
            { time: 145, text: "Soul try to figure it out" },
            { time: 148.5, text: "From where I've been escaping" },
            { time: 151.5, text: "Running to end all the sin" },
            { time: 154, text: "Get away from the pressure" },
            { time: 157, text: "Wondering to get a love that is so pure" },
            { time: 163, text: "Gotta have to always make sure" },
            { time: 169.5, text: "That I'm not just somebody's pleasure" },
            { time: 175.5, text: "I hold imagination" },
            { time: 178.5, text: "Cover all of the sadness" },
            { time: 181.5, text: "I don't feel something special" },
            { time: 184.5, text: "Turn off the phone to get some spatial" },
            { time: 187.5, text: "Never thought I'd living in true" },
            { time: 191, text: "The truth that has been so blue" },
            { time: 194, text: "It was in a blink of an eye" },
            { time: 197, text: "Find a way how to say goodbye" },
            { time: 202, text: "I've got to take me away from all sadness" },
            { time: 206, text: "Stitch all my wounds, confess all the sins" },
            { time: 209, text: "And took all my insecurities" },
            { time: 213.5, text: "When will I got the love that is so pure?" },
            { time: 219.5, text: "Gotta have to always make sure" },
            { time: 226, text: "That I'm not just, I'm not just somebody's pleasure" },
            { time: 232, text: "Gotta have, gotta have to always make sure" },
            { time: 238, text: "I'm not just somebody's pleasure" }
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
            { time: 21, text: "I wanna be your vacuum cleaner" },
            { time: 25, text: "Breathing in your dust" },
            { time: 30, text: "I wanna be your Ford Cortina" },
            { time: 34.5, text: "I will never rust" },
            { time: 38.5, text: "If you like your coffee hot" },
            { time: 42.5, text: "Let me be your coffee pot" },
            { time: 47, text: "You call the shots, babe" },
            { time: 51, text: "I just wanna be yours" },
            { time: 56.5, text: "Secrets I have held in my heart" },
            { time: 65, text: "Are harder to hide than I thought" },
            { time: 73, text: "Maybe I just wanna be yours" },
            { time: 82, text: "I wanna be yours, I wanna be yours" },
            { time: 92, text: "Wanna be yours, wanna be yours, wanna be yours" },
            { time: 100, text: "Let me be your 'leccy meter and I'll never run out" },
            { time: 104, text: "Let me be the portable heater that you'll get cold without" },
            { time: 108.5, text: "I wanna be your setting lotion (wanna be)" },
            { time: 112.5, text: "Hold your hair in deep devotion (how deep?)" },
            { time: 117.5, text: "At least as deep as the Pacific Ocean" },
            { time: 121, text: "I wanna be yours" },
            { time: 126, text: "Secrets I have held in my heart" },
            { time: 134, text: "Are harder to hide than I thought" },
            { time: 142, text: "Maybe I just wanna be yours" },
            { time: 151, text: "I wanna be yours, I wanna be yours" },
            { time: 172, text: "I wanna be your vacuum cleaner (Wanna be yours)" },
            { time: 176, text: "Breathing in your dust (Wanna be yours)" },
            { time: 181, text: "I wanna be your Ford Cortina (Wanna be yours)" },
            { time: 185, text: "I will never rust (Wanna be yours)" },
            { time: 188.5, text: "I just wanna be yours (Wanna be yours)" },
            { time: 193, text: "I just wanna be yours (Wanna be yours)" },
            { time: 197.5, text: "I just wanna be yours (Wanna be yours)" }
        ]
    },
    {
        id: 7,
        title: "Multo",
        artist: "Dilaw",
        album: "Sansinukob",
        albumArtUrl: "https://c.termai.cc/i40/PqI2綖x8",
        audioSrc: "audio/multo.mp3", 
        videoBgSrc: "videos/multo.mp4", 
        lyrics: [
            { time: 15.5, text: "Bawat pagpihit ng manibela" },
            { time: 19.1, text: "Kalsada'y mistulang eksena sa pelikula" },
            { time: 22.8, text: "'Di mapigilang isipin ka" },
            { time: 26.5, text: "Lalo na't bumubuhos ang ulan" },
            { time: 30.1, text: "At nilalamig na ang mga kamay" },
            { time: 33.7, text: "Sumasayaw sa himig ng iyong ambon" },
            { time: 37.3, text: "Bumibilog, umiikot, paikot-ikot lang" },
            { time: 41, text: "Pinapanood ang iyong bawat galaw" },
            { time: 44.5, text: "Habang ako'y nalulunod sa 'yong mga tingin" },
            { time: 48, text: "Pilitin ma'y 'di makawala sa'yo" },
            { time: 51.5, text: "Bakit ba naman kasi ganito?" },
            { time: 54.9, text: "'Di na mapakali, 'di na mapalagay" },
            { time: 59.5, text: "Ang puso kong ito'y bihag mo na, sinta" },
            { time: 65, text: "Para bang multo, 'di maalis sa isipan ko" },
            { time: 72.8, text: "Ang 'yong mukha, ang 'yong ngiti, ang lahat sa 'yo" },
            { time: 79.5, text: "Bawat gabi, sa panaginip ay nando'n ka" },
            { time: 86.5, text: "Hinahagkan, niyayakap, ngunit 'di mahawakan" },
            { time: 90.1, text: "Isang multo ng nakaraan, 'di makalimutan" },
            { time: 97, text: "Nagpaparamdam, ngunit 'di na mababalikan" },
            { time: 101.5, text: "Pinapanood ang iyong bawat galaw" },
            { time: 105, text: "Habang ako'y nalulunod sa 'yong mga tingin" },
            { time: 108.8, text: "Pilitin ma'y 'di makawala sa'yo" },
            { time: 112.5, text: "Bakit ba naman kasi ganito?" },
            { time: 116, text: "'Di na mapakali, 'di na mapalagay" },
            { time: 121, text: "Ang puso kong ito'y bihag mo na, sinta" },
            { time: 126.9, text: "Para bang multo, 'di maalis sa isipan ko" },
            { time: 134, text: "Ang 'yong mukha, ang 'yong ngiti, ang lahat sa 'yo" },
            { time: 140, text: "Bakit ba ganito? Bakit ba lagi kang nandito?" },
            { time: 144.5, text: "Sa bawat sulok ng aking mundo" },
            { time: 148, text: "Isang multo, isang multo" },
            { time: 151.3, text: "Bakit ba ganito? Bakit ba lagi kang nandito?" },
            { time: 155.5, text: "Sa bawat sulok ng aking mundo" },
            { time: 158.8, text: "Isang multo, isang multo ka" },
            { time: 162.8, text: "'Di na mapakali, 'di na mapalagay" },
            { time: 168.5, text: "Ang puso kong ito'y bihag mo na, sinta" },
            { time: 173.8, text: "Para bang multo, 'di maalis sa isipan ko" },
            { time: 181, text: "Ang 'yong mukha, ang 'yong ngiti, ang lahat sa 'yo" }
        ]
    },
    {
        id: 8,
        title: "About You",
        artist: "The 1975",
        album: "Being Funny in a Foreign Language",
        albumArtUrl: "https://c.termai.cc/i0/c囌5屸",
        audioSrc: "audio/aboutyou.mp3",
        videoBgSrc: "videos/about.mp4",
        lyrics: [
            { time: 27.5, text: "I know a place" },
            { time: 31, text: "It's somewhere I go when I'm alone" },
            { time: 36, text: "I know a place" },
            { time: 39, text: "It's somewhere you'd say is pretty weird" },
            { time: 44, text: "I know a place" },
            { time: 47.5, text: "It's somewhere I go when I'm alone" },
            { time: 52.8, text: "And I know you'd love it there" },
            { time: 56.5, text: "So I'm not gonna take you there" },
            { time: 60, text: "There's a plane that's landin'" },
            { time: 63.8, text: "On the strip, it's a 757" },
            { time: 68, text: "There's a place I know" },
            { time: 72, text: "It's a place I go when I'm alone" },
            { time: 76.8, text: "I know a place" },
            { time: 80, text: "It's a place I go when I'm alone" },
            { time: 85.5, text: "And I know you'd love it there" },
            { time: 89, text: "So I'm not gonna take you there" },
            { time: 130, text: "Do you think I have forgotten?" },
            { time: 134, text: "Do you think I have forgotten?" },
            { time: 137.5, text: "Do you think I have forgotten about you?" },
            { time: 198, text: "You and I were alive" },
            { time: 202, text: "With the G.O.Y.A. in our eyes" },
            { time: 206, text: "I was goin' on about my life" },
            { time: 210, text: "And you said, \"I've been so worried 'bout you\"" },
            { time: 214.5, text: "I thought I'd lived a thousand lives" },
            { time: 219, text: "And I don't wanna die" },
            { time: 222.5, text: "But I've got no spiritual guide" },
            { time: 226, text: "And I'm not surprised" },
            { time: 229.8, text: "Do you think I have forgotten?" },
            { time: 233.8, text: "Do you think I have forgotten?" },
            { time: 238, text: "Do you think I have forgotten about you?" },
            { time: 243.5, text: "I'm sure that you're drinkin'" },
            { time: 247.5, text: "I'm sure that you're drinkin'" },
            { time: 251.5, text: "I'm sure that you're drinkin' about you" },
            { time: 256.5, text: "(Do you think I have forgotten about you?)" },
            { time: 260.5, text: "I'm sure that you're thinkin'" },
            { time: 264.5, text: "I'm sure that you're thinkin'" },
            { time: 268.5, text: "I'm sure that you're thinkin' about you" },
            { time: 273, text: "(Do you think I have forgotten about you?)" }
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
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.remove('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
    pauseTrack();
}

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
    backgroundVideo.pause();
    backgroundVideo.src = "";
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');

    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active');

    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        if (backgroundVideo.src !== window.location.origin + '/' + currentSong.videoBgSrc) {
            backgroundVideo.src = currentSong.videoBgSrc;
            backgroundVideo.load();
        }
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load();
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
        listItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(songs[currentSongIndex]);
            playTrack();
            showPlayerPage();
        });

        listItem.addEventListener('mouseenter', () => {
            if (homePage.classList.contains('active') && song.videoBgSrc) {
                backgroundVideo.src = song.videoBgSrc;
                backgroundVideo.load();
                backgroundVideoContainer.classList.add('active');
                backgroundVideo.play().catch(e => console.error("Error playing video on hover:", e));
                bodyElement.classList.add('player-active-bg');
            }
        });
        listItem.addEventListener('mouseleave', () => {
            if (homePage.classList.contains('active')) {
                backgroundVideoContainer.classList.remove('active');
                backgroundVideo.pause();
                backgroundVideo.src = "";
                backgroundVideo.load();
                bodyElement.classList.remove('player-active-bg');
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
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia.</p>";
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    
    renderLyrics(song.lyrics);
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
    showPlayerPage(); // Pastikan background video diperbarui saat lagu di-load
}

function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    if (!lyrics || lyrics.length === 0) {
        lyricsContainer.innerHTML = "<p>Lirik tidak tersedia untuk lagu ini.</p>";
        return;
    }

    lyrics.forEach(line => {
        const span = document.createElement('span');
        span.textContent = line.text;
        span.setAttribute('data-time', line.time);
        span.classList.add('lyric-line');
        lyricsContainer.appendChild(span);
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
    backgroundVideo.play().catch(e => console.error("Error playing video background on track play:", e));
    updatePlayPauseIcon();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    if(backgroundVideo.src) backgroundVideo.pause();
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
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
}

function nextTrackLogic() {
    if (songs.length === 0) return;

    if (repeatMode === 2 && currentSongIndex === songs.length - 1 && !isShuffle) {
        currentSongIndex = 0;
        loadSong(songs[currentSongIndex]);
        playTrack();
        return;
    }
    
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
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
}

audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        const currentTime = audioPlayer.currentTime;
        const lyricLines = lyricsContainer.querySelectorAll('.lyric-line');
        let highlightedLine = null;

        lyricLines.forEach((line, index) => {
            const lineTime = parseFloat(line.getAttribute('data-time'));
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

        if (highlightedLine) {
            const containerRect = lyricsContainer.getBoundingClientRect();
            const lineRect = highlightedLine.getBoundingClientRect();
            const isOutsideView = lineRect.top < containerRect.top || lineRect.bottom > containerRect.bottom;

            if (isOutsideView) {
                highlightedLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
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

playerSpeedSlider.addEventListener('input', (e) => {
    const newSpeed = parseFloat(e.target.value);
    audioPlayer.playbackRate = newSpeed;
    currentSpeedDisplay.textContent = `${newSpeed.toFixed(2)}x`;
});

playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) { // No repeat
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) { // Repeat one
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else { // Repeat all (mode 2)
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
        // Ditangani oleh audioPlayer.loop = true;
        // Cukup putar ulang video jika ada
        if(backgroundVideo.src) {
            backgroundVideo.currentTime = 0;
            backgroundVideo.play();
        }
    } else {
        nextTrackLogic();
    }
});

backToHomeFromDetailBtn.addEventListener('click', showHomePage);
backToHomeBtn.addEventListener('click', showHomePage);

playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// --- Initialization ---
function init() {
    renderSongList();
    
    if (songs.length > 0) {
        // Load lagu pertama tapi jangan langsung putar, hanya siapkan info
        const initialSong = songs[currentSongIndex];
        albumArtPlayer.src = initialSong.albumArtUrl;
        playerTrackTitle.textContent = initialSong.title;
        playerTrackArtist.textContent = initialSong.artist;
        renderLyrics(initialSong.lyrics);
        audioPlayer.src = initialSong.audioSrc;
        audioPlayer.onloadedmetadata = () => {
             playerTotalDuration.textContent = formatTime(audioPlayer.duration);
        };
    } else {
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik";
        playerTrackTitle.textContent = "Tidak Ada Lagu";
        playerTrackArtist.textContent = "Tambahkan lagu";
        lyricsContainer.innerHTML = "<p>Silakan tambahkan lagu dari daftar.</p>";
    }
    audioPlayer.volume = playerVolumeSlider.value;
    audioPlayer.playbackRate = parseFloat(playerSpeedSlider.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
    updatePlayPauseIcon();
    updateRepeatButtonUI();
    showHomePage();
}

init();
