import {Route, RouteVariantHandler} from "mocks-server-lite"

import {USERS} from "./users"

const dynamicParam: RouteVariantHandler<{id: string}> = {
  id: "dynamic-param",
  type: "handler",
  response: (req, res) => {
    const user = USERS.find((u) => {
      return u.id === parseInt(req.params.id, 10)
    })

    if (!user) {
      res.status(404)
      res.send({})
      return
    }

    res.status(200)
    res.send(user)
  },
}

const route: Route = {
  id: "get-user",
  url: "/api/user/:id",
  method: "GET",
  variants: [dynamicParam],
}

export default route
