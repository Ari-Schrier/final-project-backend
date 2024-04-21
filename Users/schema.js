import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: String,
    role: {
      type: String,
      enum: ["ADMIN", "USER", "WARNED"],
      default: "USER",},
    comments: String,
    sets: [String],
    favoriteTunes: [String]
  },
  { collection: "users" });
export default userSchema;

