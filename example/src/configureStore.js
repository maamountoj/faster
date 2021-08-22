import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'

/* const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
) */

const persistConfig = {
  key: 'root',
  storage: storage
}

const middlewares = [thunkMiddleware]
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = () => {
  let md = applyMiddleware(...middlewares)
  if (process.env.NODE_ENV === 'development') {
    md = composeWithDevTools(applyMiddleware(...middlewares))
  }
  let store = createStore(persistedReducer, md)
  let persistor = persistStore(store)
  return { store, persistor }
}
export default store
