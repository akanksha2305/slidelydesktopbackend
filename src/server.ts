import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as fs from 'fs';
import * as path from 'path';

const app = express();
const PORT = 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Check if server is running
app.get('/ping', (req: Request, res: Response) => {
  res.json(true);
});

// Endpoint to submit a form entry
app.post('/submit', (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;
  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newSubmission = { name, email, phone, github_link, stopwatch_time };
  const dbPath = path.join(__dirname, 'db.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  db.submissions.push(newSubmission);
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

  res.status(201).json({ message: 'Submission saved successfully.' });
});

// Endpoint to read all form entries
app.get('/read', (req: Request, res: Response) => {
  const dbPath = path.join(__dirname, 'db.json');
  const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
  res.json(db);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
