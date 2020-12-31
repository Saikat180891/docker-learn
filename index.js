const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res, next) => {
  res.send("Hello");
});
app.listen(5500, () => {
  console.log("Server started");
});
