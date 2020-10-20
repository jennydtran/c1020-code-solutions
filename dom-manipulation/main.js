var userClickCount = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

function clickEvent() {
  userClickCount++;
  $clickCount.textContent = 'Clicks: ' + userClickCount;

  var buttonColor;
  if (userClickCount < 4) {
    buttonColor = 'cold';
  } else if (userClickCount < 7) {
    buttonColor = 'cool';
  } else if (userClickCount < 10) {
    buttonColor = 'tepid';
  } else if (userClickCount < 13) {
    buttonColor = 'warm';
  } else if (userClickCount < 16) {
    buttonColor = 'hot';
  } else if (userClickCount >= 16) {
    buttonColor = 'nuclear';
  }

  $hotButton.className = 'hot-button ' + buttonColor;
}

$hotButton.addEventListener('click', clickEvent);
