import axios from "axios"

const source = axios.CancelToken.source()

export const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 10000,
  cancelToken: source.token,
})

export const apiCancel = source.cancel
