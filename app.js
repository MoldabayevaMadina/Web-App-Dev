const http = require("http");

const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.APP_MESSAGE || "Hello from Docker!";

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Docker App</title>
        </head>
        <body>
            <h1>${MESSAGE}</h1>
            <p>Simple Node.js application running inside Docker.</p>
        </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
});