import React from 'react';
import apiService from './apiService';
import { ACTIONS, getPost } from './PostsActions';

jest.mock('./apiService');

describe('Post Actions', () => {
  let dispatch;
  const mockData = { result: 'true',  users: [{ name: 'Henry'}]};

  beforeEach(() => {
    dispatch = jest.fn();
    apiService.get.mockImplementation(() => Promise.resolve({ data: { ...mockData } }));
  });


  test(`Dispatch should be called with GET_POSTS`, async () => {
    await getPost(1)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({ type: ACTIONS.GET_POST, payload: mockData });
  });
});