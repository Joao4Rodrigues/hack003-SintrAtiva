const mongodb = require('mongodb');
const { ObjectId } = require("mongodb");
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
    const res = await collection.findOne({_id: mongodb.ObjectId(user_id)})
    return res;
}

async function insertSports(sport) {
    const collection = await getCollection(DB_NAME, "sports")
    const res = await collection.insertOne(sport)
    return res.insertId;
}
async function insertEvents(event) {
    const collection = await getCollection(DB_NAME, "events")
    const res = await collection.insertOne(event)
    return res.insertId;
}

async function getSports() {
    const collection = await getCollection(DB_NAME, 'sports')
    const sports = await collection.find({}, {
        projection: {name: 1}

    }).sort({name: 1}).toArray()
    return sports;
}
async function getEvents() {
    const collection = await getCollection(DB_NAME, 'events')
    const events = await collection.find({}, {
        projection: {event: 1, image: 1, date: 1, info: 1}

    }).toArray()
    return events;
}
async function getSportById(id) {
    const collection = await getCollection(DB_NAME, "sports");

    const sport = await collection.findOne({ _id: ObjectId(id) })
    return sport;
}

async function insertComment(comment) {
    const collection = await getCollection(DB_NAME, "comments")
    const res = await collection.insertOne(comment)
    return res.insertId;
}

async function findComments(id) {
    const collection = await getCollection(DB_NAME, "comments");
    const comments = await collection.find({ sportId: ObjectId(id) }).toArray()

    return comments;
}

async function addComment(id, comment) {
    const collection = await getCollection(DB_NAME, "comments");
    const comments = await collection.insertOne({ sportId: ObjectId(id), ...comment, date: new Date()})
    
    return comments;
}


async function search(text) {
    const collection = await getCollection(DB_NAME, 'sports')
    const sports = await collection.find({
            name: { $regex: `.*${text}.*`, $options: 'i' } 
        
    }).toArray()

    return {
        sports
    }
}
module.exports = {
    insertUser,
    insertEvents,
    getUser,
    insertSports,
    getSports,
    insertComment,
    findComments,
    addComment,
    closeConnection,
    getSportById,
    search,
    getEvents
}