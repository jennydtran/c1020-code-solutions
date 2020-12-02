const express = require('express');
const fs = require('fs');
const app = express();
const expressJson = express.json();

app.use(expressJson);

app.get('/api/notes', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, text) => {
    if (err) throw err;
    const data = JSON.parse(text);
    const notesList = [];

    for (const key in data.notes) {
      if (key !== undefined) {
        notesList.push(data.notes[key]);
      } else {
        res.json([]);
      }
    }
    res.json(notesList);
  });
});

app.get('/api/notes/:id', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, text) => {
    if (err) throw err;
    const data = JSON.parse(text);
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
});

app.post('/api/notes', expressJson, (req, res) => {
  const content = req.body.content;
  fs.readFile('data.json', 'utf8', (err, text) => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
    const data = JSON.parse(text);
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
    } else {
      const newNote = { content, id: data.nextId };
      data.notes[data.nextId] = { id: data.nextId, content };
      data.nextId += 1;

      fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        }
        res.status(201).json(newNote);
      });
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  fs.readFile('data.json', 'utf8', (err, text) => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
    const data = JSON.parse(text);

    if (data.notes[id] !== undefined) {
      delete data.notes[id];
      fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        }
        res.status(204).json({});
      });
    } else if (id > 0 && data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    } else {
      res.status(400).json({ error: 'id must be a positive integer' });
    }
  });
});

app.put('/api/notes/:id', (req, res) => {
  const content = req.body.content;
  const id = req.params.id;
  fs.readFile('data.json', 'utf8', (err, text) => {
    if (err) {
      res.status(500).json({ error: 'An unexpected error occurred.' });
    }
    const data = JSON.parse(text);
    if (content === undefined) {
      res.status(400).json({ error: 'content is a required field' });
    } else if (data.notes[id] === undefined) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    } else {
      const updatedNote = { id: id, content };
      data.notes[id].content = content;

      fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8', err => {
        if (err) {
          res.status(500).json({ error: 'An unexpected error occurred.' });
        }
        res.status(200).json(updatedNote);
      });
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening to port 3000...');
});
