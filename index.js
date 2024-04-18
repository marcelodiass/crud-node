const express = require('express')
const cors = require('cors')
const database = require('./database/database')
const {readdirSync} = require('fs')

const app = express()

require('dotenv').config()
const PORT = process.env.PORT

app.use(express.json())
app.use(cors())

readdirSync('./routes').map((route) => app.use('/api', require('./routes/' + route)))

const server = () => {
	database()
	app.listen(PORT, () => {
		console.log('Server listening on port:', PORT)
	})
}

server()