import express from "express";
import morgan from "morgan";
let app = express();
let port = 3000;

app.use(morgan("tiny"));

app.listen(port , () => {
  console.log(`listning on port: ${port}`);
})

app.get("/", (req , res ) => {
  res.send("<h1>Hello</h1>");
})
