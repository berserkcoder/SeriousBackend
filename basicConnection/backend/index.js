// require('dotenv').config()
import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id : 1,
      title : "Why don't scientists trust atoms?",
      content : "Because they make up everything!"
    },
    {
      id : 2,
      title : "Why did the math book look sad?",
      content : "Because it had too many problems."
    },
    {
      id : 3,
      title : "Why do programmers prefer dark mode?",
      content : "Because light attracts bugs!"
    },
    {
      id : 4,
      title : "Why was the computer cold?",
      content : "Because it left its Windows open!"
    },
    {
      id : 5,
      title : "Why did the scarecrow win an award?",
      content : "Because he was outstanding in his field!"
    }
  ]
  res.send(jokes)
})

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`)
})
