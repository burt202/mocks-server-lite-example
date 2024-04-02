import {test, expect} from "@playwright/test"

import {setMockCollection} from "./utils"

test("chat websocket", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/chat")

  await expect(page.getByTestId("socket-response")).toHaveText(
    "Received: Hello world!",
  )
})
