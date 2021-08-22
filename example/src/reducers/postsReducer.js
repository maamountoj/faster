import { actionsCondition } from 'easy-redux'

/* *** without easy-redux *** */
/* import * as actions from '../actions/commentsActions'

export const initialState = {
  data: [],
  errorAddPost: "",
  errorGetPosts: "",
  loadingAddPost: true,
  loadingGetPosts: false
}

export default function postsReducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING_GET_POSTS:
      return { ...state, loadingGetPosts: true }
    case GET_POSTS:
      return {  ...state,posts: action.payload }
    case STOP_LOADING_GET_POSTS:
      return { ...state, loadingGetPosts: false }
    case ERROR_GET_POSTS:
      return { ...state, errorGetPosts: action.payload }
    case START_LOADING_ADD_POST:
      return { ...state, loadingAddPost: true }
    case ADD_POST:
      return {  ...state,data: [...state.data ,action.payload] }
    case STOP_LOADING_ADD_POST:
      return { ...state, loadingAddPost: false }
    case ERROR_ADD_POST:
      return { ...state, errorAddPost: action.payload }
    default:
      return state
  }
} */
/* *** with easy-redux *** */

/* ***************** Posts Reducer ***************/

const postsReducer = actionsCondition([
  {
    key: 'getPosts',
    stateKey: 'posts',
    initStateKey: [],
    anotherActions: [
      {
        key: 'updatePost',
        setState: (posts, action) => {
          console.log({ posts, action })
          return [
            ...posts?.data.map((post) =>
              post.id === action.payload.id ? action.payload : post
            )
          ]
        }
      },
      {
        key: 'deletePost',
        setState: (posts, action) => {
          console.log({ posts, action })
          return [...posts?.data.filter((post) => post.id !== action.payload)]
        }
      },
      {
        key: 'addPost',
        setState: (posts, action) => {
          console.log({ posts, action })
          return [action.payload, ...posts?.data]
        }
      }
    ]
  }
])

export default postsReducer
