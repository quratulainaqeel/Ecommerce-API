const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.SERVER_PORT

app.use(express.json())
app.use(
    cors({
        origin: ["http://localhost:5173"],
        credentials: true,
    })
);

app.use('/api', require('./API/Users/Routers'))
app.use('/api', require('./API/Products/Routers'))
app.use('/api', require('./API/Category/Routers'))
app.use('/api', require('./API/Brands/Routers'))
app.use('/api', require('./API/Orders/Routers'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})