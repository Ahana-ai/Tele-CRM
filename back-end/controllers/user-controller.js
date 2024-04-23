import user from "../models/user-model.js";

class UserController {
  constructor() {}

  /**
   * @method addUser
   * @description Add Users
   */
  async addUser(req, res) {
    try {
      let isUserExists = await user.findOne({
        email: req.body.email,
      });
      if (isUserExists) {
        res.status(200).json({ msg: "User already exists!" });
        return;
      }

      const data = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
      };

      const newUser = new user(data);
      await newUser.save();
      return res.status(201).json("User created");
    } catch (error) {
      return res
        .status(500)
        .json({ "Server Error! -> addUser": error.message });
    }
  }

  /**
   * @method getUsers
   */
  async getUsers(req, res) {
    try {
      const users = await user.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  /**
   * @method getDetails
   * @description It will return the details of user
   */
  async getDetails(req, res) {
    try {
      const { id } = req.params;

      const isUserExists = await user.findOne({
        _id: id,
      });

      if (!isUserExists) {
        return res.status(404).json({ error: "User Not Found" });
      }

      return res.status(200).json(isUserExists);
    } catch (error) {
      console.log("Error:", error.message);
      return res.status(500).json({ error: "Server Error! --> getId" });
    }
  }
}

export default UserController = new UserController();
