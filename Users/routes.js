import * as dao from "./dao.js";

export default function UserRoutes(app) {

    const findUser = async(req, res) => {
      const {id} = req.params;
      const currentUser = await dao.findUserById(id);
      if (!currentUser) {
        res.status(404).send("Tune not found");
        return;
      }
      res.json(currentTune);
    };
    const updateUser = async(req, res) => {
      const { id } = req.params;
      const user = req.body;
      await dao.updateUser(id, user);
      res.sendStatus(204);
    };
    const deleteUser = async(req, res) => {
      const { id } = req.params;
      await dao.deleteUser(id);
      res.sendStatus(204);
    };
    const createUser = async(req, res) => {
      const user = req.body;
      const newUser = await dao.createUser(user);
      res.send(newUser);
    };
    const getUsers = async(req, res) => {
      const users = await dao.findAllUsers();
      res.json(users);
    };
  
    app.get("/api/users/:id", findUser);
  
    app.put("/api/users/:id", updateUser);
  
    app.delete("/api/users/:id", deleteUser);
  
    app.post("/api/users", createUser);
  
    app.get("/api/users", getUsers);
  }
  