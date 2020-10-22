var taskList = document.querySelector('.task-list');
var allButtons = document.querySelectorAll('button');

taskList.addEventListener('click', function (event) {
  var buttonObject;
  for (var i = 0; i < allButtons.length; i++) {

    buttonObject = allButtons[i];

    var li = buttonObject.closest('.task-list-item');

    if (event.target === buttonObject) {
      console.log('closest .task-list-item', li);
      li.remove();
    }
  }

  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);

});
