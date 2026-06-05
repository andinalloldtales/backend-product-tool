const express = require('express')
const app = express()

// routing
app.get('/', (req, res) => {
    res.send(`Hello!`)
})

app.get('/blog', (req, res) => {
    res.send(`Hey blog!`)
})

app.listen(5173, ()=> {
    console.log(`Node API running is running on port 5173`)
})