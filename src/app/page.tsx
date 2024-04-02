"use client"

import {useState} from "react"

import {config} from "../config"
import {ErrorResponse, SuccessResponse} from "../types"

const Home = () => {
  const [email, setEmail] = useState<string | null>(null)
  const [password, setPassword] = useState<string | null>(null)
  const [response, setResponse] = useState<string | null>(null)

  return (
    <div>
      <input
        type="text"
        value={email ?? ""}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password ?? ""}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={() => {
          setResponse(null)

          fetch(`${config.apiUrl}/api/login`, {
            method: "POST",
            body: JSON.stringify({email, password}),
          })
            .then((res) => res.json())
            .then((res: SuccessResponse | ErrorResponse) => {
              if ("error" in res) {
                setResponse(res.error)
              } else {
                setResponse(res.result)
              }
            })
            .catch(() => {
              console.log("Error")
            })
        }}
      >
        Login
      </button>
      {response && <p data-testid="login-response">{response}</p>}
    </div>
  )
}

export default Home
