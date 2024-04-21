import model from "./model.js";
export const createSet = (set) => model.create(set);
export const findAllSets = () => model.find();
export const findSetById = (setId) => model.findById(setId);
export const updateSet = (setId, set) =>  model.updateOne({ _id: setId }, { $set: set });
export const deleteSet = (setId) => model.deleteOne({ _id: setId });