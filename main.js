const http = require('http');
const express = require('express');
const app = express();
const users = ['박규태', '공아름', '마요', '사탕','test'];

// express
app.get('/', (req,res) => {
    res.end('<h1>Hello PUBGYU</h1>')
});
app.get('/users', (req,res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`<h1>${users}</h1>`)
});
app.get('/users/:id', (req,res) => {
    const usersId = req.params.id;
    const usersName = users[usersId - 1];

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (usersId > 0 && usersId < users.length) {
        res.end(`<h1>${usersName}</h1>`)   
    }else {
        res.status(404).end('<h1>404 error</h1>');
    }
});
app.get('*', (req,res) => {
    res.end('<h1>404 error</h1>')
});
app.listen(3000);

// http 
// const server = http.createServer((req,res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

//     if(req.url === '/') {
//         res.end('<h1>Hello PUBGYU</h1>')
//     }else if(req.url === '/users') {
//         res.end(`<h1>${users}</h1>`)
//     }else if(req.url.split('/')[1] === 'users') {
//         const usersId = req.url.split('/')[2];
//         const usersName = users[usersId - 1];
//         res.end(`<h1>${usersName}</h1>`)
//     }else {
//         res.end('<h1>404 error</h1>')
//     }
// });
// server.listen(3000);