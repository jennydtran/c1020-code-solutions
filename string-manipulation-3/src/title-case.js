/* eslint-disable no-unused-vars */
function titleCase(string) {
  var lowercase = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var acronyms = ['API', 'SEO', 'SMO', 'RFID', 'NoSQL'];
  var special = ['JavaScript'];

  var lowercasedAcronyms = lowercased(acronyms);
  var lowercasedSpecial = lowercased(special);

  if (string.includes(':')) {
    var stringArray = string.toLowerCase().split(': ');
    var mainTitle = stringArray[0];
    var subTitle = stringArray[1];
    mainTitle = capitalizeWords(mainTitle);
    subTitle = capitalizeWords(subTitle);
    return mainTitle + ': ' + subTitle;
  } else {
    return capitalizeWords(string);
  }

  function lowercased(array) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i].toLowerCase());
    }
    return newArray;
  }

  function capitalizeWords(string1) {
    var stringArray = string1.toLowerCase().split(' ');
    for (var i = 0; i < stringArray.length; i++) {
      if (lowercase.includes(stringArray[0])) {
        stringArray[0] = stringArray[0].replace(stringArray[0][0], stringArray[0][0].toUpperCase());
      } else if (lowercase.includes(stringArray[i])) {
        if (stringArray[i - 1].includes(':')) {
          stringArray[i] = stringArray[i].replace(stringArray[i][0], stringArray[i][0].toUpperCase());
        }
        continue;
      } else if (stringArray[i].includes('-')) {
        var indexD = stringArray[i].indexOf('-');
        stringArray[i] = stringArray[i].replace(stringArray[i][indexD + 1], stringArray[i][indexD + 1].toUpperCase());
      } else if (lowercasedAcronyms.includes(stringArray[i])) {
        stringArray[i] = acronyms[lowercasedAcronyms.indexOf(stringArray[i])];
      } else if (lowercasedSpecial.includes(stringArray[i]) || lowercasedSpecial.includes(stringArray[i] + ':')) {
        stringArray[i] = special[lowercasedSpecial.indexOf(stringArray[i])];
      }
      stringArray[i] = stringArray[i].replace(stringArray[i][0], stringArray[i][0].toUpperCase());
    }
    return stringArray.join(' ');
  }
}
