const express = require("express")
const WorKout = require("../models/WorkoutModel")
const { 
    createWorkout,
    getAllWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
 } = require('../controllers/workoutControllers')

const router = express.Router()


//Get all workouts
router.get('/', getAllWorkouts)


//Get a single workout

router.get('/:id', getSingleWorkout)


//Post a workout

router.post('/', createWorkout)

//Delete a workout

router.delete('/:id', deleteWorkout)


//Update a workout

router.patch('/:id', updateWorkout)


module.exports = router