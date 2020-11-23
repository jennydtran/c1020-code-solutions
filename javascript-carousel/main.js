// DOM queries and other variables
var imageList = document.querySelectorAll('img');
var buttonsList = document.querySelectorAll('.button-image');
var timerID = null;
var activeIndex = 0;

// image change every so and so seconds
function imageChangeWithInterval() {
  imageChangeForward();
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
imageChangeWithInterval();

function displayImage(index) {
  for (var i = 0; i < imageList.length; i++) {
    if (i !== index) {
      imageList[i].classList.add('hidden');
      buttonsList[i].classList.remove('current-button');
    } else {
      imageList[index].classList.remove('hidden');
      buttonsList[index].classList.add('current-button');
    }
  }
  activeIndex = index;
}

function getNextIndex() {
  if (activeIndex === imageList.length - 1) {
    return 0;
  }
  return activeIndex + 1;
}

function getPreviousIndex() {
  if (activeIndex === 0) {
    return imageList.length - 1;
  }
  return activeIndex - 1;
}

// image changes going forward
function imageChangeForward() {
  displayImage(getNextIndex());
}

// click right arrow moves image reel forward
function clickRightChevron(event) {
  if (!event.target.matches('.fa-chevron-right')) {
    return;
  }
  displayImage(getNextIndex());

  clearTimeout(timerID);
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
document.addEventListener('click', clickRightChevron);

// click left arrow moves image backward
function clickLeftChevron(event) {
  if (!event.target.matches('.fa-chevron-left')) {
    return;
  }
  displayImage(getPreviousIndex());

  clearTimeout(timerID);
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
document.addEventListener('click', clickLeftChevron);

// click on circle buttons to change to any image
function clickButtonForImages(event) {
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  for (var i = 0; i < buttonsList.length; i++) {
    if (event.target === buttonsList[i]) {
      displayImage(i);
    }
  }

  clearTimeout(timerID);
  timerID = setTimeout(imageChangeWithInterval, 1300);
}
document.addEventListener('click', clickButtonForImages);
