const app = require("./app");
const mongoose = require("mongoose");

// Connected mongoDB
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log("MongoDB Err =>", err));

// Create a sever port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
