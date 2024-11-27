import {expect, test} from "@playwright/test"
import path from "path"

import {setMockCollection} from "./utils"

test("profile pic upload", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/profile")

  const fileChooserPromise = page.waitForEvent("filechooser")
  await page.locator('input[type="file"]').click()
  const fileChooser = await fileChooserPromise
  await fileChooser.setFiles(path.join(__dirname, "./fixtures/800KB.pdf"))

  await expect(page.getByTestId("upload-response")).toHaveText("Uploaded!")
})
