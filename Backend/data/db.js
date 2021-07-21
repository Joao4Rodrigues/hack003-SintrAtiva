const mongodb = require('mongodb');
/* const bcrypt = require('bcrypt');
const saltRounds = 10; */

const { MongoClient } = mongodb;

const URI = "mongodb://localhost:27017"
const DB_NAME = "SintrAtiva"
let client  

async function connect(uri) {
    try {
        if(client) return client;
        // Cria o cliente
        client = new MongoClient(uri, {
            useUnifiedTopology: true
        })

        // Aguarda a ligacao
        await client.connect()
        // Retorna o cliente
        return client;
        
    } catch (err) {
        console.log(err);
    }
}

function closeConnection() {
    client.close();
}

async function getCollection(dbName, collectionName) {
    const user = await connect(URI);
    const db = user.db(dbName);
    return db.collection(collectionName);
}

async function insertUser(user) {
    const collection = await getCollection(DB_NAME, "users")
    const res = await collection.insertOne(user)
    console.log(user, res)
    return res.insertId;
}

async function getUser(user_id) {
    const collection = await getCollection(DB_NAME, "users")
    const res = await collection.FindOne({_id: mongodb.ObjectId(user_id)})
    return res;
}

async function insertSports(sport) {
    const collection = await getCollection(DB_NAME, "sports")
    const res = await collection.insertOne(sport)
    return res.insertId;
}

async function getSport(sport) {
    const collection = await getCollection(DB_NAME, "sports")
    const res = await collection.findOne({name: sport})
    return res;
}

async function insertComment(comment) {
    const collection = await getCollection(DB_NAME, "comments")
    const res = await collection.insertOne(comment)
    return res.insertId;
}

async function getComments() {
    const collection = await getCollection(DB_NAME, "comments")
    const res = await collection.find().toArray();
    return res;
}

async function getComment(comment_id) {
    const collection = await getCollection(DB_NAME, "comments")
    const res = await collection.findOne({_id: mongodb.ObjectId(comment_id)})
    return res;
}

module.exports = {
    insertUser,
    getUser,
    insertSports,
    getSport,
    getSport,
    insertComment,
    getComment,
    getComments,
    closeConnection
}