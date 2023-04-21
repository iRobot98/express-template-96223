require("./src/process.handlers");
const express = require("express");
const fs = require("fs");
const app = express();

const port = process.env.PORT;

app.use(require("./src"));
app.use("/", express.static("views"));

// app.use("/", express.static("assets"));
app.get("/", (req, res) => res.redirect("/Home/"));

app.listen(port, () => console.log(`listening on ${port}`));
