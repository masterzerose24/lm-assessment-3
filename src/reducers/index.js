import UsersReducer from './UsersReducer';
import PostsReducer from './PostsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  users: UsersReducer,
  posts: PostsReducer,
});