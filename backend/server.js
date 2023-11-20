require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')
const app = express()

app.use(express.json())

app.use("/", (req,res) => {
    res.json({ message: "Hello from Express App"});
})

app.use((req, res, next) => {
    console.log(req.path,req.method);
    next()
})


//routes
app.use('/api/workouts',workoutRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port',process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error);
  })

module.exports=app