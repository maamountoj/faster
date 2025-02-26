import { dispatchActionsWithApi } from 'faster-create-redux'

/* Became To like this */
/* *** with faster-create-redux *** */
const API_POST_BY_ID_URL = `http://localhost:7071/posts/[id]`
export const { getPostByIdAction } = dispatchActionsWithApi([
  {
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
    },
    stateKey: 'postById',
    initStateKey: {},
    setState: (post, action) => {
      console.log({ post, action })
      return { ...action.payload }
    }
  }
])

/* *** without faster-create-redux *** */
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
