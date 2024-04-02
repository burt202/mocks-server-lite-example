import {test, expect} from "@playwright/test"

import {setMockCollection} from "./utils"

test("login success", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/")

  await page.fill('input[type="text"]', "some@account")
  await page.fill('input[type="password"]', "somepassword")
  await page.getByRole("button").click()

  await expect(page.getByTestId("login-response")).toHaveText("Ok!")
})

test("login error", async ({page}) => {
  await setMockCollection("login-error")

  await page.goto("/")

  await page.fill('input[type="text"]', "some@account")
  await page.fill('input[type="password"]', "invalid")
  await page.getByRole("button").click()

  await expect(page.getByTestId("login-response")).toHaveText(
    "Invalid credentials",
  )
})
