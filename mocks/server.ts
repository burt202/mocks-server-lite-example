import {createServer} from "mocks-server-lite"

import collections from "./collections"
import routes from "./routes"
import staticPaths from "./staticPaths"
import webSockets from "./webSockets"

const skipSelectionPrompt = process.env.MSL_SKIP_SELECTION_PROMPT === "true"

void createServer(
  {routes, collections, webSockets, staticPaths},
  {
    delay: 1000,
    selected: process.env.SELECTED_MOCKS_COLLECTION ?? "base",
    port: 3101,
    skipSelectionPrompt,
  },
)
  .then((server) => {
    void server.start()
  })
  .catch(() => {
    console.log("There was an error starting the server")
  })
