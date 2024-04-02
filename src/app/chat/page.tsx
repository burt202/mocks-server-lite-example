"use client"

import {config} from "../../config"
import useWebSocket from "./useWebSocket"

function Chat() {
  const {isConnected, message} = useWebSocket<{message: string}>(
    config.chatSocketUrl,
  )

  return (
    <div>
      {isConnected ? <p>Connected to WebSocket</p> : <p>Connecting...</p>}
      {message && (
        <p data-testid="socket-response">Received: {message.message}</p>
      )}
    </div>
  )
}

export default Chat
