import express from "express";

const d = new Date('2001-11-11')
const day = d.getDay();
const weekDays = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
console.log(day);
console.log(weekDays[day]);

let app = express();
let port = 3000;

app.get("/", (req, res) => {
    if(day === 0 || day === 6){
        res.render("index.ejs", {
            dayType: "a Week-End",
            advice: "its time to Enjoy",
        });
    }
    else {
        res.render("index.ejs", {
            dayType: "a Weekday",
            advice: "its time to work hard",
        });
    }
});

app.listen(port, () => {
    console.log(`Server Running on port: ${port}`);
});

