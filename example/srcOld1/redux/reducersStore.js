import { combineReducers } from "redux";

import authReducer from "./auth/reducers";
import groupReducer from "./group/reducers";
import moderatorReducer from "./moderator/reducers";

export default combineReducers({
  auth: authReducer,
  group: groupReducer,
  moderator: moderatorReducer,
});
