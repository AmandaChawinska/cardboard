import { AxiosRequestConfig, AxiosError } from 'axios'
import { apiClient } from './client'

export const get = async <ResponseData>(
  url: string,
  config?: AxiosRequestConfig
): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.get<ResponseData>(url, config)
    return data
  } catch (err) {
    if (err instanceof AxiosError) {
      // Handle AxiosError-specific properties if needed
      throw new Error(err.message)
    } else {
      // Handle other error types here
      throw err
    }
  }
}

export const post = async <Payload, ResponseData>(
  url: string,
  body: Payload,
  config?: AxiosRequestConfig
): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.post<ResponseData>(url, body, config)
    return data
  } catch (err) {
    if (err instanceof AxiosError) {
      // Handle AxiosError-specific properties if needed
      throw new Error(err.message)
    } else {
      // Handle other error types here
      throw err
    }
  }
}

export const put = async <Payload, ResponseData>(
  url: string,
  body: Payload,
  config?: AxiosRequestConfig
): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.put<ResponseData>(url, body, config)
    return data
  } catch (err) {
    if (err instanceof AxiosError) {
      // Handle AxiosError-specific properties if needed
      throw new Error(err.message)
    } else {
      // Handle other error types here
      throw err
    }
  }
}

export const del = async <ResponseData>(url: string): Promise<ResponseData> => {
  try {
    const { data } = await apiClient.delete<ResponseData>(url)
    return data
  } catch (err) {
    if (err instanceof AxiosError) {
      // Handle AxiosError-specific properties if needed
      throw new Error(err.message)
    } else {
      // Handle other error types here
      throw err
    }
  }
}
