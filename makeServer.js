const http = require("http");

function dataControl(req, resp) {
    resp.write("<h1>Shashank Patil</h1>");
    resp.end();
}

// function as a parameter
http.createServer(dataControl).listen(4500);
