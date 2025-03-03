import {API_URL} from "../playwright.config"

export const setMockCollection = async (name: string) => {
  await fetch(`${API_URL}/__set-collection`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      collection: name,
    }),
  })
}

export const sendWebSocketMessage = async <T>(id: string, message: T) => {
  await fetch(`${API_URL}/__send-ws-message`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      message,
    }),
  })
}
