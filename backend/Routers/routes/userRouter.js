const express = require("express");
const { user } = require("../db");

const userRouter = express.Router();

const {
  getUser,
  getAllUser,
  updateUser,
  addNewUser,
  deleteUser,
} = require("../controllers/user");

userRouter.get("/", getAllUser);
userRouter.post("/signin", getUser); //login
userRouter.post("/signup", addNewUser); //register
userRouter.put("/", updateUser);
userRouter.delete("/:id", deleteUser);

module.exports = { userRouter };
