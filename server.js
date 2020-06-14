const express = require('express');
const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3000;
const firebase = require('firebase');

// const DB = require('firebase/database');
// const firebaseConfig = {
//     apiKey: "AIzaSyA0FnkjBk4oA65xkNzwarVVoKkxi2y4yX4",
//     authDomain: "acompanhamento-de-queimadas.firebaseapp.com",
//     databaseURL: "https://acompanhamento-de-queimadas.firebaseio.com",
//     projectId: "acompanhamento-de-queimadas",
//     storageBucket: "acompanhamento-de-queimadas.appspot.com",
//     messagingSenderId: "378104616490",
//     appId: "1:378104616490:web:8432b42dae788a2a8e9553",
//     measurementId: "G-476TZMKJ6M"
// };
// firebase.initializeApp(firebaseConfig);




app.use('/assets', express.static('assets'));
app.use('/fonts', express.static('fonts'));
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));
app.get('/table', (req, res) => res.sendFile(__dirname + '/table.html'));

// io.once('connection', socket => {
    // socket.once('sendForm', data => {
        // console.log(data)
    // })
// })

http.listen(process.env.PORT || 5000, () => console.log("Site funcionando em: http://localhost:3000"));