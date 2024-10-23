let slideIndex = 1;

function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

const musicTracks = [
    'music1.mp3',
    'music2.mp3',
    'music3.mp3',
    'music4.mp3',
    'music5.mp3'
];

let currentTrackIndex = 0;
const music = document.getElementById('backgroundMusic');

// Function to play the current music track
function playMusic() {
    music.src = musicTracks[currentTrackIndex];
    music.play();

    // Change the track when the current one ends
    music.onended = () => {
        currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length;
        playMusic();
    };
}

// Call the playMusic function when the page loads
window.onload = playMusic;
