import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const dbUsername = "admin"; // Sensitive information
// const dbPassword = "password123"; // Sensitive information
// const apiKey = "1234-5678-ABCD-EFGH"; // Sensitive information

// const userInput = "admin"; // Assume this comes from an untrusted source
// const query = `SELECT * FROM users WHERE username = '${userInput}'`;
// database.execute(query);

// const userInput = "<script>alert('XSS');</script>"; // Assume this comes from an untrusted source
// document.getElementById("output").innerHTML = userInput;


// const fs = require('fs');
// const data = fs.readFileSync('example.txt');
// // forgot to close the file

// const crypto = require('crypto');
// const hash = crypto.createHash('md5').update('some data').digest('hex');

// const fs = require('fs');
// fs.exists('file.txt', (exists) => {
//   console.log(exists ? "File exists" : "File doesn't exist");
// });

// try {
//   riskyOperation();
// } catch (e) {
//   // Empty catch block
// }

// const userInput = "2 + 2"; // Assume this comes from an untrusted source
// const result = eval(userInput);
// let unusedVar = 42;
// function doSomething() {
//     const name = "John";
// }


// const user_name = "JohnDoe";
// const userId = 42;
// const UserAge = 25;
