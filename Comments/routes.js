import * as dao from "./dao.js";

export default function CommentRoutes(app) {

    const findComment = async(req, res) => {
      const {id} = req.params;
      const currentComment = await dao.findCommentById(id);
      if (!currentComment) {
        res.status(404).send("Tune not found");
        return;
      }
      res.json(currentTune);
    };
    const updateComment = async(req, res) => {
      const { id } = req.params;
      const comment = req.body;
      await dao.updateComment(id, comment);
      res.sendStatus(204);
    };
    const deleteComment = async(req, res) => {
      const { id } = req.params;
      await dao.deleteComment(id);
      res.sendStatus(204);
    };
    const createComment = async(req, res) => {
      const comment = req.body;
      const newComment = await dao.createComment(comment);
      res.send(newComment);
    };
    const getComments = async(req, res) => {
      const comments = await dao.findAllComments();
      res.json(comments);
    };
  
    app.get("/api/comments/:id", findComment);
  
    app.put("/api/comments/:id", updateComment);
  
    app.delete("/api/comments/:id", deleteComment);
  
    app.post("/api/comments", createComment);
  
    app.get("/api/comments", getComments);
  }
  