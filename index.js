const express  = require('express');
const app = express();
const port = 3000;
app.listen(port ,    () => { console.log('server created success!')});
app.get('/' ,    (req , res) => {res.send('hello')}    )
app.get('/user' ,    (req , res) => {res.send('<h1>Phung sy</h1>')}    )
app.get('/end' ,    (req , res) => {res.send('<h3>ENDED</h3>')}    )