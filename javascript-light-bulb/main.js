var bg = document.querySelector('.container-bg');
var bulb = document.querySelector('.light-bulb');
var click = 0;

function turnOffOn() {
  click++;
  var change;

  if (click % 2 === 1) {
    change = 'on';
  } else if (click % 2 === 0) {
    change = 'off';
  }

  bg.className = 'container-bg ' + change;
  bulb.className = 'light-bulb ' + change;
}

bulb.addEventListener('click', turnOffOn);
