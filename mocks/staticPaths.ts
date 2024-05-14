import {StaticPathOptions} from "mocks-server-lite"

const webSockets: Array<StaticPathOptions> = [
  {
    from: __dirname + "/static",
    to: "/assets",
  },
]

export default webSockets
