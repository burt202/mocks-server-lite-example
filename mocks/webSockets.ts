import {type WebSocketHandler} from "mocks-server-lite"

const chat: WebSocketHandler = {
  id: "chat",
  path: "/chat",
  handler: (ws) => {
    setTimeout(() => {
      ws.send(JSON.stringify({message: "Hello world!"}))
    }, 2500)
  },
}

const webSockets = [chat]

export default webSockets
