require('dotenv').config({ path: './secrets.env' })
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/productRoute')

app.use(express.urlencoded({extended: false}))


app.use(express.json())

// routing

app.use('/api', productRoute);

app.get('/', (req, res) => {
    res.send(`Hello!`)
})

app.get('/blog', (req, res) => {
    res.send(`Hey blog!`)
})




const PORT = process.env.PORT || 5173
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGODB_URI)

.then(() => {
    console.log('connected to MongoDB')
    app.listen(PORT, ()=> {
    console.log(`Node API running is running on port ${process.env.PORT}`)
})
  
}).catch((error) => {
    console.log(error)
})