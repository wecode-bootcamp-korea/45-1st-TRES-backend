// sercixes/userService.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const {passwordValidationCheck} = require('../utils/validationCheck');

const userDao = require('../models/userDao');
const { passwordValidationCheck } = require('../utils/validationCheck');

const signUp = async(email, firstName, lastName, password, contryPre, pNumber, gender, birth) {
    await passwordValidationCheck(password);
    
}