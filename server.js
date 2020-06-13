const express = require('express');
const app = express();
const port = 3000;

app.use('/assets',express.static('assets'))
app.get('/', (req, res)=> res.sendFile(__dirname+'/index.html'));

app.listen(port, ()=> console.log("Site funcionando em: http://localhost:3000"));