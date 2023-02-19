# cc-tts-websocket
This is a websocket that interfaces with computercraft and uses tts to anounce messages
# Usage
First you need to install the npm packages, say and ws.
You also need to allow access to local ips in computercraft, refer to this link. 
https://tweaked.cc/guide/local_ips.html 
Then run the index.js with node.js
To connect computers you need to have it send an id. The id can be anything.
Here is some example code for a computer
```lua
ws = http.websocket("ws://localhost:8001")
ws.send(os.getComputerID())
```
You also need to send a message that lets the server know that you are done connecting computers.
```lua
ws = http.websocket("ws://localhost:8001")
ws.send(os.getComputerID())
ws.send("__CONNECTIONS_DONE__")
```
Then for the last part you send a message by putting the name and message seperated by |
```lua
ws = http.websocket("ws://localhost:8001")
ws.send(os.getComputerID())
ws.send("1.0|Hello, world!")
```
At the moment you have to restart the server to start connecting computers again.
I will fix this sometime in the future.
