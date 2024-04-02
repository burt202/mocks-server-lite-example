import {Route} from "mocks-server-lite"

const route: Route = {
  id: "get-call-count",
  url: "/api/call-count",
  method: "GET",
  variants: [
    {
      id: "success",
      type: "handler",
      response: (_, res, {callCount}) => {
        res.status(200)
        res.send({callCount})
      },
    },
  ],
}

export default route
