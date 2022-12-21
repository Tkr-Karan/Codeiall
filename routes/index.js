const express = require('express');

const router = express.Router();

// adding controller here.
const homeController = require('../controllers/home_controller');

console.log("routes added successfully!!");


// adding controller for our page.
router.use('/', homeController.home);

router.use('/login', homeController.login);


module.exports = router;