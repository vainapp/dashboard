import { AxiosError } from 'axios'

import { httpServerSide } from './httpClient'

interface SignInParams {
  email: string
  password: string
}

interface RefreshTokenParams {
  refreshToken: string
}

async function signIn({ email, password }: SignInParams): Promise<any> {
  try {
    const { data } = await httpServerSide.post('/employees/sessions', {
      email,
      password,
    })
    return data
  } catch (err) {
    if (err instanceof AxiosError && err.response?.data?.message) {
      throw Error(err.response.data.message)
    }
  }
}

async function refreshToken({
  refreshToken,
}: RefreshTokenParams): Promise<any> {
  try {
    const response = await httpServerSide.post('/employees/sessions/refresh', {
      refresh_token: refreshToken,
    })
    return response.data
  } catch (err) {
    if (err instanceof AxiosError && err.response?.data?.message) {
      throw Error(err.response.data.message)
    }
  }
}

export { signIn, refreshToken }
