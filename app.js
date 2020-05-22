const express = require('express');
const { data } = require('./data.json');

const app = express();



app.set('view engine', 'pug');
app.use(express.json());
app.use('/static', express.static('public','images'));

    
app.get('/',(req,res) => {
    res.render('index', {data});
}) 
app.get('/about',(req,res) => {
    res.render('about');
})
app.get('/project',(req,res) => {
    res.render('project');
})  






app.listen(3000);