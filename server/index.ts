import { Subject, SubjectDetails, NavLink } from "../common/index";
import { AdditionalInfo } from "../common/models/additional-info.model";
const express = require("express");
const cors = require("cors");
const subjects = require("./data/subjects.json");
const subjectsDetails = require("./data/subjects-details.json");
const navLinks = require("./data/nav-links.json");
const additionalInfos = require("./data/additional-info.json");

// Create a new express application instance
const app = express();

const corsOptions = {
  origin: "http://localhost:4300",
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/subjects", cors(corsOptions), function(req, res) {
  res.send(subjects as Subject[]);
});

app.get("/subjects/:id", cors(corsOptions), function(req, res) {
  const subjectDetails = subjectsDetails.find(
    sd => sd.id === parseInt(req.params.id)
  );
  res.send(subjectDetails as SubjectDetails);
});

app.get("/navlinks", cors(corsOptions), function(req, res) {
  res.send(navLinks as NavLink[]);
});

app.get("/additional-info", cors(corsOptions), function(req, res) {
  res.send(additionalInfos as AdditionalInfo[]);
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
