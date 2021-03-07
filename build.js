const minify = require('minify');
const fs = require('fs');


fs.mkdirSync("./min");
fs.writeFileSync("min/doomer.min.js", "");

fs.readdir('./src', (err, files) => {
    files.forEach(file => {
        console.log(file);
        minify('./src/' + file).then((str) => {
            fs.appendFileSync("min/doomer.min.js", str);
        })
    });
});
