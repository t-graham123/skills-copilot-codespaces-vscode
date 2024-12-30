// create web server
// create a route for comments
// create a route for creating a new comment
// create a route for deleting a comment
// create a route for editing a comment

const express = require('express');
const app = express();
const port = 3000;
const comments = require('./comments');

app.get('/comments', (req, res) => {
    res.send(comments.getComments());
});

app.post('/comments', (req, res) => {
    res.send(comments.createComment());
});

app.delete('/comments/:id', (req, res) => {
    res.send(comments.deleteComment());
});

app.put('/comments/:id', (req, res) => {
    res.send(comments.editComment());
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});