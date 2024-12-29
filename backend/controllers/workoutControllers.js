const WorKout = require('../models/WorkoutModel');


//get all workouts

const getAllWorkouts = async (req, res) => {
    try {
        const workouts = await WorKout.find({}).sort({createdAt: -1})
        res.status(200).json({workouts})
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//get a single workout

const getSingleWorkout = async (req, res) => {
    const {id} = req.params

    try {
        const workout = await WorKout.findById(id)
        res.status(200).json({workout})
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//create a workout

const createWorkout = async (req, res) => {
    const {title, reps, load} = req.body
    let emptyField=[]
    if(!title){
        emptyField.push('title')
    }
    if(!reps){
        emptyField.push('reps')
    }
    if(!load){
        emptyField.push('load')
    }
    if(emptyField.length>0){
        return res.status(400).json({err: `Please enter ${emptyField.join(', ')}`})
    }
    

    try {
        const workout = await WorKout.create({title, reps, load})
        res.status(200).json({workout})
    } catch (err) { 
        res.status(400).json({err: err.message})        
    }
}

//delete a workout

const deleteWorkout = async (req, res) => {
    const {id} = req.params

    try {
        const workout = await WorKout.findByIdAndDelete(id)
        res.status(200).json({"mssg": "Workout deleted"})
    } catch (err) {
        res.status(400).json({err: err.message})
    }
}

//update a workout

const updateWorkout = async (req, res) => {
    const {id} = req.params
    const {title, reps, load} = req.body

    try {
        const workout = await WorKout.findByIdAndUpdate(id, {title, reps, load}, {new: true})
        res.status(200).json({workout})
    }
    catch (err) {
        res.status(400).json({err: err.message})
    }
}

module.exports = { 
    getAllWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}