import mongoose from "mongoose";
const setSchema = new mongoose.Schema({
    name: { type: String, required: true},
    user: String,
    tunes: [String],
    description: String,
    comments: [String]
  },
  { collection: "sets" });
export default setSchema;