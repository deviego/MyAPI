const express = require('express')
const data = require('./data.json')
const app = express()

app.use(express.json())
app.get("/client", (req, res) => {
    res.json(data)
})
app.use(express.json())
app.get("/client/:id", (req, res) => {
    const { id } = req.params;
    const client = data.find(cli => cli.id == id)
    if (!client) return res.status(404).json()

    res.json(client)
})

app.post("/client", (req, res) => {
    const { name, email } = req.body;

    if (name === "" || email === "") return res.status(404).json()

    res.json({ name, email })
})

app.put("/client/:id", (req, res) => {
    const {id} = req.params;
    const client = data.find(cli => cli.id == id)
    const {name} = req.body;
    client.name = name;
    if (name === "") return res.status(404).json()
    res.json(client)
})
app.delete("/client/:id", (req, res) => { 
    const {id} = req.params
    const clientFiltered = data.filter(client => client.id != id)

    res.json(clientFiltered)
})


app.listen(3000, () => console.log("server is running "))