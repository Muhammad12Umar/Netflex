const carousel = document.getElementById("carousel");
let startX = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let isDragging = false;

carousel.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

carousel.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const currentX = e.touches[0].clientX;
  const diffX = currentX - startX;

  carousel.style.transform = `translateX(${prevTranslate + diffX}px)`;
});

carousel.addEventListener("touchend", (e) => {
  isDragging = false;
  const endX = e.changedTouches[0].clientX;
  const diffX = endX - startX;

  // Slide threshold
  if (diffX > 50) {
    moveCarousel(-1); // swipe right
  } else if (diffX < -50) {
    moveCarousel(1); // swipe left
  } else {
    carousel.style.transform = `translateX(${prevTranslate}px)`;
  }
});

function moveCarousel(direction) {
  const cardWidth = 240; // card ki width + margin (adjust if needed)
  currentTranslate += -direction * cardWidth;
  carousel.style.transform = `translateX(${currentTranslate}px)`;
  prevTranslate = currentTranslate;
}

function LogOut() {
  localStorage.removeItem("userData");
  window.location.href = "index.html";
}

const isLive = localStorage.getItem("liveUser");
if (isLive) {
  let Authenticated = (document.querySelector(
    ".liveUser"
  ).innerHTML = `Authenticated user:        <u> ${isLive}</u>`);
} else {
  window.location.href = "index.html";
}
