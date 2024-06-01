const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.setHeader('X-Frame-Options', 'ALLOWALL');
  res.setHeader('Content-Security-Policy', "frame-ancestors 'self' https://example.com");
  next();
});

// Your other route handlers and middleware

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
