const pg = require('pg');
const db = new pg.Pool({ connectionString: 'postgres://dev:lfz@localhost/studentGradeTable' });
const express = require('express');
const app = express();
const expressJson = express.json();

app.use(expressJson);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades"
  `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', expressJson, (req, res) => {
  const { name, course, score } = req.body;

  if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'One or more of the following fields are missing: name, course, or score' });
  } else if (score < 1 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Score has to be a number from 1 to 100' });
  } else {
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;
    const params = [name, course, score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  const { name, course, score } = req.body;

  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else if (name === undefined || course === undefined || score === undefined) {
    res.status(400).json({ error: 'One or more of the following fields are missing: name, course, or score' });
  } else if (score < 1 || score > 100 || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Score has to be a number from 1 to 100' });
  } else {
    const sql = `
      update "grades"
         set "name" = $2,
             "course"  = $3,
             "score" = $4
       where "gradeId" = $1
       returning *
    `;
    const params = [gradeId, name, course, score];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(200).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = parseInt(req.params.gradeId, 10);

  if (gradeId <= 0 || !Number.isInteger(gradeId)) {
    res.status(400).json({ error: 'gradeId must be a positive integer' });
  } else {
    const sql = `
      delete from "grades"
            where "gradeId" = $1
        returning *
    `;
    const params = [gradeId];
    db.query(sql, params)
      .then(result => {
        const grade = result.rows[0];
        if (!grade) {
          res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
        } else {
          res.status(204).json(grade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      });
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000...');
});
