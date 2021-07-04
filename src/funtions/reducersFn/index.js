import { has } from 'lodash'
import { handleActions } from 'redux-actions'

export const actionsCondition = (data) => {
  let reducerMap = {}
  let initialState = {}
  data.map(async (val) => {
    const { key, stateKey, initStateKey, setState } = val
    const newVal = key.replace(/[A-Z]/g, (m) => '_' + m).toUpperCase()

    /****** Initial State ******  */

    initialState = {
      ...initialState,
      [stateKey]: {
        ...initialState[stateKey],
        data: initStateKey,
        [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false,
        [`error${key.charAt(0).toUpperCase() + key.slice(1)}`]: ''
      }
    }
    if (has(val, 'anotherActions')) {
      val?.anotherActions.map((value) => {
        initialState = {
          ...initialState,
          [stateKey]: {
            ...initialState[stateKey],
            [`loading${
              value?.key.charAt(0).toUpperCase() + value?.key.slice(1)
            }`]: false,
            [`error${
              value?.key.charAt(0).toUpperCase() + value?.key.slice(1)
            }`]: ''
          }
          // [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false
        }
      })
    }
    /***** End initial State ****** */
    if (has(val, 'anotherActions')) {
      val.anotherActions.map((value) => {
        const newAction = value?.key
          .replace(/[A-Z]/g, (m) => '_' + m)
          .toUpperCase()
        reducerMap = {
          ...reducerMap,
          [newAction]: {
            next: (state, action) => {
              if (has(value, 'setState')) {
                return {
                  ...state,
                  [stateKey]: {
                    ...state[stateKey],
                    data: value?.setState(state[stateKey], action)
                  }
                }
              } else {
                return {
                  ...state,
                  [stateKey]: { ...state[stateKey], data: action?.payload }
                }
              }
            }
          },
          [`START_LOADING_${newAction}`]: {
            next: (state, action) => {
              return {
                ...state,
                [stateKey]: {
                  ...state[stateKey],
                  [`loading${
                    value?.key.charAt(0).toUpperCase() + value?.key.slice(1)
                  }`]: true
                }
                // [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: true
              }
            }
          },
          [`STOP_LOADING_${newAction}`]: {
            next: (state, action) => {
              return {
                ...state,
                [stateKey]: {
                  ...state[stateKey],
                  [`loading${
                    value?.key.charAt(0).toUpperCase() + value?.key.slice(1)
                  }`]: false
                }
                //[`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false
              }
            }
          },
          [`ERROR_${newAction}`]: {
            next: (state, action) => {
              return {
                ...state,
                [stateKey]: {
                  ...state[stateKey],
                  [`error${
                    value?.key.charAt(0).toUpperCase() + value?.key.slice(1)
                  }`]: action.payload
                }
              }
            }
          }
        }
      })
    }
    reducerMap = {
      ...reducerMap,
      [newVal]: {
        next: (state, action) => {
          if (has(val, 'setState')) {
            return {
              ...state,
              [stateKey]: {
                ...state[stateKey],
                data: setState(state[stateKey], action)
              }
            }
          } else {
            return {
              ...state,
              [stateKey]: { ...state[stateKey], data: action?.payload }
            }
          }
        }
      },
      [`START_LOADING_${newVal}`]: {
        next: (state, action) => {
          return {
            ...state,
            [stateKey]: {
              ...state[stateKey],
              [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: true
            }
            // [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: true
          }
        }
      },
      [`STOP_LOADING_${newVal}`]: {
        next: (state, action) => {
          return {
            ...state,
            [stateKey]: {
              ...state[stateKey],
              [`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false
            }
            //[`loading${key.charAt(0).toUpperCase() + key.slice(1)}`]: false
          }
        }
      },
      [`ERROR_${newVal}`]: {
        next: (state, action) => {
          return {
            ...state,
            [stateKey]: {
              ...state[stateKey],
              [`error${
                key.charAt(0).toUpperCase() + key.slice(1)
              }`]: action.payload
            }
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
