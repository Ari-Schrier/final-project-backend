import mongoose from "mongoose";
const tuneSchema = new mongoose.Schema({
    name: { type: String, required: true},
    sessionId: String,
    type: String,
    email: String,
    aliases: [String],
    comments: [{
      type: Types.ObjectId,
      ref: comments,
    }],
    sets: [{
      type: Types.ObjectId,
      ref: sets,
    }]
  },
  { collection: "tunes" });
export default tuneSchema;