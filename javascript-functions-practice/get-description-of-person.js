/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var personDescription = person.name + ' is a ' + person.occupation + ' from ' + person.birthPlace + '.';
  return personDescription;
}
