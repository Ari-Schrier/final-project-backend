import model from "./model.js";

export const createSet = (set) => model.create(set);
export const findAllSets = () => model.find();
export const findSetByName = (setName) => model.find({name: setName});
export const findAllSetsByAuthor = (authorname) => model.find({author: authorname});
export const findAllSetsContaining = (tuneId) => model.find({tunes:tuneId});
export const updateSet = (setName, set) =>  model.updateOne({ name: setName }, { $set: set });
export const deleteSet = (setName) => model.deleteOne({ name: setName });