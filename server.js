const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;

app.use('/assets', express.static('assets'));
app.use('/fonts', express.static('fonts'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

io.once('connection', socket =>{
    socket.once('sendForm', data=>{
        console.log(data)
    })
})

http.listen(port, () => console.log("Site funcionando em: http://localhost:3000"));