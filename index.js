//const something = require("soemthing")
const express = require("express");
const app = express();
require("dotenv").config();
app.use((req, res, next) => {
  if (req.method === "GET") {
    next();
  } else {
    // console.error(err.stack);
    res.status(400).json({ msg: "soemting went to wrong" });
  }
});
app.get("/shivam", (req, res) => {
  res.send("everything is ok");
});
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
