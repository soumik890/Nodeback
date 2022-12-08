require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./api/users/user_router");

// app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  // res.send("hello world");
  res.json({ sucess: 1, message: "this is a rest api using json" });
});

app.listen(process.env.APP_PORT, () => {
  console.log(`Server running on ${process.env.APP_PORT}`);
});
