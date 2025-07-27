import {type WebSocketHandler} from "mocks-server-lite"

const chat: WebSocketHandler = {
  id: "chat",
  path: "/chat",
  handler: (ws, {selectedCollection}) => {
    if (selectedCollection === "login-error") {
      setTimeout(() => {
        ws.send(
          JSON.stringify({
            message: "Login error collection!",
          }),
        )
      }, 2500)
    } else {
      setTimeout(() => {
        ws.send(
          JSON.stringify({
            message: "Hello world!",
          }),
        )
      }, 2500)
    }
  },
}

const webSockets = [chat]

export default webSockets
