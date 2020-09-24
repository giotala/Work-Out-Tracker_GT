const path = require("path");
const express = require("express");
const router = express.Router();

const db = require("../models");
const { Workout } = require("../models");

router.get("/api/workouts", function (req, res) {
    db.Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params }, res) => {
        db.Workout.findByIdAndUpdate(
         params.id,
          {$push: {exercises: body}},
          {new: true, runValidators:true}
    ).then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
});

router.post("/api/workouts", function (req, res) {
    db.Workout.create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
    db.Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;