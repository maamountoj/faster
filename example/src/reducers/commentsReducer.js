import { actionsCondition } from 'fasti-redux'
import * as actions from '../actions/commentsActions'
/* 
export const initialState = {
  loadingGetComments: false,
  comments: []
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.START_LOADING_GET_COMMENTS:
      return { ...state, loadingGetComments: true }
    case actions.GET_COMMENTS:
      return { comments: action.payload, loading: false }
    case actions.STOP_LOADING_GET_COMMENTS:
      return { ...state, loadingGetComments: false }
    default:
      return state
  }
} */
/* ***************** Post Reducer ***************/

const commentsReducer = actionsCondition([
  { key: 'getCommenst', stateKey: 'comments', initStateKey: [] }
])

export default commentsReducer
/* export const initialState = {
  loading: false,
  hasErrors: false,
  comments: []
}

export default function commentsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_COMMENTS:
      return { ...state, loading: true }
    case actions.GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        hasErrors: false
      }
    case actions.GET_COMMENTS_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
} */
