beforeAll(() => { 
    6     let fs = require("fs"); 
    7     let fileContents = fs.readFileSync("index.html", "utf-8"); 
    8     document.open(); 
    9     document.write(fileContents); 
    10     document.close(); 
    11 }) 
    