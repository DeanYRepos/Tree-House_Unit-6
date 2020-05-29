const express = require('express');
const {projects} = require('./data.json');

const app = express();



app.set('view engine', 'pug');
app.use(express.json());
app.use('/static', express.static('public'));

app.use((req,res,next) => {
console.log('Oop!');

const err = new Error ("Somthing went wrong!");
next();
})

    
app.get('/',(req,res,next) => {
    res.render('index', {projects});
}) 
app.get('/about',(req,res,next) => {
    res.render('about');
})
app.get('/projects:id',(req,res,next) => {
    const projectId = req.params.id;
    
    const project = projects.find( ({ id }) => id === +projectId );
    if (project) {
    res.render('project', { project });
    } else {
        res.sendStatus(404);
    }
});  






app.listen(3000, () => {

    console.log("Listening on port 3000!")
});