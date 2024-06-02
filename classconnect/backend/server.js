const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const cors = require('cors')
const students = require('./data/students.json');

app.use(bodyParser.json());
app.use(cors());

app.get('/students', (req, res) => {
  res.json(students);
});

app.delete('/students/:id', (req, res) => {
  const { id } = req.params;
  const studentIndex = students.findIndex(student => student.id === parseInt(id));

  if (studentIndex !== -1) {
    students.splice(studentIndex, 1);
    res.status(200).send('Aluno excluído com sucesso');
  } else {
    res.status(404).send('Aluno não encontrado');
  }
});

// Rota para a raiz
app.get('/', (req, res) => {
  res.send('Welcome to the ClassConnect API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
