import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    author: {
        type: Types.ObjectId,
        ref: users,
      },
    subject: {
        type: Types.ObjectId,
        ref: tunes,
      },
    text: String,
  },
  { collection: "comments" });
export default commentSchema;