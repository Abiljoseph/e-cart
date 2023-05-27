
require('dotenv').config()
const express = require('express');
const cors = require('cors');
require('./db/connection');
const router = require("./routes/router")



const app = express()
app.use(cors());
app.use(express.json())
app.use(router);

const PORT = process.env.PORT || 3000
 
app.get('/', (req,res) => {
    res.status(200).json('your server is running')
})

app.listen(PORT, () => {
    console.log(`your server is running on port: ${PORT}`);
})