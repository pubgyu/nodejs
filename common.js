const fs = require('fs');

console.log('start');

fs.readFile('./new', 'utf8', (error,data) => {
    console.log(data);
})

console.log('finish');