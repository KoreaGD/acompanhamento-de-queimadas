const formName = document.querySelector('#formNome');
const formEmail = document.querySelector('#formEmail');
const formTelefone = document.querySelector('#formTelefone');
const formMessage = document.querySelector('#formMessage');
const formSubm = document.querySelector('#formSubm');

formSubm.addEventListener('click', e=> {
    e.preventDefault();
    const form = {
        nome: formName,
        email: formEmail,
        telefone: formTelefone,
        message: formMessage,
    };
}, false);

