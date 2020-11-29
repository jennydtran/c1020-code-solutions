/* eslint-disable no-console */
const fs = require('fs');
const actionWord = process.argv[2];

function fileWrite(data) {
  fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
    if (err) throw err;
  });
}

if (actionWord === 'read') {
  fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) throw err;

    const data = JSON.parse(jsonString);
    for (const key in data.notes) {
      console.log(`${key}: ${data.notes[key]}`);
    }
  });
} else if (actionWord === 'create') {
  fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) throw err;

    const data = JSON.parse(jsonString);
    const note = process.argv[3];
    data.notes[data.nextId] = note;
    data.nextId += 1;

    fileWrite(data);
  });
} else if (actionWord === 'update') {
  fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) throw err;

    const data = JSON.parse(jsonString);
    const id = process.argv[3];
    const updatedNote = process.argv[4];
    if (Object.keys(data.notes).includes(id)) {
      data.notes[id] = updatedNote;
    } else {
      console.log('Sorry, id does not exist.');
    }

    fileWrite(data);
  });
} else if (actionWord === 'delete') {
  fs.readFile('data.json', 'utf8', (err, jsonString) => {
    if (err) throw err;

    const data = JSON.parse(jsonString);
    const id = process.argv[3];
    if (Object.keys(data.notes).includes(id)) {
      delete data.notes[id];
    } else {
      console.log('Sorry, id does not exist.');
    }

    fileWrite(data);
  });
} else {
  console.log('Invalid program command');
}
