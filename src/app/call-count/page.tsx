import {config} from "../../config"
import {CallCountResponse} from "../../types"

const CallCount = async () => {
  const res = await fetch(`${config.apiUrl}/api/call-count`, {
    cache: "no-store",
  })
  const json = (await res.json()) as CallCountResponse

  return (
    <div>
      <p data-testid="call-count">{json.callCount}</p>
    </div>
  )
}

export default CallCount
