const HTTP = require('http')

// import custom libary
const CONSTANTS = require('./custom_lib/websocket_constants')
const FUNCTION = require('./custom_lib/websocket_methods')

// create a http web server obj
const HTTP_SERVER = HTTP.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello we are live')
})

// HTTP => start the http serv
HTTP_SERVER.listen(CONSTANTS.PORT, () => {
    console.log('Sever is live on port: ' + CONSTANTS.PORT)
})

// error handling
CONSTANTS.CUSTOM_ERRORS.forEach(errorEvent => {
    process.on(errorEvent, (err) => {
        console.log(`ERROR Event: ${errorEvent} - ${err}`);
        // exit the process
        process.exit(1)
    })
})