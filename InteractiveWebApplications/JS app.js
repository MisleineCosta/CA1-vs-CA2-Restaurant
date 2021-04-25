
const express = require('express');
const app = express();

app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works 😁'
    });
});

module.exports = app;





/*
const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex' 

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens', alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})
*/