const express = require("express");
const app = express();
const router = express.Router();

app.use(express.static("public"));

const mainRouter = require("./routes/main")

app.use("/", mainRouter);
app.use("/about", mainRouter);


app.listen(3000, () =>{
    console.log("server on port 3000");
});