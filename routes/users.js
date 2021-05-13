const express = require('express');
const router = express.Router();
const User = require('../models/users');


//POST: CREATE A NEW USER  
router.post('/',(req,res) => {

    user = new User({
        name:req.body.name,
        email:req.body.email,
        country:req.body.country
    });

    user.save().then(user => {
        res.send(user);
    }).catch(error => {
        res.status(500).send("User was not stored in database");
    });
});


module.exports = router;
