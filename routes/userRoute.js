const express = require('express');
const { loginController, registerController } = require('../controllers/userController');
const userModel = require('../models/userModel');

//router object

const router = express.Router();

//Routes
//POST || LOGIN USER
router.post('/login',loginController)

//POST || REGISTER USER
router.post('/register',registerController)

module.exports = router;