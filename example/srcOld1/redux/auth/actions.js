import { dispatchActions, dispatchActionsWithApi } from 'fasti-redux'
import { API_LOGIN_URL } from '../../contants/apiUrls'
import Cookies from 'js-cookie'
import api from '../../config/api/base'

export const { loginAction } = dispatchActionsWithApi([
  {
    api,
    name: 'login',
    url: API_LOGIN_URL,
    method: 'post',
    fn: ({ data, res }) => {
      console.log(data)
      console.log(res)
      Cookies.set('jwt', res.token)
      return res
    }
  }
])

export const { getCommentsAction } = dispatchActions([
  {
    name: 'getComments',
    fn: (data) => {
      data.test = 'test'
      return data
    }
  }
])
