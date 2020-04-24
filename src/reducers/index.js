import { combineReducers } from "redux";
import fetchPostsReducer from "./fetchPostsReducer";
import fetchUsersReducer from "./fetchUserReducer";

export default combineReducers({
    posts: fetchPostsReducer,
    users: fetchUsersReducer,
});