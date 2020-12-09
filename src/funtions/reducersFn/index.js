import { has } from 'lodash'
import { handleActions } from 'redux-actions'

export const actionsCondition = (data) => {
  let reducerMap = {}
  let initialState = {}
  data.map((val) => {
    const { key, stateKey, initStateKey, fn } = val
    const newVal = key.replace(/[A-Z]/g, (m) => '_' + m).toUpperCase()
    initialState = {
      ...initialState,
      [stateKey]: initStateKey,
      [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false
    }
    reducerMap = {
      ...reducerMap,
      [newVal]: {
        next: (state, action) => {
          if (has(val, 'fn')) {
            return {
              ...state,
              [stateKey]: fn(state, action)
            }
          } else {
            return {
              ...state,
              [stateKey]: action?.payload
            }
          }
        }
      },
      [`START_LOADING_${newVal}`]: {
        next: (state, action) => {
          return {
            ...state,
            [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: true
          }
        }
      },
      [`STOP_LOADING_${newVal}`]: {
        next: (state, action) => {
          return {
            ...state,
            [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false
          }
        }
      }
    }
  })
  return handleActions(reducerMap, initialState)
}
/* export const loadData =(key)=>(state, action) => {
   return { 
        ...state,
        [key]: action.payload
    }
}; */
