require('dotenv').config({ path: './secrets.env' })
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const app = express()
app.use(express.urlencoded({extended: false}))


app.use(express.json())

// routing
app.get('/', (req, res) => {
    res.send(`Hello!`)
})

app.get('/blog', (req, res) => {
    res.send(`Hey blog!`)
})

app.get('/products', async(req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.get('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
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

app.put('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `cannot find any product with this ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

app.delete('/products/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).status({message: `cannot find any product with this ID ${id}`})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
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