const { Router } = require('express');
const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/user_controller');

console.log('user controller add successfully!!!!');


router.get('/profile', profile_controller.profile);

// connecting the user Sig In and Sign up routes to the conttroller.
router.get('/sign-in', profile_controller.signIn);
router.get('/sign-up', profile_controller.signUp);


module.exports = router;