import { dispatchActionsWithApi } from 'easy-redux'

/* *** without easy-redux *** */
/* export const GET_POST = 'GET POST'
export const START_LOADING_GET_POST = 'START_LOADING_GET_POST'
export const STOP_LOADING_GET_POST = 'STOP_LOADING_GET_POST'

export const startLoadingPost = () => ({
  type: START_LOADING_GET_POST,
  payload: true
})
export const stopLoadingPost = () => ({
  type: STOP_LOADING_GET_POST,
  payload: false
})
export const getPost = (post) => ({
  type: GET_POST,
  payload: post
})

export function getPostAction(id) {
  return async (dispatch) => {
    dispatch(startLoadingPost())

    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      )
      const data = await response.json()

      dispatch(getPost(data))
    } catch (error) {
      dispatch(stopLoadingPost())
    }
    dispatch(stopLoadingPost())
  }
} */
/* Became To like this */
/* *** with easy-redux *** */
const API_POST_BY_ID_URL = `http://localhost:7071/posts/[id]`
export const { getPostByIdAction } = dispatchActionsWithApi([
  {
    action: {
      name: 'getPostById',
      url: API_POST_BY_ID_URL,
      method: 'get',
      config: {
        headers: {
          //Authorization: 'Your Token' // if you have token
        }
      },
      setPayload: ({ data, res }) => {
        console.log('data', JSON.stringify(res.data))
        return res.data
      }
    },
    reducer: {
      stateKey: 'postById',
      initStateKey: {},
      setState: (post, action) => {
        console.log({ post, action })
        return { ...action.payload }
      }
    }
  }
])
