require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5eaaa090bc9c523e8801ba9b', { age: 1 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeCout = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeCout('5eaaa090bc9c523e8801ba9b', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})