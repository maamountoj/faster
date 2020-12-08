import { actionsCondition } from 'fasti-redux'

/* ***************** Authentication Reducer ***************/

const authReducer = actionsCondition([
  {
    key: 'login',
    stateKey: 'user',
    initStateKey: {}
  },
  {
    key: 'getComments',
    stateKey: 'comments',
    initStateKey: []
  }
])

export default authReducer
