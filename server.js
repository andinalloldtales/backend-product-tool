require('dotenv').config({ path: './secrets.env' })
console.log(process.env.MONGODB_URI)
const express = require('express')
const app = express()
const mongoose = require('mongoose')


// routing
app.get('/', (req, res) => {
    res.send(`Hello!`)
})

app.get('/blog', (req, res) => {
    res.send(`Hey blog!`)
})


mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('connected to MongoDB')
    app.listen(5173, ()=> {
    console.log(`Node API running is running on port 5173`)
})
  
}).catch((error) => {
    console.log(error)
})