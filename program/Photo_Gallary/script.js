const galleryPhoto = document.getElementById('galleryPhoto');
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenPhoto = document.getElementById('fullscreenPhoto');
const closeBtn = document.getElementsByClassName('close')[0];
const seriesInfo = document.getElementById('series');
const cameraInfo = document.getElementById('camera');
const lensInfo = document.getElementById('lens');
const focalLengthInfo = document.getElementById('focalLength');
const locationInfo = document.getElementById('location');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

const CDN_URL = 'https://data.yinxinghan.com';

let photos = [];
let currentPhotoIndex = 0;

fetch('photos.json')
  .then(response => response.json())
  .then(data => {
    photos = data.map(photo => ({
      ...photo,
      url: `${CDN_URL}${photo.url}`
    }));
    shufflePhotos();
    displayPhoto();
  });

function shufflePhotos() {
  for (let i = photos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [photos[i], photos[j]] = [photos[j], photos[i]];
  }
}

function displayPhoto() {
  const photo = photos[currentPhotoIndex];
  galleryPhoto.src = photo.url;
  galleryPhoto.classList.remove('loaded');

  seriesInfo.textContent = photo.series ? `Series: ${photo.series}` : '';
  cameraInfo.textContent = photo.camera ? `Camera: ${photo.camera}` : '';
  lensInfo.textContent = photo.lens ? `Lens: ${photo.lens}` : '';
  focalLengthInfo.textContent = photo.focalLength ? `Focal Length: ${photo.focalLength}` : '';
  locationInfo.textContent = photo.location ? `Location: ${photo.location}` : '';

  galleryPhoto.addEventListener('load', () => {
    galleryPhoto.classList.add('loaded');
  });
}

function showPreviousPhoto() {
  galleryPhoto.classList.remove('loaded');
  setTimeout(() => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    displayPhoto();
  }, 500);
}

function showNextPhoto() {
  galleryPhoto.classList.remove('loaded');
  setTimeout(() => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    displayPhoto();
  }, 500);
}

function openFullscreen() {
  fullscreenPhoto.src = photos[currentPhotoIndex].url;
  fullscreenModal.style.display = "block";
}

function closeFullscreen() {
  fullscreenModal.style.display = "none";
}

prevButton.addEventListener('click', showPreviousPhoto);
nextButton.addEventListener('click', showNextPhoto);
galleryPhoto.addEventListener('click', openFullscreen);
closeBtn.addEventListener('click', closeFullscreen);