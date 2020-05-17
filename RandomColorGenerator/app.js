let button = document.getElementById('color-button');
let mysteryButton = document.getElementById('next-button');

function rgb(num) {
  return Math.floor(Math.random() * num);
}

let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(255) +',' + rgb(255) + ',' + rgb(255) + ')';
  event.target.style.backgroundColor = randomColor;
}

button.onclick = colorChange;
mysteryButton.onwheel = colorChange;

