"use client"

import Link from "next/link"
import {useState} from "react"

import {config} from "../../config"
import {User} from "../../types"

interface UsersListProps {
  users: Array<User>
}

const UsersList = (props: UsersListProps) => {
  const [users, setUsers] = useState(props.users)
  const [name, setName] = useState("")
  const [role, setRole] = useState("")

  return (
    <div>
      <select
        value={role}
        onChange={(e) => {
          setRole(e.target.value)

          fetch(`${config.apiUrl}/api/users?role=${e.target.value}`, {
            cache: "no-store",
          })
            .then((res) => res.json())
            .then((res: Array<User>) => {
              setUsers(res)
            })
            .catch(() => {
              console.error("Error")
            })
        }}
      >
        <option value="">All roles</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              <Link href={`/user/${u.id}`}>{u.name}</Link>
            </li>
          )
        })}
      </ul>
      <div>
        <input
          type="text"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => {
            fetch(`${config.apiUrl}/api/users`, {
              method: "POST",
              body: JSON.stringify({name, role: "user"}),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((res) => res.json())
              .then((res: User) => {
                setUsers([...users, res])
              })
              .catch(() => {
                console.error("Error")
              })
          }}
        >
          Add
        </button>
      </div>
    </div>
  )
}

export default UsersList
