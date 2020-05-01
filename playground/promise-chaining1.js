require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5eaaa18c1269a53c3c71b63e').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5eab12a91a41243e3054a118').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})