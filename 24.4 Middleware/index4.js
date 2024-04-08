import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended:true}));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
})

app.post("/submit", (req, res) => {
  let fname = req.body.street;
  let lname = req.body.pet;
  let bandName = fname + lname;
  console.log(bandName);
  res.sendFile(__dirname + "/band.html");
  res.send("<h1>THE BAND NAME</h1><p><h1>" + bandName + "</h1></p>");
  res.sendStatus(201);
})