const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      lines.shift();

      const studentsByField = {};
      let totalStudents = 0;

      for (const line of lines) {
        if (line.trim() !== '') {
          const [firstname, , , field] = line.split(',');

          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }

          studentsByField[field].push(firstname);
          totalStudents += 1;
        }
      }

      const output = [];
      output.push('This is the list of our students');
      output.push(`Number of students: ${totalStudents}`);
      for (const [field, students] of Object.entries(studentsByField)) {
        output.push(
          `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`,
        );
      }

      resolve(output.join('\n'));
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];

  countStudents(databasePath)
    .then((output) => {
      res.status(200).send(output);
    })
    .catch(() => {
      res
        .status(500)
        .send('This is the list of our students\nCannot load the database');
    });
});

app.listen(1245);

module.exports = app;
