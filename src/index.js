import {fetchApi, getApi, postApi, putApi, deleteApi } from './funtions/apiFn'
import {dispatchActions,dispatchActionsWithApi} from './funtions/actionsFn'
import {actionsCondition} from './funtions/reducersFn'

/* export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}
  <Ex/>
  </div>
} */
export default {
 test:'test',
 fetchApi, getApi, postApi, putApi, deleteApi,dispatchActions,dispatchActionsWithApi,
 actionsCondition 
} 