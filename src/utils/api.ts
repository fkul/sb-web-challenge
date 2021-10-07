import axios from "axios"

const source = axios.CancelToken.source()

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: process.env.NEXT_PUBLIC_API_TIMEOUT_MS as number | undefined,
  cancelToken: source.token,
})

export const apiCancel = source.cancel
