import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("SetsModel", schema);
export default model;