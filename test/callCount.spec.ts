import {test, expect} from "@playwright/test"

import {setMockCollection} from "./utils"

test("call count", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/call-count")

  await expect(page.getByTestId("call-count")).toHaveText("1")

  await page.reload()

  await expect(page.getByTestId("call-count")).toHaveText("2")

  await setMockCollection("base")

  await page.reload()

  await expect(page.getByTestId("call-count")).toHaveText("1")
})
