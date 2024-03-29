const express = require("express")
const session = require("express-session")
const bodyparser = require("body-parser")

require('dotenv').config();

const frontendroutes = require("./routes/front-end-routes")

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");



app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "thisismywebsitepleasedonthackme",
}));;

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use("/", frontendroutes);

const port = process.env.PORT || 3000;

app.listen(port);
console.log(`server is running at ${port}`)