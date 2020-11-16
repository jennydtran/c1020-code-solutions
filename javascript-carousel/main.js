// DOM queries and other variables
var imageList = document.querySelectorAll('img');
var buttonsList = document.querySelectorAll('.button-image');
var timerID = null;

// image change every so and so seconds
function imageChangeWithInterval() {
  imageChangeForward();
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
imageChangeWithInterval();

// image changes going forward
function imageChangeForward() {
  var currentImage = document.querySelector('.current-pokemon');
  var currentButton = document.querySelector('.current-button');

  var nextImage = currentImage.nextElementSibling;
  var nextButton = currentButton.nextElementSibling;

  if (currentImage.id === 'jigglypuff' || currentButton.id === 'lastbutton') {
    nextImage = document.querySelector('#bulbasaur');
    nextButton = document.querySelector('#firstbutton');
  }

  currentImage.classList.remove('current-pokemon');
  currentImage.classList.add('hidden');
  nextImage.classList.remove('hidden');
  nextImage.classList.add('current-pokemon');

  currentButton.classList.remove('current-button');
  nextButton.classList.add('current-button');
}

// click right arrow moves image reel forward
function clickRightChevron(event) {
  if (!event.target.matches('.fa-chevron-right')) {
    return;
  }
  imageChangeForward();

  clearTimeout(timerID);
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
document.addEventListener('click', clickRightChevron);

// click left arrow moves image backward
function clickLeftChevron(event) {
  if (!event.target.matches('.fa-chevron-left')) {
    return;
  }

  var currentImage = document.querySelector('.current-pokemon');
  var currentButton = document.querySelector('.current-button');

  var previousImage = currentImage.previousElementSibling;
  var previousButton = currentButton.previousElementSibling;

  if (currentImage.id === 'bulbasaur' || currentButton.id === 'firstbutton') {
    previousImage = document.querySelector('#jigglypuff');
    previousButton = document.querySelector('#lastbutton');
  }

  currentImage.classList.remove('current-pokemon');
  currentImage.classList.add('hidden');
  previousImage.classList.remove('hidden');
  previousImage.classList.add('current-pokemon');

  currentButton.classList.remove('current-button');
  previousButton.classList.add('current-button');

  clearTimeout(timerID);
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
document.addEventListener('click', clickLeftChevron);

// click on circle buttons to change to any image
function clickButtonForImages(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  // changes the look of selected button to current button
  var selectedButton = event.target;
  var currentButton = document.querySelector('.current-button');

  currentButton.classList.remove('current-button');
  selectedButton.classList.add('current-button');

  // changes image according to button clicked
  var currentImage = document.querySelector('.current-pokemon');

  for (var i = 0; i < buttonsList.length; i++) {
    if (event.target === buttonsList[i]) {
      currentImage.classList.remove('current-pokemon');
      currentImage.classList.add('hidden');
      imageList[i].classList.remove('hidden');
      imageList[i].classList.add('current-pokemon');
    }
  }

  clearTimeout(timerID);
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
document.addEventListener('click', clickButtonForImages);
