import { actionsCondition } from 'fast-create-redux'

/* *** without fast-create-redux *** */
/* import * as actions from '../actions/commentsActions'

export const initialState = {
  loadingGetPost: false,
  post: {}
}

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case actions.START_LOADING_GET_POST:
      return { ...state, loadingGetPost: true }
    case actions.GET_POST:
      return { post: action.payload, loading: false }
    case actions.STOP_LOADING_GET_POST:
      return { ...state, loadingGetPost: false }
    default:
      return state
  }
} */
/* *** with fast-create-redux *** */
/* ***************** Post Reducer ***************/

const postReducer = actionsCondition([
  {
    key: 'getPostById',
    stateKey: 'postById',
    initStateKey: {},
    setState: (post, action) => {
      console.log({ post, action })
      return { ...action.payload }
    }
  }
])

export default postReducer
