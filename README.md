# `react-sortablejs`

# fasti-redux

> create reducers and actions quickly with types ('START_LOADING','STOP_LOADING','ERROR') will be create automaticaly

[![NPM](https://img.shields.io/npm/v/fasti-redux.svg)](https://www.npmjs.com/package/fasti-redux) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save easy-redux
npm install --save-dev @types/easy-redux

# OR
yarn add  easy-redux
yarn add -D @types/easy-redux
```

## Create actions with dispatchActions and dispatchActionsWithApi

```jsx
import { dispatchActionsWithApi } from 'fasti-redux'

const API_POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const API_POSTS_UPDATE_URL = 'https://jsonplaceholder.typicode.com/posts/[id]'
export const {
  getPostsAction,
  addPostAction,
  updatePostAction
} = dispatchActionsWithApi([
  {
    name: 'getPosts',
    url: API_POSTS_URL,
    method: 'get'
  },
  {
    name: 'addPost',
    url: API_POSTS_URL,
    method: 'POST',
    setPayload: ({ data, res }) => {
      console.log('data', { data, res })
      res.data.title = 'test'
      return res.data
    },
    config: {
      headers: {
        'Content-type': 'application/json'
      }
    }
  },
  {
    name: 'updatePost',
    url: API_POSTS_UPDATE_URL,
    method: 'PUT',
    setPayload: ({ data, res }) => {
      console.log('data', { data, res })
      return res.data
    },
    config: {
      headers: {
        'Content-type': 'application/json'
      }
    }
  }
])
```

## License

MIT © [maamountoj](https://github.com/maamountoj)
