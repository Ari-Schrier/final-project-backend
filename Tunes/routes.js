import * as dao from "./dao.js";

export default function TuneRoutes(app) {

    const findTune = async(req, res) => {
      const {sessionId} = req.params;
      const currentTune = await dao.findTuneBySessionId(sessionId);
      if (!currentTune) {
        res.status(404).send("Tune not found");
        return;
      }
      res.json(currentTune);
    };
    const updateTune = async(req, res) => {
      const { id } = req.params;
      const tune = req.body;
      const result =  dao.updateTune(id, tune);
      res.json(result);
    };
    const deleteTune = async(req, res) => {
      const { id } = req.params;
      await dao.deleteTune(id);
      res.sendStatus(204);
    };
    const createTune = async(req, res) => {
      const tune = req.body;
      await dao.createTune(tune);
      const newTune = await dao.findTuneByName(tune.name);
      res.send(newTune);
    };
    const getTunes = async(req, res) => {
      const tunes = await dao.findAllTunes();
      res.json(tunes);
    };
  
    app.get("/api/tunes/:sessionId", findTune);
  
    app.put("/api/tunes/:id", updateTune);
  
    app.delete("/api/tunes/:id", deleteTune);
  
    app.post("/api/tunes", createTune);
  
    app.get("/api/tunes", getTunes);
  }
  