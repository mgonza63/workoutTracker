const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: {
            type: Date,
            default: () => new Date(),
        } 
    },
    exercises: [{
          type: {
              type: String
          },
          name: {
            type: String
        } ,
          duration:{
            type: String
        } ,
          weight: {
            type: Number
        } ,
          reps: {
            type: Number
        } ,
          sets: {
            type: Number
        } ,
        }]
    })

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;