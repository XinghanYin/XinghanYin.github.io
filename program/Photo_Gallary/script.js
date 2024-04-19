const CDN_URL = 'https://data.yinxinghan.com';

const images = [
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    // ...在这里添加更多图片的相对路径
].map(url => CDN_URL + url);

let lastImageIndex = -1;

function getRandomImageIndex() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (randomIndex === lastImageIndex);
    lastImageIndex = randomIndex;
    return randomIndex;
}

function setRandomImage() {
    const randomIndex = getRandomImageIndex();
    const bg1 = document.getElementById("bg1");
    const bg2 = document.getElementById("bg2");

    const img = new Image();
    img.onload = function() {
        if (bg1.style.opacity === "" || bg1.style.opacity === "1") {
            bg2.style.backgroundImage = `url('${this.src}')`;
            bg2.style.opacity = 1;
            bg1.style.opacity = 0;
        } else {
            bg1.style.backgroundImage = `url('${this.src}')`;
            bg1.style.opacity = 1;
            bg2.style.opacity = 0;
        }
    };
    img.onerror = function() {
        console.error('Failed to load image: ', this.src);
    };
    img.src = images[randomIndex];
}

window.onload = function() {
    setRandomImage();
};

document.body.onclick = setRandomImage;