const express = require("express")

const { randomBytes } = require("crypto")

const cors = require("cors")

const app = express()

app.use(express.urlencoded({extended: true}));

app.use(cors());

app.use(express.json()) // To parse the incoming requests with JSON payloads

const commentsByPostId = {}

app.get("/posts/:id/comments", (req, res) => {
    res.send(commentsByPostId[req.params.id]) || []
})

app.post("/posts/:id/comments", (req, res) => {
    const commentId = randomBytes(4).toString("hex")

    const { content } = req.body

    const comments = commentsByPostId[req.params.id] || [];

    comments.push( {id: commentId, content} );

    commentsByPostId[req.params.id] = comments

    res.status(201).send(comments)
})


app.listen(5000, () => {
    console.log("Server listening on port 5000")
})