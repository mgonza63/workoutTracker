const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;


// const Workouts = require("./public/workout");

const app = express();

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", { useNewUrlParser: true, useFindAndModify: false });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

require("./routes/htmlroutes")(app);

app.listen(PORT, function(){
  console.log(`App listening on Port ${PORT}!`);
});



