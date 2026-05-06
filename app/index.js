import express from 'express'
const app = express()
const port = 8000

app.get('/valami', (req, res) => {
    res.send('ÉS Működik!')
})

app.listen(port, () => {
    console.log(`Listen on: ${port}`)
})