// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const datbaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    const db = client.db(datbaseName)

    // db.collection('users').findOne({ _id: new ObjectID("5ea85f0251bf06048858f9e7") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    db.collection('task').findOne({ _id: new ObjectID("5ea861538810c5316026600c") }, (error, task) => {
        if (error) {
            return console.log('Unable to fetch!')
        }

        console.log(task)
    })

    db.collection('task').find({ completed: false }).toArray((error, tasks) => {
        console.log(tasks)

    })
})
