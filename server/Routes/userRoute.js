const express = require("express");
const userModel = require("../Models/userModel");
const userValidator = require("../Validators/userValidator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
require("dotenv").config();

const userRoute = express.Router();
const secret = process.env.SECRET;

userRoute.post("/register", userValidator, async (req, res) => {
    try {
        const { email, fname, mobile, password } = req.body;
        bcrypt.hash(password, 4, async (err, hash) => {
            try {
                if (err) {
                    res.status(400).send({ error: "Some issue in bcrypt" });
                }
                var data = await userModel.create({ email, fname, mobile, password: hash });
                data = data.toJSON();
                delete data.password;
                res.send({ data });
            } catch (e) {
                res.status(400).send({ error: e.message })
            }
        });
    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

userRoute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        var user = await userModel.findOne({ email });

        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    res.status(400).send({ error: "bcrypt issue", issue: err })
                }
                if (result) {
                    user = user.toJSON();
                    delete user.password;
                    const token = jwt.sign(user, secret);
                    res.send({ token, userId:user._id })
                } else {
                    res.status(401).send({ error: "Invalid password" })
                }
            })
        } else {
            res.status(404).send({ error: "email not registered" });
        }

    } catch (e) {
        res.status(400).send({ error: e.message });
    }
})

userRoute.get("/", (req, res) => {
    try {
        const token = req.headers?.authorization?.split(" ")[1];
        const user = jwt.verify(token, secret);
        res.send({ user })
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

userRoute.get("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const user = await userModel.findById(id)
        res.send({cart: user.cart});
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
})

userRoute.patch("/:id", async (req, res)=>{
    try{
        const id = req.params.id
        const data = await userModel.findByIdAndUpdate(id, req.body, {new: true});
        res.send({data});
    }catch(e){
        res.status(400).send({ error: e.message })
    }
})

module.exports = userRoute;