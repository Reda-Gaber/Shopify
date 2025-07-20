const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;

const homeRouter = require("./routes/home.route")

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "images")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/", homeRouter);

app.listen(PORT, (err) => {
    console.log(err ? err : `server listen on port ${PORT}`)
})