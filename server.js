const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

const PORT = process.env.PORT || 3030;


// const Workouts = require("./public/workout");

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", { useNewUrlParser: true, useFindAndModify: false });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '/public')));

require("./routes/htmlroutes")(app);
require("./routes/apiroutes.js")(app);


app.listen(PORT, function(){
  console.log(`App listening on Port ${PORT}!`);
});



