const { project } = require("../db");

const getAllProject = (req, res) => {
  res.send(project);
};

const getProject = (req, res) => {
  const foundProject = project.filter((elem) => req.params.type == elem.type);
  if (foundProject) res.send(foundProject);
};

const addNewProject = (req, res) => {
  const addedProject = {
    name: req.body.name,
    type: req.body.type,
    desc: req.body.desc,
    teamNeeded: req.body.teamNeeded,
    level: req.body.level,
  };
  project.push(addedProject);
  res.status(201).send(addedProject);
};

const updateProject = (req, res) => {
  const projectId = req.query.id;
  project.forEach((elem, i) => {
    if (i == projectId) {
      elem.name = req.body.name;
      elem.type = req.body.type;
      elem.desc = req.body.desc;
      elem.teamNeeded = req.body.teamNeeded;
      elem.level = req.body.level;
    }
  });
};

const deleteProject = (req, res) => {
  const foundProject = project.filter((elem, i) => {
    return i == req.params.id;
  });
  if (!foundProject) return res.send("This project not found !");
  project.splice(req.params.id, 1);
  res.send(project);
};

module.exports = {
  getAllProject,
  getProject,
  updateProject,
  addNewProject,
  deleteProject,
};
