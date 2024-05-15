import {StaticPathOptions} from "mocks-server-lite"

const staticPaths: Array<StaticPathOptions> = [
  {
    from: __dirname + "/static",
    to: "/assets",
  },
]

export default staticPaths
