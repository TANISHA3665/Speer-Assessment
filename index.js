const express = require('express');
const { connection } = require("./db");
require("dotenv").config();
const port = process.env.PORT
const app = express();

app.listen(port, async () =>
{
    try {
        await connection
        console.log("db connected")
    } catch (error) {
        console.log(error); 
    }

    console.log(`Server is running on port: ${port}`);
})