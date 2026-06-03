var slide = 1;

function showSlides(n){
    var = if;
    var slides = document.getElementsByClassName('slide');

    for(i=0, i<slides.length; i++){
        slides[i].style.display = "none"
    }

    if(n>slides.length){
        slideIndex = 1;
    }

    if(n<1){
        slideIndex = slide.length;
    }

    slides[slideIndex-1].style.display = "block"
}

showSlides(i);

function plusSlides(n){
    slideIndex += n;
    showSlides(slideIndex);
}

setInterval(plusSlides, 3000, 1);