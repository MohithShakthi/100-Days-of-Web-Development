import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

let app = express();
let port = 3000;
app.use(bodyParser.urlencoded({ extended: true}));

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
})

app.get("/" , (req, res ) => {
    res.sendFile(__dirname + "/index.html");
})

app.post("/submit", (req, res) => {
    let passcode = req.body.password;
    console.log(passcode);
    if(passcode === "pokemon"){
        res.sendFile(__dirname + "/secret.html")
    }
    else{
        res.sendFile(__dirname + "/index.html");
    }
})