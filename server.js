const express = require("express");
const app = express();
let mongoose = require("mongoose");
require("dotenv/config");

mongoose.connect(
  process.env.DB_Connection,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (er) => {
    if (er) {
      console.log(er);
    } else console.log("connected");
  }
);
let Person = require("./src/models/person");

app.use(express.json);

// Start


var person = new Person({
  name: "Ramzi",
  age: 22,
  favoriteFoods: ["pizza", "tacos"],
});
person.save((err, data) => {
  if (err) {
    console.log(err);
  }
});


// End

app.listen(5000, (err) => {
  if (err) {
    throw err;
  } else console.log("no error");
});
