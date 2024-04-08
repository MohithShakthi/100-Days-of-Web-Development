import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  const data = {
    title: "Enter your name below 👇",
  };
  res.render("index.ejs",data);
});

app.post("/submit", (req, res) => {
  let l1 = req.body.fName.length;
  let l2 = req.body.lName.length;
  let l = l1 + l2;
  const Data = {
    title: `Your name has ${l} letters`,
  };
  res.render("index.ejs", Data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
