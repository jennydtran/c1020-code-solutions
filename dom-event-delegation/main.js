var taskList = document.querySelector('.task-list');
var allButtons = document.querySelectorAll('button');

taskList.addEventListener('click', function (event) {
  var buttonObject;
  for (var i = 0; i < allButtons.length; i++) {

    allButtons[i].setAttribute('class', 'button');
    buttonObject = allButtons[i];

    var li = buttonObject.closest('.task-list-item');

    if (event.target === buttonObject) {
      li.remove();
      console.log('closest .task-list-item');
    }
  }

  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);

});
