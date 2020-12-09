import { actionsCondition } from 'fasti-redux'

/* ***************** Group Reducer ***************/

const groupReducer = actionsCondition([
  { key: 'getGroups', stateKey: 'groups', initStateKey: [] },
  { key: 'getGroupById', stateKey: 'group', initStateKey: {} }
])

export default groupReducer
