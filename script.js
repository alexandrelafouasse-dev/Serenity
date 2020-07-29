// Modal
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


/* Bouton Scroll to top */
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop < 6800 || document.documentElement.scrollTop < 6800) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* Slider */
var slider_1 = document.querySelector(".slider_1");
var slider_2 = document.querySelector(".slider_2");

var go_to_1 = document.querySelector(".go_to_1");
var go_to_2 = document.querySelector(".go_to_2");


go_to_1.addEventListener("click", () =>{
  slider_1.classList.toggle("hidden");
  slider_2.classList.toggle("active");
});

go_to_2.addEventListener("click", () =>{
  slider_1.classList.toggle("hidden");
  slider_2.classList.toggle("active");
});


// Apparition mockup header
var app_text = document.querySelector(".app_text");
var problem_mockup1 = document.querySelector(".problem_mockup1");
var problem_mockup2 = document.querySelector(".problem_mockup2");


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        app_text.classList.add('appear1');
        app_text.classList.remove('app_text');

    }
    if (document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300) {
      problem_mockup1.classList.add('appear2');
      problem_mockup2.classList.add('appear3');
      problem_mockup1.classList.remove('problem_mockup1');
      problem_mockup2.classList.remove('problem_mockup2');


    }
}
