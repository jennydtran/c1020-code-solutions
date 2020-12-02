const express = require('express');
const fs = require('fs');
const data = require('./data.json');
const app = express();
const expressJson = express.json();

app.use(expressJson);

app.get('/api/notes', (req, res) => {
  const notesList = [];

  for (const key in data.notes) {
    notesList.push(data.notes[key]);
  }
  res.json(notesList);
});

app.get('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const dataIds = Object.keys(data.notes);

  if (id > 0 && dataIds.includes(id)) {
    res.json(data.notes[id]);
  } else if (id > 0 && !dataIds.includes(id)) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    res.status(400).json({ error: 'id must be a positive integer' });
  }
});

app.post('/api/notes', expressJson, (req, res) => {
  const content = req.body.content;

  if (content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    const newNote = { content, id: data.nextId };
    data.notes[data.nextId] = { id: data.nextId, content };
    data.nextId += 1;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(newNote);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;

  if (id < 0 || isNaN(id) === true) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (id > 0 && data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    delete data.notes[id];

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(204).json({});
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const content = req.body.content;
  const id = req.params.id;

  if (content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (data.notes[id] === undefined) {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  } else {
    const updatedNote = { id: id, content };
    data.notes[id].content = content;

    fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(updatedNote);
      }
    });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000...');
});
