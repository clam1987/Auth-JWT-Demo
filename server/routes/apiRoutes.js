const path = require("path");
const router = require("express").Router();
const User = require("../models/User");



router.get("/user", (req, res) => {
    User.findAll().then(user => {
        res.send(user);
    });
});

router.post("/user", (req, res) => {
// console.log(req.body);

    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName 
    }).then(user => {
        console.log(`${user.firstName} auto-generated ID, ${user.id}`)
    })
})


module.exports = router;