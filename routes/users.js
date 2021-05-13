const express = require('express');
const router = express.Router();
const {User} = require('../models/users');


//POST: CREATE A NEW USER    /api/users
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

//GET ALL USERS   /api/users
router.get("/", (req, res) => {
    User.find()
      .then((users) => res.send(users))
      .catch((error) => {
        res.status(500).send("Something went wrong");
      });
  });

//GET A SINGLE USER BY ID
router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) res.status(404).send("Book not found");
    res.send(user);
 });


//PUT REQUEST TO UPDATE USER BY ID
router.put("/:id", async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        name: req.body.name,
        email:req.body.email,
        country:req.body.country
      },
      { new: true }
    );
  
    if(!updatedUser) res.status(404).send("User not found");
    res.send(updatedUser);
 });


//DELETE REQUEST TO DELETE USER BY ID
router.delete("/:id", async (req, res) => {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) res.status(404).send("user with id not found");
    res.send(user);
});
  

module.exports = router;
