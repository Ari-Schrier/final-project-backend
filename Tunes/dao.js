import model from "./model.js";
export const createTune = (tune) => model.create(tune);
export const findAllTunes = () => model.find();
export const findTuneById = (tuneId) => model.findById(tuneId);
export const findTuneByName = (query) =>  model.findOne({ name: query });
export const findTuneBySessionId = (query) => model.findOne({sessionId: query});
export const updateTune = (id, tune) =>  model.updateOne({ _id: id }, { $set: tune });
export const deleteTune = (tuneId) => model.deleteOne({ _id: tuneId });