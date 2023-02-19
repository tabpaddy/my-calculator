// navbar

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('uil-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('uil-times');
    navbar.classList.remove('active');
};




var numfeild1 = document.getElementById('numfeild1');
var numfeild2 = document.getElementById('numfeild2');
var resultfeild = document.getElementById('resultfeild')
var form = document.getElementById('xIsWhatPercentOfy')

form.addEventListener('submit', function(event){
    if(!numfeild1.value || !numfeild2.value){
        alert("Please enter values in the feilds");
    } else{
        var x = parseFloat(numfeild1.value);
        var y = parseFloat(numfeild2.value);

        var result = x/y;
        var percent = result * 100;

        resultfeild.innerText = "Answer: " + percent + "%";
        event.preventDefault();
    }
});

// numfeild1.value = "text";
// resultfeild.innerText = "text2";