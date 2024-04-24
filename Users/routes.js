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
      const {name} = req.params;
      const currentUser = await dao.findUserByUsername(name);
      if (!currentUser) {
        res.status(404).send("User not found");
        return;
      }
      res.json(currentUser);
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
    const getUsers = async(req, res) => {
      const users = await dao.findAllUsers();
      res.json(users);
    };
  
    app.get("/api/users/:name", findUser);

    app.post("/api/users/profile", profile);

    app.post("/api/users/signin", signin);
  
    app.put("/api/users/:userId", updateUser);
  
    app.delete("/api/users/:id", deleteUser);
  
    app.post("/api/users/signup", signup);

    app.post("/api/users/signout", signout);
  
    app.get("/api/users", getUsers);
  }
  