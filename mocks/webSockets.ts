import {WebSocketHandler} from "mocks-server-lite"

const chat: WebSocketHandler = {
  id: "chat",
  path: "/chat",
  handler: (wss) => {
    wss.on("connection", function connection(ws) {
      setTimeout(() => {
        ws.send(JSON.stringify({message: "Hello world!"}))
      }, 2500)
    })
  },
}

const webSockets = [chat]

export default webSockets
