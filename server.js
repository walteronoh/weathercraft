const { createServer } = require("http");
const next = require("next");
const { parse } = require("url");

const isDevMode = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? process.env.PORT : 3000;

const nextjsApp = next({ dev: isDevMode });
const nextjsRequestHandler = nextjsApp.getRequestHandler();

nextjsApp.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname } = parsedUrl;
        nextjsRequestHandler(req, res, parsedUrl);
        console.log("pathname", pathname);
    }).listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});