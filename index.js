import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    // console.log(req);
    const path = req.url;
    console.log(path);

    switch(path){
        // home route
        case'/':
            try {
                const data = fs.readFileSync("home.html");
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data.toString());
            } catch (err) {
                console.error(err);
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end("Internal Server Error");
            }
            break;
            // About Route
        case '/about':
            res.writeHead(200, {'Content-Type' : 'text/plain'});
            res.end("About Page");
            break;
            // default case to handle unknown routes
        default:
            res.writeHead(404, {'Content-Type' : 'text/plain'});
            res.end("404 Not Found");
            break;
    }
    // Link  >>> http://localhost:3000/
}).listen(process.env.PORT || 3000);