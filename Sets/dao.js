import model from "./model.js";
import userModel from "../Users/model.js";

export const createSet = (set) => model.create(set);
export const findAllSets = () => model.find().populate('author').exec();
export const findSetById = (setId) => model.findById(setId).populate('tunes').exec();
export const findAllSetsByAuthor = (authorId) => model.find({author: authorId}).populate('author').populate('tunes').exec();
export const findAllSetsContaining = (tuneId) => model.find({tunes:tuneId}).populate('tunes').populate('author').exec();
export const updateSet = (setId, set) =>  model.updateOne({ _id: setId }, { $set: set });
export const deleteSet = (setId) => model.deleteOne({ _id: setId });