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
