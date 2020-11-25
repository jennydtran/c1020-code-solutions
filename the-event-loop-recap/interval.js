/* eslint-disable no-console */
var count = 3;
var intervalID = null;

function countdown() {
  if (count > 0) {
    console.log(count);
    count--;
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}

intervalID = setInterval(countdown, 1000);
