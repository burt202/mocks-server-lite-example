import {useEffect, useState} from "react"

const useWebSocket = <T extends object>(url: string) => {
  const [socket, setSocket] = useState<WebSocket | null>(null)
  const [message, setMessage] = useState<T | null>(null)
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffect(() => {
    const ws = new WebSocket(url)

    ws.onopen = () => {
      setIsConnected(true)
    }

    ws.onmessage = (event) => {
      setMessage(JSON.parse(event.data as string) as T)
    }

    ws.onclose = () => {
      setIsConnected(false)
    }

    setSocket(ws)

    return () => {
      if (socket && socket.readyState === 1) {
        ws.close()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  const sendMessage = (msg: T) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(msg))
    } else {
      console.error("WebSocket is not open. Message not sent.")
    }
  }

  return {socket, isConnected, message, sendMessage}
}

export default useWebSocket
