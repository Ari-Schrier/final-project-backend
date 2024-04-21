import * as dao from "./dao.js";

export default function TuneRoutes(app) {

    const findTune = async(req, res) => {
      const {sessionId} = req.params;
      console.log(`session id requested: ${sessionId}`)
      const currentTune = await dao.findTuneBySessionId(sessionId);
      if (!currentTune) {
        console.log(`Tune with session id ${sessionId} could not be found. Sending 404.`);
        res.status(404).send("Tune not found");
        return;
      }
      console.log(currentTune);
      res.json(currentTune);
    };
    const updateTune = async(req, res) => {
      const { id } = req.params;
      const tune = req.body;
      await dao.updateTune(id, tune);
      res.sendStatus(204);
    };
    const deleteTune = async(req, res) => {
      const { id } = req.params;
      await dao.deleteTune(id);
      res.sendStatus(204);
    };
    const createTune = async(req, res) => {
      const tune = req.body;
      console.log("Adding the following tune:");
      console.log(tune);
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
  