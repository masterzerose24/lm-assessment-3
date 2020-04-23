import { GET_USERS, SET_USER } from '../actions/UsersActions';

const initState = {
  userList: [],
  selectedUser: 0,
};

export default (state = initState, action) => {
  console.log('action', action)
  switch(action.type) {
    case GET_USERS: 
      return {
        ...state,
        userList: [ ...action.payload ]
      }
    case SET_USER:
      return {
        ...state,
        selectedUser: action.payload
      }
    default:
      return state;
  }
};