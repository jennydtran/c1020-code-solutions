function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq');

console.log('Calling medicalSchool:', medicalSchool('Jenny Tran'));
console.log('Calling lawSchool:', lawSchool('Jenny Tran'));
