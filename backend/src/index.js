const express = require('express')
const app = express()
const cors = require('cors')

const routes = require('./routes')
const connection = require('../database/db')



const Pokemon = require('../models/Pokemon')


app.use(cors())

app.use(express.json())
app.use(routes)

connection
    .authenticate()
    .then(() => console.log('Connected to the database...'))



app.listen(8080, () => console.log('Server is running... '))

