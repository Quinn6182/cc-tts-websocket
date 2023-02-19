const socket = require('ws')
const say = require('say')
const Logger = require('./logger')
var clients = { "connections": {} }
var done = false
const webSocket = new socket.Server({ port: 8001 })
webSocket.on("connection", wsClient => {
    wsClient.on('message', messageData => {
        if (messageData.toString() == "__CONNECTIONS_DONE__") {
            done = true
            say.speak("Connections Finished")
        } else {
            if (clients.connections.hasOwnProperty(messageData.toString()) == false && done == false) {
                Logger.logInfo("Computer " + messageData.toString() + " connected")
                clients.connections[messageData.toString()] = wsClient
                say.speak("Computer : " + messageData.toString() + " Connected")
            } else {
                var messageInfo = messageData.toString().split("|")
                Logger.logInfo("Routing message " + messageInfo[1] + " to " + messageInfo[0] + ".")
                setTimeout(() => { clients.connections[messageInfo[0]].send(messageInfo[1]) }, 1500)
            }
        }
    })
    wsClient.on('close', () => {
        say.speak("Client Disconnected!")
        Logger.logInfo("Client Disconnected!")
    })
})
