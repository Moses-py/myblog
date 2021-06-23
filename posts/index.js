const express = require("express")

const { randomBytes } = require("crypto")

const cors = require("cors")

const app = express()

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.use(express.json()) // To parse the incoming requests with JSON payloads


// Create a posts object to store a list of posts in absence of a database
const posts = {}

app.get('/posts', (req, res) => {
    res.send(posts)
})


app.post("/posts", (req, res) => {
    // Generate a random id for any new post created
    const id = randomBytes(4).toString("hex")

    const { title } = req.body;

    posts[id] = {
        id,
        title
    };

    res.status(201).send(posts[id])
})

// Start server
app.listen(4000, () => {
    console.log("server listening on port 4000...")
})


