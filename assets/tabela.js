const tabela = document.body.querySelector('#tabela')  

//1 tr e 4 td dentro 
//n de nome
//e de email
//t de tell
//m de mens

var tabela = document.createElement('tr');
 
var  n = document.createTextNode("qualque coisa1");
tabela.appendChild(n);

var tabela = document.createElement('td');
var e = document.createTextNode("qualquer coisa2");
tabela.appendChild(e);

var tabela = document.createElement('td');
var t = document.createTextNode("Qualquer coisa3")
tabela.appendChild(t);

var tabela = document.createElement('td');
var m = document.createTextNode("Qualquer coisa4")
tabela.appendChild(m);
