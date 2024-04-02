import callCount from "./callCount"
import login from "./login"
import profile from "./profile"
import user from "./user"
import {getUsers, createUser} from "./users"

const routes = [callCount, profile, user, getUsers, createUser, login]

export default routes
