const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const User = require('../models/User')

router.post('/signup',(req,res)=>{
    const userData = req.body
    const user = new User(userData)
    user.save((error,registeredUser)=>{
        if(error){
            console.log(error)
        } else {
            res.status(200).send(registeredUser)
        }
    })
})



router.post('/login',(req,res)=>{
    userData = req.body
    User.findOne({email: userData.email}, (error,user)=>{
        if(error){
            console.log(error)
        } else {
            if(!user){
                res.status(401).send('Invalid email')
            } else {
                if(user.password !== userData.password) {
                    res.status(401).send('Invalid password')
                } else {
                    res.status(200).send(user)
                }
            }
        }
    })
})

module.exports = router