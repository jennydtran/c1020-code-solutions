/* eslint-disable no-console */
const express = require('./node_modules/express');
const app = express();

app.use(function (req, res) {
  console.log(req.method);
  res.send('hello');
});

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
