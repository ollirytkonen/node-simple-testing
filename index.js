const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

let todos = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z"
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z"
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z"
    }
  ]

app.get('/', (req, res) => {
  res.send(`<h1>Hello Todo App! </h1>`)
})

app.get('/todos', (req, res)=>{
  res.json(todos)
})

const PORT = 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})