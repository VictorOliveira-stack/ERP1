const express = require("express")
const router = express.Router()
const path = require('path')

router.use(express.json())
router.use(express.urlencoded({extended: true}))

router.get("/calculos", (req, res)=>{
    res.render("calculos.handlebars")
})


module.exports = router