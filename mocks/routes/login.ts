import {type Route} from "mocks-server-lite"

import {ErrorResponse, SuccessResponse} from "../../src/types"

const SUCCESS: SuccessResponse = {result: "Ok!"}
const ERROR: ErrorResponse = {error: "Invalid credentials"}

const route: Route = {
  id: "login",
  url: "/api/login",
  method: "POST",
  variants: [
    {
      id: "success",
      type: "json",
      response: {
        status: 200,
        body: SUCCESS,
      },
    },
    {
      id: "error",
      type: "json",
      response: {
        status: 400,
        body: ERROR,
      },
    },
  ],
}

export default route
