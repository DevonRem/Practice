const buttonDropDown = document.querySelector('.btnDrop');
const allOptions = document.querySelectorAll('.btns');


let clicked = 0;

function myfunction() {
    if(clicked === 0) {
        for(let i=0; i<allOptions.length; i++) {
            allOptions[i].style.display = 'block';
            }
            clicked = 1;
    }
    else if(clicked === 1) {
        for(let i=0; i<allOptions.length; i++) {
            allOptions[i].style.display = 'none';
            }
            clicked = 0;
    }

}

function myFunction2() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

buttonDropDown.addEventListener('click', myfunction);

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

