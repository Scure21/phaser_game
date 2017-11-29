const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(
  morgan(":method :url :status :response-time ms - :res[content-length]")
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(3030, () => console.log("listening on port 3030!"));
