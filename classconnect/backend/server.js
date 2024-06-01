const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const students = require('./data/students.json');

app.use(bodyParser.json());

app.get('/students', (req, res) => {
  res.json(students);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
