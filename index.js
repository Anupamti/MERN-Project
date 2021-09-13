import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors';
import dotenv from 'dotenv'
const app = express();

dotenv.config();

const { DB_URI } = process.env

const CONNECTION_URL = DB_URI;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server on port ${PORT}`)))
    .catch((err) => console.log(err))