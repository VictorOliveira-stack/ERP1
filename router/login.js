const express = require("express")
const router = express.Router()
const path = require('path')

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get("/login", (req, res)=>{
    res.render("login.handlebars")
})

router.get('/home', (req,res)=>{
    res.render("home.handlebars")
})

module.exports = router