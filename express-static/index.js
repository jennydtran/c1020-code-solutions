const express = require('express');
const path = require('path');

const app = express();

const pathPublic = path.join(__dirname, 'public');
const expressStatic = express.static(pathPublic);

app.use(expressStatic);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000...');
});
