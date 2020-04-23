import apiService from './apiService';

export const GET_POSTS = 'GET_POSTS';
export const GET_POST = 'GET_POST';
export const DELETE_POST = 'DELETE_POST';
export const ADD_POST = 'ADD_POST';
export const GET_COMMENTS = 'GET_COMMENTS';

export const ACTIONS = {
  GET_POSTS,
  GET_POST,
  DELETE_POST,
  ADD_POST,
  GET_COMMENTS
}

export const getPosts = (userId) => async dispatch => {
  const res = await apiService.get(`/posts?userId=${userId}`);
  const payload = res.data;
  dispatch({ type: GET_POSTS, payload });
};

export const deletePost = (postId) => async dispatch => {
  apiService.delete(`/posts/${postId}`);
  const payload = postId;
  dispatch({ type: DELETE_POST, payload });
}

export const getPost = (postId) => async dispatch => {
  const res = await apiService.get(`/posts/${postId}`);
  const payload = res.data;
  dispatch({ type: GET_POST, payload });
};

export const addPost = post => async dispatch => {
  apiService.post(`/posts`);
  const payload = post;
  dispatch({ type: ADD_POST, payload })
}

export const getComments = (postId) => async dispatch => {
  const res = await apiService.get(`/posts/${postId}/comments`);
  const payload = res.data;
  dispatch({ type: GET_COMMENTS, payload });
};

