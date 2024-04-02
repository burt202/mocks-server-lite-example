export interface User {
  id: number
  name: string
  role: string
}

export interface SuccessResponse {
  result: string
}

export interface ErrorResponse {
  error: string
}

export interface CallCountResponse {
  callCount: number
}
