const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    },
    completed: {
        type: Boolean

    }
})

// const me = new User({
//     name: 'Suraj Sah',
//     age: 22
// })

// me.save().then(() => {
//     console.log(me)

// }).catch((error) => {
//     console.log('Error!', error)

// })

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

const task = new Task({
    description: 'Learn the mongoose Library',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log('Error!', error)
})