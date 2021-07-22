const express = require('express');
 const {
    insertUser,
    getUser,
    getSportById,
    getSports,
    findComments,
    addComment,
    getEvents,
    findEventById,
    search
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
        console.log(req.query)
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


server.get("/api/sports/:id/comments", async (req, res) => {
    try {
        res.status(200).json({
            comments: await findComments(req.params.id) 
        })
    } catch (error) {
        console.log(error)
    }
})

server.post("/api/sports/:id/comments", async (req, res) => {
    await addComment(req.params.id, req.body)
    
    res.sendStatus(201)
})

server.get('/api/events', async (req, res) => {
    
    res.status(200).json({ events: await getEvents()});
})

server.get('/api/:id/events', async (req, res) => {
    
    const event = await findEventById(req.params.id)
    if (event) {
        res.status(200).json({
           event: event
        })
    } else {
        res.status(404).send("Não foi encontrado")
    }
})
server.listen(PORT, () => console.log('À escuta em ' + PORT));


