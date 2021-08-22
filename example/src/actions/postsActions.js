import { dispatchActionsWithApi } from 'easy-redux'

/* *** without easy-redux *** */
/* export const GET_POSTS = 'GET POSTS'
export const START_LOADING_GET_POSTS = 'START_LOADING_GET_POSTS'
export const STOP_LOADING_GET_POSTS = 'STOP_LOADING_GET_POSTS'

export const startLoadingPosts = () => ({
  type: START_LOADING_GET_POSTS,
  payload: true
})
export const stopLoadingPosts = () => ({
  type: STOP_LOADING_GET_POSTS,
  payload: true
})
export const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts
})

export function getPostsAction() {
  return async (dispatch) => {
    dispatch(startLoadingPosts())

    try {
      const response = await fetch('http://localhost:7071/posts')
      const data = await response.json()

      dispatch(getPosts(data))
    } catch (error) {
      dispatch(stopLoadingPosts())
    }
    dispatch(stopLoadingPosts())
  }
} */
/* Became To like this */
/* *** with easy-redux *** */
const API_POSTS_URL = 'http://localhost:7071/posts'
const API_POSTS_UPDATE_URL = 'http://localhost:7071/posts/[id]'
export const {
  getPostsAction,
  addPostAction,
  updatePostAction
} = dispatchActionsWithApi([
  {
    name: 'getPosts',
    url: API_POSTS_URL,
    method: 'get',
    setPayload: ({ data, res }) => {
      console.log('data', JSON.stringify(res.data))
      return res.data
    }
  },
  {
    name: 'addPost',
    url: API_POSTS_URL,
    method: 'POST',
    setPayload: ({ data, res }) => {
      console.log('data', { data, res })
      return res.data
    },
    config: {
      headers: {
        'Content-type': 'application/json'
      }
    }
  },
  {
    name: 'updatePost',
    url: API_POSTS_UPDATE_URL,
    method: 'PUT',
    setPayload: ({ data, res }) => {
      console.log('data', { data, res })
      return res.data
    },
    config: {
      headers: {
        'Content-type': 'application/json'
      }
    }
  }
])
