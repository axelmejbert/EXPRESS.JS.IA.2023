const express = require('express')
const app = express()
const userRouter = require('./Routers/user.router')

app.get('', (req, res) => {
    res.send('Hello express!')
   })
   app.get('/weather', (req, res) => {
    res.send('Your weather')
   })
app.use(userRouter)

app.listen(8001, () => {
    console.log('Pret et à lecoute sur le port 8001')
})