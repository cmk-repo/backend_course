
require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT


app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/twitter', (re, res) => {
	res.send('cmk-repo')
})


app.get('/login', (re, res) => {
	res.send('<h1>Please login</h1>')
})


app.get('/youtube', (re, res) => {
	res.send('<h2>Youtube </h2>')
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
