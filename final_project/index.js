
const express = require('express');
const jwt = require('jsonwebtoken');
const session = require('express-session');

const authModule = require('./router/auth_users.js');
const customer_routes = authModule.authenticated;
const genl_routes = require('./router/general.js').general;

const app = express();

app.use(express.json());

app.use(
  '/customer',
  session({
    secret: 'fingerprint_customer',
    resave: false,
    saveUninitialized: false
  })
);

// Protect customer review endpoints with a JWT
app.use('/customer/auth/*', (req, res, next) => {
  const header = req.headers.authorization || '';
  const [scheme, token] = header.split(' ');

  if (scheme !== 'Bearer' || !token) {
    return res.status(401).json({
      message: 'Authorization token required'
    });
  }

  jwt.verify(token, authModule.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: 'Invalid or expired token'
      });
    }

    req.user = decoded;
    next();
  });
});

app.use('/customer', customer_routes);
app.use('/', genl_routes);

const PORT = 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
