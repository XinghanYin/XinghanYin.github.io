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
const cdnUrlInput = document.getElementById('cdnUrl');

let photos = [];
let currentPhotoIndex = 0;

cdnUrlInput.addEventListener('change', () => {
  const cdnUrl = cdnUrlInput.value;
  fetch('photos.json')
    .then(response => response.json())
    .then(data => {
      photos = data.map(photo => ({
        ...photo,
        url: `${cdnUrl}${photo.url}`
      }));
      displayPhoto();
    });
});

function displayPhoto() {
  const photo = photos[currentPhotoIndex];
  galleryPhoto.src = photo.url;

  seriesInfo.textContent = photo.series ? `Series: ${photo.series}` : '';
  cameraInfo.textContent = photo.camera ? `Camera: ${photo.camera}` : '';
  lensInfo.textContent = photo.lens ? `Lens: ${photo.lens}` : '';
  focalLengthInfo.textContent = photo.focalLength ? `Focal Length: ${photo.focalLength}` : '';
  locationInfo.textContent = photo.location ? `Location: ${photo.location}` : '';
}

function showPreviousPhoto() {
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  displayPhoto();
}

function showNextPhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  displayPhoto();
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