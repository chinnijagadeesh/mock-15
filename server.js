const express = require('express')
const connection = require('./Config/db')
const router = require('./Routers/Post.route')
require('dotenv').config();
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.use(router)


const Port = process.env.Port||4007

app.listen(Port,async()=>{
    try
    {
        await connection
        console.log('connected to db')
    }
    catch(err)
    {
        console.log(err)
        console.log("Err : something went wrong")
    }
    console.log(`Successfully connected to the Port ${Port}`)
})


