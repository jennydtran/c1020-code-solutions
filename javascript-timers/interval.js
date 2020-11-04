var h1 = document.querySelector('h1');
var headings = ['4', '3', '2', '1', '~Earth Beeeeelooooww Us~'];

var intervalID;

function changeHeading() {
  var i = 0;
  h1.textcontent = headings[i];
  i++;
}

window.addEventListener('load', setInterval(changeHeading(), 1000));
