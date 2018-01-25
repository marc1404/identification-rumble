import * as dotenv from 'dotenv';

try {
    dotenv.config();
} catch (error) {}

import * as http from 'http';
import * as socketIO from 'socket.io';
import { IncomingMessage, ServerResponse } from 'http';
import connectionHandler from './connectionHandler';

const server = http.createServer(serverHandler);
const io = socketIO(server, { serveClient: false });
const port = process.env.PORT || 3001;

io.on('connection', socket => connectionHandler.handle(socket));
server.listen(port);
console.log('Listening on port 3001');

function serverHandler(request: IncomingMessage, response: ServerResponse) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Request-Method', '*');
    response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    response.setHeader('Access-Control-Allow-Headers', '*');

    if (request.method === 'OPTIONS') {
        response.writeHead(200);
        response.end();
        return;
    }
}
