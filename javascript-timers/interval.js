var h1 = document.querySelector('h1');
var headings = ['3', '2', '1', '~Earth Beeeeelooooww Us~'];

var intervalID = null;
var i = 0;

function changeHeading() {
  if (i < headings.length) {
    h1.textContent = headings[i];
    i++;
  } else {
    clearInterval(intervalID);
  }
}

intervalID = setInterval(changeHeading, 900);
