import {Route, RouteVariantHandler} from "mocks-server-lite"

import {User} from "../../src/types"

export const USERS: Array<User> = [
  {
    id: 1,
    name: "John Doe",
    role: "admin",
  },
  {
    id: 2,
    name: "Jane Doe",
    role: "user",
  },
  {
    id: 3,
    name: "Tommy",
    role: "user",
  },
  {
    id: 4,
    name: "Timmy",
    role: "user",
  },
]

const get: RouteVariantHandler<object, object, {role: string}> = {
  id: "success",
  type: "handler",
  response: (req, res) => {
    if (req.query.role) {
      const filtered = USERS.filter((u) => {
        return u.role === req.query.role
      })

      res.status(200)
      res.send(filtered)
      return
    }

    res.status(200)
    res.send(USERS)
  },
}

export const getUsers: Route = {
  id: "get-users",
  url: "/api/users",
  method: "GET",
  variants: [get],
}

const create: RouteVariantHandler<object, {name: string; role: string}> = {
  id: "success",
  type: "handler",
  response: (req, res) => {
    const {name, role} = req.body

    res.status(200)
    res.send({name, role})
  },
}

export const createUser: Route = {
  id: "create-users",
  url: "/api/users",
  method: "POST",
  variants: [create],
}
