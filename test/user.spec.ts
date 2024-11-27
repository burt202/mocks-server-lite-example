import {expect, test} from "@playwright/test"

import {setMockCollection} from "./utils"

test("user page", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/user/3")

  await expect(page.getByTestId("user-response")).toHaveText("Tommy")

  await page.goto("/user/5")

  await expect(page.getByTestId("user-response")).toHaveText("Not found")
})
