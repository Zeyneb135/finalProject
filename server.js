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
})