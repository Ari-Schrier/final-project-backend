import mongoose from "mongoose";
const tuneSchema = new mongoose.Schema({
    name: { type: String, required: true},
    sessionId: String,
    type: String,
    email: String,
    aliases: [String],
    comments: [{
      ref:"comments", type:
        mongoose.Schema.Types.ObjectId}],
    sets: [String]
  },
  { collection: "tunes" });
export default tuneSchema;