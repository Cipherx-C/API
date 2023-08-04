/* GET

const express = require('express')

const app = express()// inicializando express

app.listen('3000') // ouvindo o navegador

app.route('/').get( (req,res) => res.send('Olá') )
*/

// POST
/*
const express = require('express')

const app = express()// inicializando express

app.listen('3000') 

//middleware
app.use(express.json())

app.route('/').post((req,res) => res.send(req.body) )
*/

// PUT
/*
const express = require('express')

const app = express()// inicializando express

app.listen('3000')

//middleware
app.use(express.json())

let author = "Ana"

app.route('/').get( (req, res) => res.send(author))

app.route('/').put ((req, res) => {
    author = req.body.author
    res.send(author)
})
*/

// DELETE
/*
const express = require('express')

const app = express()// inicializando express

app.listen('3000')

//middleware
app.use(express.json())


app.route('/:identificador').delete( (req,res) => {
    res.send(req.params.identificador)
})
*/

// parametros(body)
/*
const express = require('express')

const app = express()// inicializando express

app.listen('3000')

//middleware( sempre que tiver trabalhando com body para transformar em JSON)
app.use(express.json())


app.route('/').post( (req,res) => {
    const{nome, cidade} = req.body
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
})
*/

// parametros(route)
/*
const express = require('express')

const app = express()// inicializando express

app.listen('3000')

app.route('/').get( (req,res) => res.send('oi'))
app.route('/:variavel').get( (req,res) => {
    res.send(req.params.variavel)
})
*/

// parametros(query)coloca a variavel na URL localhost:3000/?nome=ana
/*
const express = require('express')

const app = express()// inicializando express

app.listen('3000')

app.route('/').get( (req,res) => res.send(req.query))
*/

// consumo de api

const express = require('express')
const axios = require('axios')

const app = express()// inicializando express

app.listen('3000')

app.route('/').get( (req,res) => {
    axios.get('https://api.github.com/users/JovemDevv')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.error(error))
})

