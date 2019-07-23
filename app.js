const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

// Import routes
app.use(bodyParser.json());
const postsRoute = require("./routes/posts");
//MIDDLEWARES

/* app.use("/post", () => {
  console.log("test");
}); */

//mongodb+srv://hamza:<password>@cluster0-dun1p.gcp.mongodb.net/test?retryWrites=true&w=majority
// ROUTES
app.use("/post", postsRoute);
app.get("/", (req, res) => {
  res.send("We are on home");
});
// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});
// Server Listening
app.listen(3000);
