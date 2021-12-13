import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

import con3 from "../../img/icon-instagram.svg";
import con2 from "../../img/icon-facebook.svg";
import con1 from "../../img/icon-twitter.svg";

import "./footer.css";

export default function Footer(props) {
  return (
    <>
      <Box>
        <CssBaseline />
        <Box component="footer" sx={{ py: 3, px: 2, mt: "auto", backgroundColor: props.dark ? "#00468B" : "#062440"}}>
          <Container maxWidth="sm">
            <div className="icons">
              <img src={con1} alt="" width="3.5%" />
              <img src={con2} alt="" width="3.5%" />
              <img src={con3} alt="" width="3.5%" />
            </div>
            <Typography variant="body2" sx={{ color: "white" }} align="center" {...props} >
              {"Copyright © "}
              <Link sx={{ color: "white" }} href="./home">
                Devteams
              </Link>
              {new Date().getFullYear()}
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
}
