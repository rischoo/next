export interface LoginRequest {
  email: string
  password: string
}

export interface AuthData {
  email: string
  username: string
  tokenSession: string
  loginTimeStamp: Date | null
}
