import React from 'react'

import {
  axios,
  actionsCondition,
  dispatchActions,
  dispatchActionsWithApi
} from 'fasti-redux'
import 'fasti-redux/dist/index.css'

const App = () => {
  return (
    <>
      {console.log({
        actionsCondition,
        dispatchActions,
        dispatchActionsWithApi
      })}
    </>
  )
}

export default App
