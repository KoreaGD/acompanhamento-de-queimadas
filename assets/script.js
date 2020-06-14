const formName = document.querySelector('#formNome');
const formEmail = document.querySelector('#formEmail');
const formTelefone = document.querySelector('#formTelefone');
const formMessage = document.querySelector('#formMessage');
const formSubm = document.querySelector('#formSubm');
const socket = io('localhost:3000');
let user;

function getData(){
    user = {
        nome: formName.value,
        email: formEmail.value,
        telefone: formTelefone.value,
        message: formMessage.value,
    };
}

formSubm.addEventListener('click', e=> {
    e.preventDefault();
    socket.once('connect', function(){
        getData();
        socket.emit('sendForm', user)
    })

}, false);