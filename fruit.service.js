const express = require('express')
const app = express()
const port = 3000



let frutas = [
  {id: 1, nome: "Laranja"},
  {id: 2, nome: "Maça"},
  {id: 3, nome: "Manga"}
]

app.get('/frutas/getAll' , (req, res) => {
  res.send("laranja")
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
  