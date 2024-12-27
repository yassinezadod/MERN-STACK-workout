
const express = require("express")
const mongoose = require("mongoose")
const { createWorkout } = require("./controllers/workoutControllers")
require('dotenv').config()

const workoutRoutes = require('./routes/workouts')


const app = express()

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//Routes

app.use('/api/workouts', workoutRoutes)

// app.get('/about/', (req, res) =>{

//     res.json({mssg: "hello yassine"})
// })


//connect to mongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("connected to mongoDB")
}).catch((err)=>{
    console.log(err)
})

app.listen(process.env.PORT, ()=>{
    console.log("Connect to DB & lestining en port", process.env.PORT)
})