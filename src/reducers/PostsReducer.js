import { ACTIONS } from '../actions/PostsActions';

const initState = {
  postList: [],
  currentPost: {},
  postComments: [],
};

export default (state = initState, action) => {
  const { type, payload} = action;
  console.log('action', action)
  switch(type) {
    case ACTIONS.GET_POSTS:
      return {
        ...state,
        postList: payload,
      }
    case ACTIONS.GET_POST:
      return {
        ...state,
        currentPost: payload
      }
    case ACTIONS.DELETE_POST:
      return {
        ...state,
        postList: state.postList.filter( post => post.id !== payload ),
      }
    case ACTIONS.ADD_POST:
      return {
        ...state,
        postList: [ ...state.postList, payload],
      }
    case ACTIONS.GET_COMMENTS: {
      return {
        ...state,
        postComments: payload,
      }
    }
      
    default:
      return state;
  }
};