import {type Collection} from "mocks-server-lite"

const collections: Array<Collection> = [
  {
    id: "base",
    routes: [
      "login:success",
      "get-users:success",
      "create-users:success",
      "get-user:dynamic-param",
      "upload-pic:success",
      "get-call-count:success",
    ],
  },
  {
    id: "login-error",
    routes: ["login:error"],
  },
]

export default collections
