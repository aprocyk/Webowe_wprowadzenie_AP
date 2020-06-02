"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var websocket = __importStar(require("ws"));
var server = http.createServer(function (req, res) {
    res.end("I'm connected");
});
var socket = new websocket.Server({ server: server });
socket.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('Client: %s', message);
    });
    ws.send('Connected to the server.');
});
server.listen(8080);
