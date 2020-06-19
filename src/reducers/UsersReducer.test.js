import usersReducer from './UsersReducer';
import { GET_USERS, SET_USER } from '../actions/UsersActions';

describe('Users Reducer ', () => {
  const initState = { 
    userList: [],
    selectedUser: 0,
  };
  
  test('should store new users on GET_USERS', () => {
    const userList = [
      {id: 1, name: 'Hendrxx'}, 
      {id: 2, name: 'Metrow'},
    ];
    const res = usersReducer(initState, {type: GET_USERS, payload: userList});
    expect(res).toEqual({ ...initState, userList });
  });

  test('should store selected user on SET_USERS', () => {
    const selectedUser = 69;
    const res = usersReducer(initState, {type: SET_USER, payload: selectedUser
    });
    expect(res).toEqual({ ...initState, selectedUser });
  });
});
