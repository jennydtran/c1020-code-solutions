var contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  var userName = document.forms[0].name.value;
  var userEmail = document.forms[0].email.value;
  var userMessage = document.forms[0].message.value;

  var data = { userName, userEmail, userMessage };
  console.log('messageData:', data);

  contactForm.reset();
});
