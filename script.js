let index = 0;
const slider = document.querySelector(".slides");
const total = slider.children.length;

function showSlide() {
    slider.style.transform = `translateX(-${index * 400}px)`;
}

function nextSlide() {
    index++;
    if (index >= total) index = 0;
    showSlide();
}

function prevSlide() {
    index--;
    if (index < 0) index = total-1;
    showSlide();
} 

setInterval(nextSlide, 3000);