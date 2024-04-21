import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    author: String,
    subject: String,
    text: String,
  },
  { collection: "comments" });
export default commentSchema;