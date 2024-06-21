# Backend Server for Submission Management

This repository contains the backend server for managing submissions from a front-end application.

## Technologies Used

- TypeScript
- Node.js
- Express.js

## Installation

1. **Clone the repository:**

   ```bash
   github.com/akanksha2305/slidelydesktopbackend.git
   cd slidelydesktopbackend.git
2. **install dependencies:**
   ```bash
   npm install
## Running the Server
1. **Build and start the server**
   ```bash
   npm run build
   npm start
The server will start running on http://localhost:3000 by default.

## Endpoints 
1. **/ping (GET)**
Returns a boolean value indicating the server status.
2. **/submit (POST)**
Accepts parameters:
name (string): Name of the submitter.
email (string): Email of the submitter.
phone (string): Phone number of the submitter.
github_link (string): GitHub link provided by the submitter.
stopwatch_time (string): Stopwatch time captured from the submission.
3.** /read (GET)**
Accepts a query parameter:
index (number): Zero-based index to read the (index+1)th form submission.

## Usage 
1. Ensure the server is running locally or on a host accessible to your front-end application.
2. The front-end application should make API calls to the above endpoints for submission management.

## Contributing
Contributions are welcome! If you'd like to contribute:

```bash
Fork the repository.
Create your feature branch (git checkout -b feature/AmazingFeature).
Commit your changes (git commit -m 'Add some AmazingFeature').
Push to the branch (git push origin feature/AmazingFeature).
Open a pull request.

