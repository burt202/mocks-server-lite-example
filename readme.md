# Mocks Server Lite Example

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
