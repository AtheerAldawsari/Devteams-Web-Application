const { user } = require("../db");

const getAllUser = (req, res) => {
  res.send(user);
};

const getUser = (req, res) => {
  const foundUser = user.find(
    ({ email, password }) =>
      email === req.body.email && password === req.body.password
  );
  if (!foundUser) {
    return res.status(404).json({
      status: "error",
      error: "no account matching the email and password",
    });
  }
  res.status(201).json({
    status: "succes",
    data: foundUser,
  });
};

const addNewUser = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const addedUser = {
    firstName,
    lastName,
    email,
    password,
  };
  user.push(addedUser);
  if (!addedUser) {
    return res.status(400).json({
      status: "error",
      error: "cannot be empty",
    });
  }
  res.status(201).json({
    status: "succes",
    data: addedUser,
  });
};

const updateUser = (req, res) => {
  const userId = req.query.id;
  user.forEach((elem, i) => {
    if (i == userId) {
      elem.username = req.body.username;
      elem.email = req.body.email;
      elem.password = req.body.password;
    }
  });
};

const deleteUser = (req, res) => {
  const foundUser = user.filter((elem, i) => {
    return i == req.params.id;
  });
  if (!foundUser) {
    return res.status(400).json({
      status: "error",
      error: "This user not found !",
    });
  }
  user.splice(req.params.id, 1);
  res.status(201).json({
    status: "succes",
    data: user,
  });
};

module.exports = { getAllUser, getUser, updateUser, addNewUser, deleteUser };
