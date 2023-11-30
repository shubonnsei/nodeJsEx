const fs = require('fs');

// fs.appendFile('./test.txt', 'Welcome!How you doing!?', (err) => {
//     if(err){
//         console.log("error");
//         return;
//     }
//     console.log("success");
// });

//fs.appendFileSync('./test2.txt', 'Welcome!How you doing!?');

fs.appendFileSync('./test2.txt', '\r\nNoway!?');