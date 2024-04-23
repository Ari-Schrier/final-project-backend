import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    author: String,
    subjectNum: String,
    subjectName: String,
    text: String,
  },
  { collection: "comments" });
export default commentSchema;