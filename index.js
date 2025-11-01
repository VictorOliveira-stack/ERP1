const express = require("express")
const app = express()
const port = 9000
const handlebars = require("express-handlebars")
const path = require('path')

const hbs = handlebars.create({
    extname: '.handlebars',
    // Registra o novo helper
    helpers: {
        reverse: (array) => {
            if (!Array.isArray(array)) {
                return [];
            }
            // Retorna um novo array invertido, sem modificar o original
            return array.slice().reverse();
        },
        startsWith: function(str, prefix) {
            // Add a check to ensure 'str' is a valid string.
            // If it's not a string, return false to prevent the error.
            if (typeof str !== 'string' || str === null) {
                return false;
            }
            return str.startsWith(prefix);
        }
    }
    
});
    
        app.engine('handlebars', hbs.engine)
        app.set('views engine', 'handlebars')


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/public', express.static(path.join(__dirname,'public')))



//inicio aplicação
app.get("/", (req,res)=>{
    res.render("inicio.handlebars")
})

//middlewhere
const login = require("./router/login")//login
    app.use('/', login)

const calculos = require("./router/calculos.js")//calculos
    app.use('/', calculos)


//middlewhere

app.listen(port, ()=>{
    console.log(`bem vindo a ${port}`)
})