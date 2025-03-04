import {expect, test} from "@playwright/test"

import {sendWebSocketMessage, setMockCollection} from "./utils"

test("chat websocket", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/chat")

  const socketResponses = page.getByTestId("socket-responses")

  await expect(socketResponses).toContainText("Received: Hello world!")
  expect(await socketResponses.locator("p").all()).toHaveLength(1)

  await sendWebSocketMessage("chat", {message: "Triggered message"})

  await expect(socketResponses).toContainText("Received: Triggered message")
  expect(await socketResponses.locator("p").all()).toHaveLength(2)
})
