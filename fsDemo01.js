const fs = require('fs');

fs.writeFile('./test.txt', 'Hello World!', (err) => {
    if(err){
        console.log("error");
        return;
    }
    console.log("success");
});

