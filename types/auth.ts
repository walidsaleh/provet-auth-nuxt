export interface LoginFormData {
  email: string
}

export interface LoginFormErrors {
  email: string | undefined
}

export interface SignUpFormData {
  email: string
  password: string
  receiveUpdates: boolean
}

export interface SignUpFormErrors {
  email: string | undefined
  password: string | undefined
}
