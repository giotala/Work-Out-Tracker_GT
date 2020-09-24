const path = require("path");
const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/api/workouts", function (req, res) {
    db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", function (req, res) {

});
router.post("/api/workouts/", function (req, res) {

});
router.get("/api/workouts/range", function (req, res) {

});

module.exports = router;