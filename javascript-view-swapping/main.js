var tabContainer = document.querySelector('.tab-container');
var tabList = document.querySelectorAll('.tab');
var viewList = document.querySelectorAll('.view');

tabContainer.addEventListener('click', function (event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabList.length; i++) {
      if (tabList[i] === event.target) {
        tabList[i].className = 'tab ' + 'active';
      } else {
        tabList[i].className = 'tab';
      }
    }
    var viewAttributes = event.target.getAttribute('data-view');
    for (i = 0; i < viewList.length; i++) {
      if (viewList[i].getAttribute('data-view') === viewAttributes) {
        viewList[i].className = 'view';
      } else {
        viewList[i].className = 'hidden';
      }
    }
  }
});
