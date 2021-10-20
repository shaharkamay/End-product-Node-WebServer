const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/api") {

    }
})

const port = 3000;

server.listen(port, () => {
    console.log("listening on 3000");
})
