// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const datbaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        console.log('Unable to connect to database!')
    }

    const db = client.db(datbaseName)

    //     db.collection('users').insertOne({
    //         name: 'Suraj Sah',
    //         age: '22'
    //     }, (error, result) => {
    //         if (error) {
    //             return console.log('Unable to inster user')
    //         }

    //         console.log(result.ops)

    //     })

    // db.collection('users').insertMany([
    //     {
    //         name: 'shlok',
    //         age: '20'
    //     },
    //     {
    //         name: 'Gaurav',
    //         age: '20'
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert Documets!')
    //     }

    //     console.log(result.ops)


    // })

    db.collection('task').insertMany([
        {
            description: 'clean the house',
            completed: true
        },
        {
            description: 'Renew Inspection',
            completed: false
        },
        {
            description: 'Pots Plants',
            completed: false
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert Documents!')
        }

        console.log(result.ops)
    })
})
