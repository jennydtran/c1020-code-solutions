var phrase = document.querySelector('.phrase');
var spanArray = phrase.childNodes;

// Start variables
spanArray[0].classList.add('current-letter');
var i = 0;

// eventHandler function
function keyDownEvent(event) {

  var currentCharacter;

  if (event.key === spanArray[i].textContent && i < spanArray.length - 1) {
    spanArray[i].classList.remove('current-letter', 'incorrect');
    spanArray[i].classList.add('correct');

    currentCharacter = spanArray[i].nextSibling;
    currentCharacter.classList.add('current-letter');
    i++;
  } else if (event.key !== spanArray[i].textContent) {
    spanArray[i].classList.add('incorrect');
  }

  if (i === spanArray.length - 1 && event.key === spanArray[spanArray.length - 1].textContent) {
    spanArray[i].classList.add('correct');
    spanArray[i].classList.remove('current-letter', 'incorrect');
  }

  if (spanArray[i].className === 'correct' && spanArray[i].className !== 'incorrect') {
    window.location.reload();
  }

  return currentCharacter;
}

document.addEventListener('keydown', keyDownEvent);
