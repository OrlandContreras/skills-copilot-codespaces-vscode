// Create a web server

// 1. Import Express
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// 2. Create an app from the Express package
// 3. Create a port number
const port = 3000;

// 4. Create a router
const router = express.Router();

// 5. Create a route
router.get('/', (req, res) => {
    res.send('Hello World');
}
);

router.get('/about', (req, res) => {
    res.send('About Us');
}
);

router.get('/contact', (req, res) => {
    res.send('Contact Us');
}
);

router.get('/help', (req, res) => {
    res.send('Help');
}
);

router.get('/login', (req, res) => {
    res.send('Login');
}
);

router.get('/register', (req, res) => {
    res.send('Register');
}
);

router.get('/logout', (req, res) => {
    res.send('Logout');
}
);

router.get('/home', (req, res) => {
    res.send('Home');
}
);

router.get('/profile', (req, res) => {
    res.send('Profile');
}
);

// 6. Create a route for a dynamic page
router.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
}
);

// 7. Create a route for a dynamic page
router.get('/user/:id/:name', (req, res) => {
    res.send(`User ID: ${req.params.id} and Name: ${req.params.name}`);
}
);

// 8. Create a route for a dynamic page
router.get('/user/:id/:name/:age', (req, res) => {
    res.send(`User ID: ${req.params.id} and Name: ${req.params.name} and Age: ${req.params.age}`);
}
);

// 9. Create a route for a dynamic page
router.get('/user/:id/:name/:age/:city', (req, res) => {
    res.send(`User ID: ${req.params.id} and Name: ${req.params.name} and Age: ${req.params.age} and City: ${req.params.city}`);
}
);








