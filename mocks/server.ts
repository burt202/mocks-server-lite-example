import {createServer} from "mocks-server-lite"

import collections from "./collections"
import routes from "./routes"
import staticPaths from "./staticPaths"
import webSockets from "./webSockets"

const server = createServer({
  delay: 1000,
  selected: process.env.SELECTED_MOCKS_COLLECTION ?? "base",
  port: 3101,
})

void server.start({routes, collections, webSockets, staticPaths})
