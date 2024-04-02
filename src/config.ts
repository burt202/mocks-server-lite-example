import {z} from "zod"

const apiUrl = process.env.NEXT_PUBLIC_API_URL
const chatSocketUrl = process.env.NEXT_PUBLIC_CHAT_SOCKET_URL

const configSchema = z.object({
  apiUrl: z.string(),
  chatSocketUrl: z.string(),
})

export type Config = z.infer<typeof configSchema>

export const config: Config = {
  apiUrl,
  chatSocketUrl,
}

export function validateConfig() {
  configSchema.parse(config)
}
