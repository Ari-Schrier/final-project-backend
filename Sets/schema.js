import mongoose from "mongoose";
const setSchema = new mongoose.Schema({
    name: { type: String, required: true},
    user: {
        type: Types.ObjectId,
        ref: users,
      },
    tunes: [{
        type: Types.ObjectId,
        ref: tunes,
      }],
    description: String,
    comments: [{
        type: Types.ObjectId,
        ref: comments,
      }]
  },
  { collection: "sets" });
export default setSchema;