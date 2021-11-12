const express = require('express');
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/gastracker', {
  useNewUrlParser: true
});

// Create a new item in the museum: takes a title and a path to an image.
app.post('/api/entry', async (req, res) => {
  const entry = new Entry({
    date: req.body.date,
    miles: req.body.miles,
    gallons: req.body.gallons,
    cost: req.body.cost
  });
  try {
    await entry.save();
    res.send(entry);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// Get a list of all of the items in the museum.
app.get('/api/entry', async (req, res) => {
  try {
    let entries = await Entry.find();
    res.send(entries);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/entry/:id', async (req,res) => {
  Entry.deleteOne({_id : req.params.id}, (err, result) => {
    if(err){ console.log(err); }
  });
  res.sendStatus(200);
});

app.put('/api/entries/:id', async (req, res) => {
  Entry.findOne({_id : req.params.id}, (err, result) => {
    if(err){ console.log(err); }
    let entry = result;
    entry.miles = req.body.miles;
    entry.gallons = req.body.gallons;
    entry.cost = req.body.cost;
    entry.save();
    res.sendStatus(200);
  });
});

// Create a scheme for items in the museum: a title and a path to an image.
const entrySchema = new mongoose.Schema({
  date: String,
  miles: String,
  gallons: String,
  cost: String,
});

// Create a model for items in the museum.
const Entry = mongoose.model('Entry', entrySchema);

app.listen(3000, () => console.log('Server listening on port 3000!'));
