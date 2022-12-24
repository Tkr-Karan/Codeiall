const { Router } = require('express');
const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/user_controller');

console.log('user constroller add successfully!!!!');


router.get('/profile', profile_controller.profile);




module.exports = router;