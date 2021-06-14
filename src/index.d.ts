/* declare function dispatchActions(input: string | readonly string[]): string

export = dispatchActions */

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  baseURL?: string
  transformRequest?: AxiosTransformer | AxiosTransformer[]
  transformResponse?: AxiosTransformer | AxiosTransformer[]
  headers?: any
  params?: any
  paramsSerializer?: (params: any) => string
  data?: any
  timeout?: number
  timeoutErrorMessage?: string
  withCredentials?: boolean
  adapter?: AxiosAdapter
  auth?: AxiosBasicCredentials
  responseType?: ResponseType
  xsrfCookieName?: string
  xsrfHeaderName?: string
  onUploadProgress?: (progressEvent: any) => void
  onDownloadProgress?: (progressEvent: any) => void
  maxContentLength?: number
  validateStatus?: ((status: number) => boolean) | null
  maxBodyLength?: number
  maxRedirects?: number
  socketPath?: string | null
  httpAgent?: any
  httpsAgent?: any
  proxy?: AxiosProxyConfig | false
  cancelToken?: CancelToken
  decompress?: boolean
}

/**
 * Create actions conditions
 * and check each condition
 *
 * @param key (required) The key (camelCase) of the condition .
 * @param stateKey (required) The name of state .
 * @param initStateKey (required) the value of initial State  for stateKey.
 * @param setState (option) The callback to modify state and return with new value.
 */
export function actionsCondition(
  params: {
    key: string
    stateKey: string
    initStateKey: any
    setState?: (state: any, action: any) => any
  }[]
)
/**
 * Dispatch actions conditions
 * @param name (required) The name (camelCase) of the function action
 * (Required to be the same name of stateKey from actionsCondition)
 * for example : getPost to be getPostAction.
 * @param url (required) The url of api .
 * @param method (required) The method to fetch api.
 * @param api (option) The instance of axios with a custom config
 * @param config (option) The config options for making requests.
 * @param setPayload  (option) The callback to modify payload and return with new value.
 */
export function dispatchActionsWithApi(
  params: {
    api?: any
    name: string
    url: string
    method: string
    config?: AxiosRequestConfig
    setPayload?: (params: { data: any; res: any }) => any
  }[]
)
/**
 * Dispatch actions conditions
 * @param name (required) The name (camelCase) of the function action
 * @param setPayload (option) The callback to modify payload and return with new value.
 */
export function dispatchActions(
  params: {
    name: string
    setPayload?: (data: any) => any
  }[]
)
