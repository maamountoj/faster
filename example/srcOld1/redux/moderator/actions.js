import { dispatchActionsWithApi } from 'fasti-redux'
import { API_MODERATORS_URL } from '../../contants/apiUrls'
import api from '../../config/api/base'

export const { getModeratorsAction } = dispatchActionsWithApi([
  {
    api,
    name: 'getModerators',
    url: API_MODERATORS_URL,
    method: 'get',
    fn: ({ data, res }) => {
      console.log(data)
      console.log(res)
      return res
    }
  }
])
