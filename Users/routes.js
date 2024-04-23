import * as dao from "./dao.js";
let currentUser = {name:"nobody"};

export default function UserRoutes(app) {

    const signup = async (req, res) => {
      const user = await dao.findUserByUsername(req.body.username);
      if (user) {
        res.status(400).json(
          { message: "Username already taken" });
      }
      currentUser = await dao.createUser(req.body);
      res.json(currentUser);
    };

    const signin = async (req, res) => {
    const { username, password } = req.body;
    currentUser = await dao.findUserByCredentials(username, password);
    res.json(currentUser);
    };

    const signout = (req, res) => {
      currentUser = {name:"nobody"};
      res.sendStatus(200);
    };

    const profile = async (req, res) => {
      res.json(currentUser);
    };  

    const findUser = async(req, res) => {
      const {id} = req.params;
      const currentUser = await dao.findUserById(id);
      if (!currentUser) {
        res.status(404).send("Tune not found");
        return;
      }
      res.json(currentTune);
    };

    const updateUser = async (req, res) => {
      const { userId } = req.params;
      const status = await dao.updateUser(userId, req.body);
      currentUser = await dao.findUserById(userId);
      res.json(status);
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

    app.post("/api/users/profile", profile);

    app.post("/api/users/signin", signin);
  
    app.put("/api/users/:userId", updateUser);
  
    app.delete("/api/users/:id", deleteUser);
  
    app.post("/api/users/signup", signup);

    app.post("/api/users/signout", signout);
  
    app.get("/api/users", getUsers);
  }
  