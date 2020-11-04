function changeH1Heading() {
  var h1 = document.querySelector('h1');
  h1.textContent = 'Hello there!';
}

window.addEventListener('load', setTimeout(function () { changeH1Heading(); }, 2000));
