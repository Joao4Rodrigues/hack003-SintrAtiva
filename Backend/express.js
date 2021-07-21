const express = require('express');
 const {
    insertUser,
    getUser,
    getSportById,
    getSports,
    insertComment,
    getComment,
    getComments
} = require('./data/db');

const server = express();
const PORT = 3301;

server.use(express.json());

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

server.get("/api/search", async (req, res) => { //searchbar
    if (req.query.search)  {
        res.status(200).json(await search(req.query.search))
    } else {
        res.sendStatus(200)
    }
})


server.get('/api/sport', async (req, res) => {
    
    res.status(200).json({ sports: await getSports()});
})

server.get('/api/sport/:id', async (req, res) => {
    console.log(req.params)
    const sport = await getSportById(req.params.id)
    if (sport) {
        res.status(200).json({
            sport: sport
        })
    } else {
        res.status(404).send("Não foi encontrado")
    }
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


