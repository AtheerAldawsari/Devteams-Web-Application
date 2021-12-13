const express = require("express");
const { project } = require("../db");

const projectRouter = express.Router();

const {
  getProject,
  getAllProject,
  updateProject,
  addNewProject,
  deleteProject
} = require("../controllers/project");

projectRouter.get("/", getAllProject);
projectRouter.get("/:type", getProject);
projectRouter.post("/", addNewProject);
projectRouter.put("/:id", updateProject);
projectRouter.delete("/:id", deleteProject);

module.exports = { projectRouter };
