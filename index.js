const greeting = document.getElementById("greeting");

greeting.style.textAlign = "center";
greeting.style.marginTop = "50px";
greeting.style.fontSize = "45px";
greeting.style.color = "purple";
greeting.style.fontFamily = "cursive";

const username = window.prompt("What's your name?", "Wonder Woman");
greeting.innerHTML = "Welcome to my website, " + username + "!";

let currentIndex = 0;

function moveSlide(step) {
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  currentIndex = (currentIndex + step + totalImages) % totalImages;

  const carousel = document.querySelector(".carousel-images");
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function autoPlay() {
  moveSlide(1);
  setTimeout(autoPlay, 3500);
}

window.onload = autoPlay;
