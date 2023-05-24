
const bannerContainer = document.querySelector('.banner-container');

const bannerImagens = document.querySelectorAll('.banner-image');

let controleBanner = 0;

function trocaBanner(){
    controleBanner = (controleBanner + 1) % bannerImagens.length;
    bannerContainer.style.transform = `translateX(-${controleBanner * 100}%)`;
}

setInterval(trocaBanner, 30000);