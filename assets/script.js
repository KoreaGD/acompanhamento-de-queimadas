const formName = document.querySelector('#formNome');
const formEmail = document.querySelector('#formEmail');
const formTelefone = document.querySelector('#formTelefone');
const formMessage = document.querySelector('#formMessage');
const formSubm = document.querySelector('#formSubm');
const socket = io('localhost:3000');
const firebase = require('firebase/firebase-app')
const firebaseApp = require('firebase/database')
const firebaseConfig = {
    apiKey: "AIzaSyA0FnkjBk4oA65xkNzwarVVoKkxi2y4yX4",
    authDomain: "acompanhamento-de-queimadas.firebaseapp.com",
    databaseURL: "https://acompanhamento-de-queimadas.firebaseio.com",
    projectId: "acompanhamento-de-queimadas",
    storageBucket: "acompanhamento-de-queimadas.appspot.com",
    messagingSenderId: "378104616490",
    appId: "1:378104616490:web:8432b42dae788a2a8e9553",
    measurementId: "G-476TZMKJ6M"
};
const database = firebase.database();




let user;

function getData() {
    user = {
        nome: formName.value,
        email: formEmail.value,
        telefone: formTelefone.value,
        message: formMessage.value,
    };
}

formSubm.addEventListener('click', e => {
    e.preventDefault();
    socket.once('connect', function () {
        socket.on('connect', function () {
            getData();
            socket.emit('sendForm', user)
        })
    })
})


