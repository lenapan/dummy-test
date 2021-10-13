const express = require('express');
const bodyParser = require('body-parser');
const mongoPractice = require('./mongo');
const mongo2 = require('./mongo2');
const mongo3 = require('./mongo3');

const app = express();

app.use(bodyParser.json());

//MUST USE TO PREVENT CORS ERROR
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type, Accept, Authorization, *');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
})
app.post('/api/Comments', mongoPractice.ADD);
app.post('/api/Titles', mongo2.addTitles);
app.post('/api/Name', mongo3.addName);

app.get('/api/Comments', mongoPractice.getComments);
app.get('/api/Titles', mongo2.retrieveTitles);
app.get('/api/Name', mongo3.getName);

app.delete('/api/Titles', mongo2.deleteTitles);

app.listen(process.env.PORT || 5000); //Heroku provides port