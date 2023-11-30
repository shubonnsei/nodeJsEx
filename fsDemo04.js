const fs = require('fs');

let ws = fs.createWriteStream('./test3.txt');

ws.write('Gather ye rose-buds while ye may,\r\n');
ws.write('Old Time is still a-flying;\r\n');
ws.write('And this same flower that smiles today\r\n');
ws.write('Tomorrow will be dying.\r\n');
ws.write('The glorious lamp of heaven, the sun,\r\n');
ws.write("The higher he's a-getting,'\r\n");

ws.end();



