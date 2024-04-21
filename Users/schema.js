import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "WARNED"],
      default: "USER",},
    comments: {
        type: Types.ObjectId,
        ref: comments,
    },
    sets: {
        type: Types.ObjectId,
        ref: sets,
    },
    favoriteTunes: {
        type: Types.ObjectId,
        ref: tunes,
    }
  },
  { collection: "users" });
export default userSchema;

