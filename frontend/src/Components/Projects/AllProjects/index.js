import * as React from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";
import GradeIcon from "@mui/icons-material/Grade";
import CardHeader from "@mui/material/CardHeader";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import Card from "@mui/material/Card";

export default function Projects(props) {
  const [data, setData] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    props.setSearch(true);
    axios.get(`/projects/${type}`).then((res) => {
      console.log(res);
      console.log(res.data.type);
      setData(res.data);
      console.log(data);
    });
  }, []);

  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridRowGap: "50px",
          marginLeft: "150px",
          marginBottom: "100px",
          marginTop: "20px",
        }}
      >
        {data
          .filter((elem) => {
            return elem.name
              .toLowerCase()
              .includes(props.searchTerm.toLowerCase());
          })
          .map((elem) => {
            return (
              <>
                <Card sx={{ maxWidth: 345 }}>
                  <CardHeader
                    avatar={
                      <Avatar src={elem.img} aria-label="recipe"></Avatar>
                    }
                    title={elem.leader}
                    subheader={elem.date}
                  />
                  <hr></hr>
                  <Typography
                    sx={{
                      marginLeft: "15px",
                      color: "#00468B",
                      fontWeight: "600",
                      fontFamily: "Comfortaa, cursive",
                    }}
                    variant="h4"
                    component="div"
                  >
                    {elem.name}
                  </Typography>
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {elem.desc}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <LocationOnIcon
                      sx={{
                        fontSize: "18px",
                        marginRight: "5px",
                        color: "#00468B",
                      }}
                    ></LocationOnIcon>{" "}
                    <Typography sx={{ paddingRight: "15px" }}>
                      {elem.location}
                    </Typography>
                    <GroupsIcon
                      sx={{
                        fontSize: "23px",
                        marginRight: "7px",
                        color: "#00468B",
                      }}
                    ></GroupsIcon>{" "}
                    <Typography sx={{ marginRight: "15px" }}>
                      {elem.teamNeeded}
                    </Typography>
                    <GradeIcon
                      sx={{
                        fontSize: "18px",
                        marginRight: "5px",
                        color: "#00468B",
                      }}
                    ></GradeIcon>{" "}
                    <Typography sx={{ marginRight: "20px" }}>
                      {elem.level}
                    </Typography>
                  </CardActions>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      ":hover": {
                        bgcolor: "#e4a300",
                      },
                      mt: 3,
                      mb: 2,
                      backgroundColor: "#FFB703",
                      marginLeft: "10px",
                      marginRight: "10px",
                      marginBottom: "20px",
                      width: "94%",
                    }}
                    onClick={() => {
                      toast.success("Your request has been sent!!");
                      props.setRequest(props.request + 1);
                    }}
                  >
                    Be a team member
                  </Button>
                </Card>
              </>
            );
          })}
      </div>
    </>
  );
}
