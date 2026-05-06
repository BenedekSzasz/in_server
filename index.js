const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send('Helló Express!')
})

app.listen(port, () => {
  console.log(`Más valami!`)
})

