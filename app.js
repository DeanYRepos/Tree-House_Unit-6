const express = require('express');
const {projects} = require('./data.json');
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'pug');
app.use(express.json());
app.use('/static', express.static('public'));


app.get('/',(req, res, next) => {
    res.render('index', {projects});
    
}) 
app.get('/about',(req,res,next) => {
    res.render('about');
    
})
app.get('/projects/:id',(req,res,next) => {
    const projectId = req.params.id;
    
    const project = projects.find( ({ id }) => id === +projectId );
    if (project) {
    res.render('project', { project });

    } else {
        
        res.sendStatus(404);
    }
    
});  

app.use((req, res, next) => {

    const err = new Error('Oh no! Page not found!');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
    console.log("Oop, page not found!");
  
}); 




app.listen(port, () => {

    console.log("Listening on port 3000!")
});