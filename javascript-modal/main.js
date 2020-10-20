var buttonOpenModal = document.querySelector('.button.blue');
var buttonNo = document.querySelector('.button.red');
var modal = document.querySelector('.container-modal-page');

var modalHidden = false;

function clickEvent() {
  modalHidden = !modalHidden;
  var display;

  if (modalHidden) {
    display = 'display';
  } else {
    display = 'hidden';
  }

  modal.className = 'container-modal-page ' + display;
}

buttonOpenModal.addEventListener('click', clickEvent);
buttonNo.addEventListener('click', clickEvent);
