import model from "./model.js";
export const createComment = (comment) => model.create(comment);
export const findAllComments = () => model.find();
export const findCommentById = (id) => model.findById(id);
export const updateComment = (id, comment) =>  model.updateOne({ _id: id }, { $set: comment });
export const deleteComment = (id) => model.deleteOne({ _id: id });