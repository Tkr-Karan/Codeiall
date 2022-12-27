// const { Router } = require('express');  // add by mistake.
const express = require('express');
const router = express.Router();

const profile_controller = require('../controllers/user_controller');

console.log('user controller add successfully!!!!');


router.get('/profile', profile_controller.profile);

// connecting the user Sig In and Sign up routes to the conttroller.
router.get('/sign-in', profile_controller.signIn);
router.get('/sign-up', profile_controller.signUp);


//creating the Ceate Router for inserting the data to the db Table. here  we are using the post method to posting the  data in db.
router.post('/create', profile_controller.create);


module.exports = router;