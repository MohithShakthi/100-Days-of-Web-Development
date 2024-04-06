import express from "express";

let app = express();
let port = 3080;

app.listen(port, () => {
    console.log(`server is running in port:${port}`);
})

app.get("/", (req,res) => {
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", (req,res) => {
    res.send("<h1>Contact Me</h1><p>8859385647</p>");
})
app.get("/about", (req,res) => {
    res.send("<h1>About Me</h1><p>hi iam xyz an aspiring webdeveloper who is looking for a mutually beneficaial carrier in tech</p>");
})