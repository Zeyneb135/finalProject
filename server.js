<<<<<<< HEAD
import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from 'cookie-parser';

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to mongoDB');
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected');
})

//middlewares
app.use(cookieParser())

app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.use((error,req,res,next) => {
    const erroStatus = error.status || 500
    const erroMessage = error.message || 'something wrong'
    return res.status(erroStatus).json({
        success:false,
        status:erroStatus,
        message:erroMessage,
        stack:error.stack,
    });
});


app.listen(5555, () => {
    connect()
    console.log('connected to backend');
=======
import express from 'express'
import dotenv from 'dotenv';
import mongoose from 'mongoose';

const app = express()
dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('connected to mongoDB');
    } catch (error) {
        throw error
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('mongoDB disconnected');
})

mongoose.connection.on('connnected', () => {
    console.log('mongoDB connnected');
})

app.listen(5555, () => {
    connect()
    console.log('connected to backend');
>>>>>>> 76ec7ad4ee737ce1deeb5cf5039f963c48464425
})