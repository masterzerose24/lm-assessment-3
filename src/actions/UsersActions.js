import apiService from './apiService';
import { avatarRandomizer } from './helpers/UsersHelper';

export const GET_USERS = 'GET_USERS';
export const SET_USER = 'SET_USERS';

export const userMapper = user => { return {
  fullName: user.name,
  id: user.id,
  company: user.company.name,
  avatar: avatarRandomizer(),
}};

export const getUsers = () => async dispatch => {
  const res = await apiService.get('/users');
  const payload = res.data.map(user => userMapper(user));
  dispatch({ type: GET_USERS, payload })
};

export const selectUser = (userId) => async dispatch => {
  dispatch({ type: SET_USER, payload: userId })
};