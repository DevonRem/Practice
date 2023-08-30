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
