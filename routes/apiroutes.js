const Workout = require("../models/workoutSchema.js")
const mongo = require("mongojs");

module.exports = function (app) {

    app.get("/api/workouts", function (req, res) {
       Workout.find({}).sort({"day": -1}).limit(1)
          .then(data => {
               console.log(data)
               res.json(data)

            }).catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    
      app.put("/api/workouts/:id", (req, res) => {
        Workout.collection.updateOne(
          { 
            _id: mongo.ObjectId(req.params.id) 
          },
          { 
            $push: { 
              exercises: req.body 
            }
          }, 
          (err, data) => {
            if (err) {
              res.send(err);
            } else {
              res.send(data);
            }
          });
        });
        app.get("/api/workouts/range", (req, res) => {
            Workout.find({}).then(data => {
                res.json(data)
            }).catch(err => {
              res.send(err);
            });
          });
};



