const carouselImages = [
    'img/baby-yoda.svg',
    'img/banana.svg',
    'img/girl.svg',
    'img/viking.svg'
]

let currentIdx = 0;

function showCurrentImage() {
    const imgContainer = document.querySelector('.products-carousel .current-image');
    imgContainer.src =  carouselImages[currentIdx];       
}

function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1) currentIdx = 0;
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0) currentIdx = carouselImages.length - 1;
    showCurrentImage();
}

showCurrentImage();

setInterval(next, 2000);

document.querySelector('.products-carousel .next')
  .addEventListener('click', next);

document.querySelector('.products-carousel .prev')
  .addEventListener('click', prev);