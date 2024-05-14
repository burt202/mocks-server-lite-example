import Image from "next/image"

import {config} from "../../config"

const Static = () => {
  return (
    <div>
      <Image
        src={`${config.apiUrl}/assets/test.jpg`}
        width="536"
        height="354"
        alt=""
      />
    </div>
  )
}

export default Static
