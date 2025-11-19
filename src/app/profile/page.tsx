"use client"

import {useState} from "react"

import {config} from "../../config"
import {SuccessResponse} from "../../types"

const Profile = () => {
  const [response, setResponse] = useState<string | null>(null)

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const files = e.target.files
          if (!files) return

          const formData = new FormData()
          formData.append("file", files[0])

          fetch(`${config.apiUrl}/api/profile`, {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((res: SuccessResponse) => {
              setResponse(res.result)
            })
            .catch(() => {
              console.error("Error")
            })
        }}
      />
      {response && <p data-testid="upload-response">{response}</p>}
    </div>
  )
}

export default Profile
