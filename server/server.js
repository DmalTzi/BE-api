require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const database = require("./database");
const userRouter = require("./routes/userRoute")
const blogRouter = require("./routes/blogRoute")
const PORT = 5555;

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api", userRouter)
app.use("/api", blogRouter)

const startServer = async () => {
  try {
    await database.connect();
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
