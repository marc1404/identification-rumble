import * as http from "http";
import * as socketIO from "socket.io";
import Socket = SocketIO.Socket;
import { IncomingMessage, ServerResponse } from "http";

const app = http.createServer(serverHandler);
const io = socketIO(app);
const port = process.env.PORT || 3001;

io.on("connection", connectionHandler);
app.listen(port);
console.log("Listening on port 3001");

function serverHandler(request: IncomingMessage, response: ServerResponse) {
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Request-Method", "*");
    response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    response.setHeader("Access-Control-Allow-Headers", "*");

    if (request.method === "OPTIONS") {
        response.writeHead(200);
        response.end();
        return;
    }
}

function connectionHandler(socket: Socket) {}
