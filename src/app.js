const express = require('express')
const app = express();
const path = require('path')
const util = require('./public/js/util')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/index.html' ))
})

app.get('/gey', (req, res) => {
    res.json({sum: util.add(1, 2)})
})

app.listen(6969)