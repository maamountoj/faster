import { dispatchActionsWithApi } from 'fasti-redux'

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
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
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
const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const API_POSTS_UPDATE_URL = 'https://jsonplaceholder.typicode.com/posts/[id]'
export const {
  getPostsAction,
  addPostAction,
  updatePostAction
} = dispatchActionsWithApi([
  {
    name: 'getPosts',
    url: API_POSTS_URL,
    method: 'get'
  },
  {
    name: 'addPost',
    url: API_POSTS_URL,
    method: 'POST',
    setPayload: ({ data, res }) => {
      console.log('data', { data, res })
      res.data.title = 'test'
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
