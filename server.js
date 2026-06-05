require('dotenv').config({ path: './secrets.env' })
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()


app.use(express.json())

// routing
app.get('/', (req, res) => {
    res.send(`Hello!`)
})

app.get('/blog', (req, res) => {
    res.send(`Hey blog!`)
})

app.get('/product', async(req, res) => {
    try {

    } catch {error} {
        res.status(500).json(product);
    }
})

app.post('/product', async(req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }
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