import {expect, test} from "@playwright/test"

import {setMockCollection} from "./utils"

test("users list", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/users")

  await expect(page.getByRole("listitem")).toHaveCount(4)
})

test("users list filtered", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/users")

  await page.locator("select").selectOption("admin")

  await expect(page.getByRole("listitem")).toHaveCount(1)
})

test("users list create", async ({page}) => {
  await setMockCollection("base")

  await page.goto("/users")

  await page.fill('input[type="text"]', "ooo")
  await page.getByRole("button").click()

  await expect(page.getByRole("listitem")).toHaveCount(5)

  await expect(
    page.getByRole("listitem").filter({hasText: "ooo"}),
  ).toBeVisible()
})
