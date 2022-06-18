const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // res.write('welcome to the homepage')
        res.end('welcome to the homepage')
    }
    else if (req.url === '/about') {
        res.write('here is our short history')
        res.end()
    }
    else {
        res.end(`
        <h1> Oops!</h1>
        <p> The page you are looking for does not exist </p>
        <a href="/">Go back to the homepage</a>
    `)
    }
})

server.listen(5000)