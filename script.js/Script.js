
let currentIndex = 0;
function moveCarousel(direction) {
    const carousel = document.getElementById('carousel');
    const totalCards = carousel.children.length;
    currentIndex = (currentIndex + direction + totalCards) % totalCards;
    carousel.style.transform = `translateX(-${currentIndex * 20}%)`;
}
