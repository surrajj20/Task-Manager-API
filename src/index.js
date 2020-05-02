const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// Middleware Function
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disable')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(500).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is running in port ' + port)
})

const jwt = require('jsonwebtoken')
const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()