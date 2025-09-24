import { readDatabase } from '../utils';

class StudentsController {
  static getAllStudents(req, res) {
    const databaseFile = process.argv[2];

    readDatabase(databaseFile)
      .then((fields) => {
        let responseText = 'This is the list of our students\n';

        // Sort fields alphabetically
        const sortedFields = Object.keys(fields).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        for (const field of sortedFields) {
          const list = fields[field].join(', ');
          responseText += `Number of students in ${field}: ${fields[field].length}. List: ${list}\n`;
        }

        res.status(200).send(responseText.trim());
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const databaseFile = process.argv[2];

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(databaseFile)
      .then((fields) => {
        const list = fields[major] ? fields[major].join(', ') : '';
        res.status(200).send(`List: ${list}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
