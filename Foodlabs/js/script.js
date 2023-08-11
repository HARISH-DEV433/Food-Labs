const cardsContainer = document.querySelector('.cards-container');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

function updateSliderPosition() {
  cardsContainer.style.transform = `translateX(-${currentIndex * 100}px)`;
}

function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateSliderPosition();
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateSliderPosition();
}

prevButton.addEventListener('click', prevCard);
nextButton.addEventListener('click', nextCard);

function autoSlide() {
    nextCard();
    setTimeout(autoSlide, 3000); // Change card every 3 seconds
}

autoSlide();

const myslide = document.querySelectorAll('.myslider'),
dot = document.querySelectorAll('.dot');

let counter = 1;
slidefun(counter);

let timer = setInterval(autoslide, 8000);
function autoslide() {
    counter += 1;
    slidefun(counter);
}

function plusSlides(n) {
    counter += n;
    slidefun(counter);
}

function currentSlide(n) {
    counter = n;
    slidefun(counter);
    resetTimer();
}

function resetTimer() {
    clearInterval(timer);
    timer=setInterval(autoslide, 8000);
}

function slidefun(n) {
    let i;
    for(i=0; i<myslide.length; i++) {
        myslide[i].style.display = "none";
    }
    for(i=0; i<dot.length; i++) {
        dot[i].classList.remove('active');
    }
    if(n > myslide.length) {
        counter = 1;
    }

    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active');
}


