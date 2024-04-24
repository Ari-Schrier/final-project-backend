import * as dao from "./dao.js";

export default function SetRoutes(app) {

    const findSet = async(req, res) => {
      const {id} = req.params;
      const currentSet = await dao.findSetById(id);
      if (!currentSet) {
        res.status(404).send("Tune not found");
        return;
      }
      res.json(currentTune);
    };
    const updateSet = async(req, res) => {
      const { id } = req.params;
      const set = req.body;
      await dao.updateSet(id, set);
      res.sendStatus(204);
    };
    const deleteSet = async(req, res) => {
      const { id } = req.params;
      await dao.deleteSet(id);
      res.sendStatus(204);
    };
    const createSet = async(req, res) => {
      const set = req.body;
      const newSet = await dao.createSet(set);
      res.send(newSet);
    };
    const getSets = async(req, res) => {
      const sets = await dao.findAllSets();
      res.json(sets);
    };
    const getSetsBy = async(req, res) => {
      console.log("Here");
      const {name} = req.params;
      const sets = await dao.findAllSetsByAuthor(name);
      res.json(sets)
    };
    const getSetsContaining = async(req, res) => {
      const {sessionId} = req.params;
      const sets = await dao.findAllSetsContaining(sessionId);
      res.json(sets)
    };
  
    app.get("/api/sets/all/:id", findSet);

    app.get("/api/sets/author/:name", getSetsBy);

    app.get("/api/sets/tune/:sessionId", getSetsContaining);
  
    app.put("/api/sets/:id", updateSet);
  
    app.delete("/api/sets/:id", deleteSet);
  
    app.post("/api/sets", createSet);
  
    app.get("/api/sets", getSets);
  }
  