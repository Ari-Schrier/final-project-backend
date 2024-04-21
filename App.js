import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import TuneRoutes from './Tunes/routes.js';
mongoose.connect("mongodb://127.0.0.1:27017/tuneTronve");
const app = express();
app.use(cors());
app.use(express.json());
TuneRoutes(app);

app.listen(4000);