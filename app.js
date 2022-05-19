const express = require('express');

const app = express();

// listen for requests

app.listen(3001);


app.get('/', (req, res) =>{
        res.sendFile('./views/index.html', {root: __dirname});
        // res.send('<p>Home Page</p>');
});

app.get('/about', (req, res) =>{

        res.sendFile('./views/about.html', {root: __dirname});
        // res.send('<p>about page</p>');
});


// redirect
app.get('/about-us', (req, res)=>{
        res.redirect('/about');
});

// 404 page
app.use((req, res) =>{
        res.status(404).sendFile('./views/404.html', {root: __dirname})
});