import { dispatchActionsWithApi } from 'fasti-redux'
import { API_GROUPS_URL, API_GROUP_BY_ID_URL } from '../../contants/apiUrls'
import api from '../../config/api/base'

export const { getGroupsAction, getGroupByIdAction } = dispatchActionsWithApi([
  {
    api,
    name: 'getGroups',
    url: API_GROUPS_URL,
    method: 'get'
  },
  {
    api,
    name: 'getGroupById',
    url: API_GROUP_BY_ID_URL,
    method: 'get'
  }
])
