require("dotenv").config();
const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const { userRouter } = require("./Routers/routes/userRouter");
const { projectRouter } = require("./Routers/routes/projectRouter");

app.use("/user", userRouter);
app.use("/projects", projectRouter);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});