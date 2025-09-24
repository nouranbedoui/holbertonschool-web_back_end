const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // skip header

      const fields = {};
      for (const student of students) {
        const parts = student.split(',');
        const firstName = parts[0];
        const field = parts[3];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }

      let output = `Number of students: ${students.length}\n`;
      for (const [field, names] of Object.entries(fields)) {
        output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
      }
      resolve(output.trim());
    });
  });
}

const dbFile = process.argv[2]; // database.csv path from CLI arg

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (!dbFile) {
      res.end('Database file path not provided');
      return;
    }
    res.write('This is the list of our students\n');
    countStudents(dbFile)
      .then((data) => {
        res.end(data);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
