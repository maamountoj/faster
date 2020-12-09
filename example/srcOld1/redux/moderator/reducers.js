import { actionsCondition } from 'fasti-redux'

/* ***************** Moderator Reducer ***************/

const groupReducer = actionsCondition([
  { key: 'getModerators', stateKey: 'moderators', initStateKey: [] }
])

export default groupReducer
