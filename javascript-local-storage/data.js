/* exported todos */
var todos = [];

var previousTodosJson = localStorage.getItem('javascript-local-storage');

todos = JSON.parse(previousTodosJson);

window.addEventListener('beforeunload', function (event) {
  var todosJson = JSON.stringify(todos, null, 1);
  localStorage.setItem('javascript-local-storage', todosJson);
});
