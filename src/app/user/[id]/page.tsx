import {config} from "../../../config"
import {User} from "../../../types"

const UserPage = async ({params}: {params: {id: string}}) => {
  const res = await fetch(`${config.apiUrl}/api/user/${params.id}`, {
    cache: "no-store",
  })
  const json = (await res.json()) as User | object

  return (
    <div>
      <p data-testid="user-response">
        {"name" in json ? json.name : "Not found"}
      </p>
    </div>
  )
}

export default UserPage
