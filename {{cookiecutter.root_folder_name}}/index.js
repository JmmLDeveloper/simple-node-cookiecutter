require('dotenv').config()
const express = require('express')

const PORT = process.env.PORT

const app = express()

app.get('/',(req,res)=>{
  res.send('<h1> Hello {{cookiecutter.author}} </h1>')
})


app.listen(PORT,()=>{
  console.log(`listening on port ${PORT}`)
})