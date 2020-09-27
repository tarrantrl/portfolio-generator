// require file system
const fs = require("fs");
const generatePage = require("./src/page-template");

const profileDataArgs = process.argv.slice(2, process.argv.length); // slice does not include last index, so don't say length-1

const [name, github] = profileDataArgs;

fs.writeFile("./index.html", generatePage(name, github), err => {
    if (err) throw new Error(err);
    console.log('Portfolio complete! Check out index.html to see the output!');
});