import React from "react";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import "./userProjects.css";

const UserProjects = ({ projects, deleteProject, dark }) => {
  const navigate = useNavigate();

  return (
    <>
      <div style={{ paddingTop: "200px" }}>
        <div
          className="container col-md-12 mx-auto "
          style={{
            paddingTop: "70px",
            paddingBottom: "70px",
            marginBottom: "200px",
          }}
        >
          <h1
            className="text-center py-3 display-2"
            style={{
              color: dark ? "#00468B" : "white",
              fontSize: "40px",
              fontWeight: "600",
            }}
          >
            My Projects
          </h1>

          <div className="row d-flex flex-column">
            <div>
              <table className="table table-hover">
                <thead
                  className="table-header"
                  style={{
                    backgroundColor: dark ? "#00468b" : "white",
                    color: dark ? "white" : "#00468B",
                  }}
                >
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Type</th>
                    <th scope="col">Description</th>
                    <th scope="col">Location</th>
                    <th scope="col">Team Needed</th>
                    <th scope="col">Level</th>
                    <th scope="col">Edit/Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.length > 0 ? (
                    projects.map((project, id) => (
                      <tr key={id} className="table-row">
                        <td>{id + 1}</td>
                        <td>{project.name}</td>
                        <td>{project.type}</td>
                        <td>{project.desc}</td>
                        <td>{project.location}</td>
                        <td>{project.teamNeeded}</td>
                        <td>{project.level}</td>
                        <td>
                          <Tooltip title="Edit">
                            <IconButton
                              onClick={() =>
                                navigate(`/myprojects/edit/${project.id}`)
                              }
                            >
                              <EditIcon />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete">
                            <IconButton
                              onClick={() => deleteProject(project.id)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="table-row">
                      <th colspan="8">No projects found</th>
                    </tr>
                  )}
                </tbody>
                <tfoot className="table-footer">
                  <tr>
                    <td colspan="8">
                      <Link
                        to="/myprojects/add"
                        style={{
                          textDecoration: "none",
                          width: 800,
                        }}
                      >
                        Add New Project
                      </Link>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  projects: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProject: (id) => {
    dispatch({ type: "DELETE_PROJECT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProjects);
