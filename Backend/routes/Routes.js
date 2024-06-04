import express from 'express';
import User from '../models/User.Model.js';
// const Jwt = require('jsonwebtoken');

import bcrypt from 'bcryptjs';

const router = express.Router();




router.route('/').get((request, response) => {
    User.find()
        .then(user => response.json(user))
        .catch(error => response.status(400).json('Error: ' + error));
});

router.route('/Register').post((request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    const saltRounds = 10;
    const crypted_password = bcrypt.hashSync(password,saltRounds);


    const newUser = new User({ email, password:crypted_password });

    newUser.save()
           .then(() => response.json('New Record Added'))
           .catch(error => response.status(400).json('Error: ' + error));
});

// details
router.route('/:id').get((request, response)=>{
    User.findById(request.params.id) 
    .then(user => response.json(user))
    .catch(error => response.status(400).json('Error: ' + error));
});

// deletes
router.route('/:id').delete((request, response)=>{
    User.findByIdAndDelete(request.params.id) 
    .then(user => response.json('Records Was Deleted'))
    .catch(error => response.status(400).json('Error: ' + error));
});

// update
router.route('/Update/:id').post((request, response) => {

    User.findById((request.params.id))
    .then(user=>{
        user.email = request.body.email;
        user.password = request.body.password;

        user.save()
        .then(() => response.json('Record was Update'))
        .catch(error => response.status(400).json('Error: ' + error));

    })
    .catch(error => response.status(400).json('Error: ' + error));
});



export default router; // Use export default for ES6 modules
