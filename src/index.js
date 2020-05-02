const express = require('express')
require('./db/mongoose')

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


const User = require('./models/user')

const main = async () => {
    const user = await User.findById('5ead32950adb2d32703cbed4')
    await user.populate('task').execPopulate()
    console.log(user.task)
}

main()