import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("TuneModel", schema);
export default model;