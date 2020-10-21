function handleFocus(event) {
  console.log('focus event fired');
  console.log('  event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log('  event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of ' + event.target.name + ' ' + event.target.value);
}

var userName = document.forms[0].name;
var userEmail = document.forms[0].email;
var userMessage = document.forms[0].message;

userName.addEventListener('focus', handleFocus);
userName.addEventListener('blur', handleBlur);
userName.addEventListener('input', handleInput);

userEmail.addEventListener('focus', handleFocus);
userEmail.addEventListener('blur', handleBlur);
userEmail.addEventListener('input', handleInput);

userMessage.addEventListener('focus', handleFocus);
userMessage.addEventListener('blur', handleBlur);
userMessage.addEventListener('input', handleInput);
