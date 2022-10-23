const express = require('express').Router();
const path = require('path');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});


module.exports= express; 