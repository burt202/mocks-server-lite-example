"use client"

import {useEffect, useState} from "react"

import {config} from "../../config"
import useWebSocket from "./useWebSocket"

function Chat() {
  const [messages, setMessages] = useState<string[]>([])

  const {isConnected, message} = useWebSocket<{message: string}>(
    config.chatSocketUrl,
  )

  useEffect(() => {
    if (message) {
      setMessages((prev) => [...prev, message.message])
    }
  }, [message])

  return (
    <div>
      {isConnected ? <p>Connected to WebSocket</p> : <p>Connecting...</p>}
      <div data-testid="socket-responses">
        {messages.map((m) => {
          return <p key={m}>Received: {m}</p>
        })}
      </div>
    </div>
  )
}

export default Chat
