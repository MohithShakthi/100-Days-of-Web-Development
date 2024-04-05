import inquirer from "inquirer";

import qr from "qr-image";

import fs from "fs";

inquirer
  .prompt([{
    message:"Typr the URL of your choice:",
    name:"LINK",
  }
  ])
  .then((answers) => {
    let url = answers.LINK;
    var photo = qr.image(url);
    photo.pipe(fs.createWriteStream('qr-code-image.png'));
    writeFile('message.txt',url, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });