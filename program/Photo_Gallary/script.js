const galleryPhoto = document.getElementById('galleryPhoto');
const fullscreenModal = document.getElementById('fullscreenModal');
const fullscreenPhoto = document.getElementById('fullscreenPhoto');
const closeBtn = document.getElementsByClassName('close')[0];
const cameraInfo = document.getElementById('camera');
const lensInfo = document.getElementById('lens');
const focalLengthInfo = document.getElementById('focalLength');
const locationInfo = document.getElementById('location');

let photos = [];
let currentPhotoIndex = 0;

fetch('photos.json')
  .then(response => response.json())
  .then(data => {
    photos = data;
    displayPhoto();
  });

function displayPhoto() {
  const photo = photos[currentPhotoIndex];
  galleryPhoto.src = photo.url;
  
  cameraInfo.textContent = photo.camera ? `Camera: ${photo.camera}` : '';
  lensInfo.textContent = photo.lens ? `Lens: ${photo.lens}` : '';
  focalLengthInfo.textContent = photo.focalLength ? `Focal Length: ${photo.focalLength}` : '';
  locationInfo.textContent = photo.location ? `Location: ${photo.location}` : '';
}

function displayRandomPhoto() {
  currentPhotoIndex = Math.floor(Math.random() * photos.length);
  displayPhoto();
}

function openFullscreen() {
  fullscreenPhoto.src = photos[currentPhotoIndex].url;
  fullscreenModal.style.display = "block";
}

function closeFullscreen() {
  fullscreenModal.style.display = "none";
}

galleryPhoto.addEventListener('click', () => {
  displayRandomPhoto();
  openFullscreen();
});
closeBtn.addEventListener('click', closeFullscreen);