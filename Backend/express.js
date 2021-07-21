const express = require('express');
 const {
    insertUser,
    getUser,
    insertSports,
    getSports,
    getSport,
    insertComment,
    getComment,
    getComments
} = require('./data/db');

const server = express();
const PORT = 3301;

server.use(express.join());

server.get('/api/', (req, res) => {
    res.status(200).json({
        message: "Working"
    })
})

server.get("/api/user/:id", async (req, res) => {
    const user_id = await getUser(req.params.id);
    res.status(200).json({ user_id });
})

server.post('/api/user', async (req, res) => {
    const user = await insertUser(req.body);
    res.status(200).json({ user });
})

server.get('/api/sport/:sport', async (req, res) => {
    const sports = await getSport(req.body);
    res.status(200).json({ sports });
})

server.post('/api/sport', async (req, res) => {
    const sport = await insertSports(req.body)
    res.status(200).json({ sport });
})

server.get('/api/comment/:id', async (req, res) => {
    const comment_id = await getComment(req.params.id);
    res.status(200).json({ comment_id });
})

server.get('/api/comment', async (req, res) => {
    const comments = await getComments(req.body);
    res.status(200).json({ comments })
})

server.post('/api/comment', async (req, res) => {
    const comment = await insertComment(req.body);
    res.status(200).json({ comment })
})

server.listen(PORT, () => console.log('À escuta em ' + PORT));


