let fs = require("fs");
fs.writeFile("textmessage.txt","hello iam a text message file", (err) =>{
    if(err) throw err;
    console.log("file has been created successfully.");
});