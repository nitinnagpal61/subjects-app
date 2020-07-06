import { Subject } from '../common/models/subject.model';
import { SubjectDetails } from '../common/models/subject-details.model';

const express = require('express');
const cors = require('cors');
const subjects =  require('./data/subjects.json');
const subjectsDetails =  require('./data/subjects-details.json'); 

// Create a new express application instance
const app = express();

const corsOptions = {
    origin: 'http://localhost:4300',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/subjects', cors(corsOptions), function (req, res) {
  res.send(subjects as Subject); 
});

app.get('/subjects/:id', cors(corsOptions), function (req, res) {
    const subjectDetails = subjectsDetails.find(sd => sd.id === parseInt(req.params.id));
    res.send(subjectDetails as SubjectDetails); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});