const { Router } = require('express')
const userRouter = Router()
userRouter.get('/users', (req, res) => {
    res.send({
        users : [
            {
                firstName: 'Axel',
                lastName: 'MEJBERT'
            }
        ]
    })
})
userRouter.get('/users/:id', (req, res) => {
    const { id } = req.params
    res.send(id)
})

userRouter.get('/users/banane1', (req, res) => {
    res.send('Banane autrement')
})
module.exports = userRouter
