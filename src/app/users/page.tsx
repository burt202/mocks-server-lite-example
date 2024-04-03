import {config} from "../../config"
import {User} from "../../types"
import UsersList from "./UsersList"

const Users = async () => {
  const res = await fetch(`${config.apiUrl}/api/users`, {
    cache: "no-store",
  })
  const users = (await res.json()) as Array<User>

  return <UsersList users={users} />
}

export const dynamic = "force-dynamic"

export default Users
