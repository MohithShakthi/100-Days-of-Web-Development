let fs = require("fs");
fs.readFile("./textmessage.txt","ascii",(err,text)=>{
    if(err) throw err;
    console.log(text);
})