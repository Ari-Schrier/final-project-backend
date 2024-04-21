import express from 'express';
import mongoose from "mongoose";
import cors from "cors";
import TuneRoutes from './Tunes/routes.js';
import UserRoutes from './Users/routes.js';
import CommentRoutes from './Comments/routes.js';
import SetRoutes from './Sets/routes.js';
mongoose.connect("mongodb://127.0.0.1:27017/tuneTronve");
const app = express();
app.use(cors());
app.use(express.json());
TuneRoutes(app);
UserRoutes(app);
CommentRoutes(app);
SetRoutes(app);

app.listen(4000);