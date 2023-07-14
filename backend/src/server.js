'use strict'
const express = require('express')
const app = express()
const path = require('path')
const userRoute = require('./Routes/Users')
const cors = require("cors");
const quizzesRoute = require('./Routes/Quizzes')

// Hosting Frontend
// Create a production build of the frontend and paste the files in the public folder
app.use(express.static(path.join(__dirname, '/public/')))

// Middleware
app.use(cors());
app.use(express.json())
app.use('/API/users', userRoute)
app.use('/API/quizzes', quizzesRoute)

app.use('*', (req, res) => {
	res.sendFile(path.join(__dirname, '/public/index.html'))
})
// Listening to APIs
app.listen("https://quizadda-backend.onrender.com", () =>
	console.log('Listening on Port 8000')
)
