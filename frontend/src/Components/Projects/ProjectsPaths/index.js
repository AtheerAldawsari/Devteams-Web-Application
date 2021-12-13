import "./projects-path.css";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
export default function ProjectsPath() {
  return (
    <>
      <Toolbar id="back-to-top-anchor" />
      <div className="paths">
        <Link to={"web"} style={{ textDecoration: "none" }}>
          <div className="paths-div"></div>
        </Link>

        <Link to={"android"} style={{ textDecoration: "none" }}>
          <div className="paths-div2"></div>
        </Link>

        <Link to={"ios"} style={{ textDecoration: "none" }}>
          <div className="paths-div3"></div>
        </Link>

        <Link to={"ux"} style={{ textDecoration: "none" }}>
          <div className="paths-div4"></div>
        </Link>

        <Link to={"ui"} style={{ textDecoration: "none" }}>
          <div className="paths-div5"></div>
        </Link>

        <Link to={"security"} style={{ textDecoration: "none" }}>
          <div className="paths-div6"></div>
        </Link>
      </div>
    </>
  );
}
