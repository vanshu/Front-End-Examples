// content of index.js
var http = require('http')
const port = 3000

const requestHandler = (request, response) => {
    response.end('Hello Node.js Server!'+request.url)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log('server is listening on ${port}')
})