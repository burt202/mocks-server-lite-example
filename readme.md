# Mocks Server Lite Example

This example repo shows how you can use [mocks-server-lite](https://github.com/burt202/mocks-server-lite) to help create a mock backend to aide with local development and E2E test runs. This example uses [NextJS](https://nextjs.org/) and [Playwright](https://playwright.dev/)

### To Install

- `npm ci`
- `npx playwright install chromium`
- `npx playwright install-deps`

### To Run

- Create a `.env` and add the following

```
APP_URL='http://localhost:3000'
NEXT_PUBLIC_API_URL='http://localhost:3101'
NEXT_PUBLIC_CHAT_SOCKET_URL='ws://localhost:3101/chat'
```

**App**

`npm run dev`

**Mocks**

`npm run mocks`

**Tests**

`npm run test:e2e`
