const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    res.write("OK");
    res.end();

}).listen(3000, () => { console.log("Server run at port 3000")});