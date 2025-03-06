const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 4002;

app.post("/", (req, res) => {
  console.log("req.body", req.body);
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`server started on ${PORT}`);
});
