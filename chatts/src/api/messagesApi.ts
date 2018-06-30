import * as openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:4001');

function connectToChatRoom() {
     socket.on('connection',()=>console.log("connection created") );
     socket.emit('subscribeToTimer', 1000);
}
export { connectToChatRoom };