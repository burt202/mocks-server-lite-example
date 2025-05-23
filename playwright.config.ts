import {defineConfig, devices} from "@playwright/test"
import dotenv from "dotenv"

dotenv.config()

export const API_URL = process.env.NEXT_PUBLIC_API_URL

export default defineConfig({
  testDir: "./test",
  reporter: "html",
  workers: 1,
  use: {
    baseURL: process.env.APP_URL,
  },
  projects: [
    {
      name: "chromium",
      use: {...devices["Desktop Chrome"]},
    },
  ],
  webServer: [
    {
      command: "MSL_SKIP_SELECTION_PROMPT=true npm run mocks",
      url: "http://localhost:3101",
    },
    {
      command: "npm run start",
      url: "http://localhost:3000",
    },
  ],
})
