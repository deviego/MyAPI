const express = require('express')
const data = require('./data.json')
const app = express()

app.use(express.json())
app.get("/client" ,(req, res) => {
    res.json(data)
})
app.use(express.json())
app.get("/client/:id" ,(req, res) => {
    
})

app.post("/client", (req, res) => {})
app.put("/client/:id", (req, res) => {})
app.delete("/client/:id", (req, res) => {})


app.listen(3000, () => console.log("server is running "))