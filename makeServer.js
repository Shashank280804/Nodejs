 const http = require("http");
// http.createServer((req, resp) => {
//  resp.write("<h1>Shashank Patil</h1>");
//  resp.end();

// }).listen(4500);


function dataControl(req,resp)
{
    resp.write("<h1>Shashank Patil</h1>")
    resp.end();
}
//function as a parameter
http.createServer(datacontrol).listen(4500);