import {WebSocketHandler} from "mocks-server-lite"

const chat: WebSocketHandler = {
  id: "chat",
  path: "/chat",
  handler: (wss, {logEvent}) => {
    wss.on("connection", function connection(ws) {
      logEvent("connected")

      setTimeout(() => {
        logEvent("messageSent")
        ws.send(JSON.stringify({message: "Hello world!"}))
      }, 2500)
    })
  },
}

const webSockets = [chat]

export default webSockets
