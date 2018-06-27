const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// initialize routes
app.use("/api", require("./routes"));

// error handling middleware
app.use(function(err, req, res, next) {
  console.log(err); // to see properties of message in our console
  res.status(422).send({ error: err.message });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("Server start on port....", port);
});
