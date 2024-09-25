const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('I KNOW HOW TO START NODE..YAY');
})

app.listen(3000, ()=> console.log('Listenin to port 3000'))