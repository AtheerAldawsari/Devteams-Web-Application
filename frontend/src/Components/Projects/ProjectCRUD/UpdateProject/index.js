import { useNavigate, useParams } from "react-router";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function UpdateProject({ projects, updateProject, dark }) {
  const [teamNeeded, setTeamNeeded] = useState("");
  const [isError, setIsError] = useState(false);
  const [location, setLocation] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [level, setLevel] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [desc, setDesc] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const currentProject = projects.find(
    (project) => project.id === parseInt(id)
  );

  useEffect(() => {
    setTeamNeeded(currentProject.teamNeeded);
    setLocation(currentProject.location);
    setLevel(currentProject.level);
    setName(currentProject.name);
    setType(currentProject.type);
    setDesc(currentProject.desc);
  }, [currentProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkProjectNameExists = projects.filter((project) =>
      project.name === name && project.id !== currentProject.id ? project : null
    );
    if (!type || !name || !desc || !teamNeeded || !level || !location) {
      return toast.warning("Please fill in all fields!!");
    }
    if (checkProjectNameExists.length > 0) {
      return toast.error("This project name already exists!!");
    }
    const data = {
      id: currentProject.id,
      desc,
      name,
      level,
      teamNeeded,
      location,
      type,
    };
    updateProject(data);
    toast.success("Project updated successfully!!");
    navigate("/myprojects");
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xs"
        sx={{ paddingTop: "45px", paddingBottom: "83px" }}
      >
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              color: dark ? "#00468B" : "white",
              fontFamily: "Comfortaa",
              fontWeight: "800",
              fontSize: "40px",
              marginBottom: "30px",
            }}
            component="h1"
            variant="h5"
          >
            Update Project
          </Typography>
          <Box
            sx={{ width: 500, maxWidth: "100%" }}
            onSubmit={(e) => {
              if (isEmpty) {
                e.preventDefault();
                setIsEmpty(true);
                setIsError(true);
              } else {
                setIsEmpty(false);
              }
            }}
          >
            {currentProject ? (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      value={name}
                      variant="filled"
                      fullWidth
                      label="Project name"
                      error={isError}
                      required
                      autoFocus
                      onChange={(e) => {
                        setName(e.target.value);
                        if (name.length !== 0) {
                          setIsEmpty(false);
                        }
                      }}
                      sx={{
                        bgcolor: dark ? "transparent" : "white",
                        borderRadius: 1,
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      variant="filled"
                      value={desc}
                      fullWidth
                      label="Project idea"
                      error={isError}
                      required
                      onChange={(e) => {
                        setDesc(e.target.value);
                        if (desc.length !== 0) {
                          setIsEmpty(false);
                        }
                      }}
                      sx={{
                        bgcolor: dark ? "transparent" : "white",
                        borderRadius: 1,
                      }}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Autocomplete
                      value={type}
                      options={projectsType}
                      onChange={(event, newValue) => {
                        setType(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Project type"
                          variant="filled"
                          sx={{
                            bgcolor: dark ? "transparent" : "white",
                            borderRadius: 1,
                          }}
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Autocomplete
                      value={location}
                      options={cities}
                      onChange={(event, newValue) => {
                        setLocation(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Where are from"
                          variant="filled"
                          sx={{
                            bgcolor: dark ? "transparent" : "white",
                            borderRadius: 1,
                          }}
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Autocomplete
                      value={teamNeeded}
                      options={projectsTeam}
                      onChange={(event, newValue) => {
                        setTeamNeeded(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Number of teammates"
                          variant="filled"
                          sx={{
                            bgcolor: dark ? "transparent" : "white",
                            borderRadius: 1,
                          }}
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <Autocomplete
                      value={level}
                      options={projectsLevel}
                      onChange={(event, newValue) => {
                        setLevel(newValue);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Level of your project"
                          variant="filled"
                          sx={{
                            bgcolor: dark ? "transparent" : "white",
                            borderRadius: 1,
                          }}
                        />
                      )}
                    ></Autocomplete>
                  </Grid>
                </Grid>
                <div className="form-group d-flex align-items-center justify-content-between my-2">
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      ":hover": { bgcolor: "#e4a300" },
                      maxWidth: "180px",
                      maxHeight: "30px",
                      minWidth: "180px",
                      minHeight: "30px",
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#FFB703",
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      ":hover": { bgcolor: "#e4a300" },
                      maxWidth: "180px",
                      maxHeight: "30px",
                      minWidth: "180px",
                      minHeight: "30px",
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#FFB703",
                    }}
                    onClick={() => navigate("/myprojects")}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            ) : (
              <h1 className="text-center">No Project Found</h1>
            )}
          </Box>
        </Box>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  projects: state,
});

const mapDispatchToProps = (dispatch) => ({
  updateProject: (data) => {
    dispatch({ type: "UPDATE_PROJECT", payload: data });
  },
});

const cities = [
  "Riyadh",
  "Jeddah",
  "Mecca",
  "Medina",
  "Ad Dammam",
  "Al Hufuf",
  "Buraydah",
  "Al Hillah",
  "At Taif",
  "Tabuk",
  "Khamis Mushayt",
  "Hail",
  "Al Qatif",
  "Al Mubarraz",
  "Al Kharj",
  "Najran",
  "Yanbu‘",
  "Abha",
  "Arar",
  "Jazan",
  "Sakaka",
  "Al Bahah",
];
const projectsType = [
  "Web Application",
  "Android Application",
  "IOS Application",
  "Security System",
  "UI",
  "UX",
];
const projectsLevel = ["Guru", "Advance", "Intermediate", "Junior", "Newbie"];
const projectsTeam = [1, 2, 3, 4, 5, 6];

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProject);
