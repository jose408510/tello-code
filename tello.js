const dgram = require('dgram');
const await = require('waait');

const PORT = 8889
const HOST = '192.168.10.1'

const drone = dgram.createSocket('udp4');
drone.bind(PORT)

drone.on('message' , msg => {
    console.log( 'Responding to Messages ${message} ' )
})

function handleError(err) {
    if(err) {
        console.log("ERROR")
        console.log(err)
    }
}