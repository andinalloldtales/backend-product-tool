require('dotenv').config({ path: './secrets.env' })
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
var cors = require('cors')
const FRONTEND = process.env.FRONTEND

var corsOptions = {
    origin: FRONTEND,
    optionSuccessStatus: 200 // some legacy browsers (IE11, various SmartTvs) Choke on 204
}

app.use(cors(corsOptions))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// routing

app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send(`Hello!`)
})

app.get('/blog', (req, res) => {
    res.send(`Hey blog!`)
})

app.use(errorMiddleware);


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