import React, {useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { getPost, getComments } from "../../actions/PostsActions";
import PostComment from './PostComments';
import './styles.css';

const ViewPost = (props) => {
  const { currentPost, comments, getPost, getComments } = props;
  const history = useHistory();
  const params = useParams();
  const executeActions = async (postId) => {
    await getPost(postId);
    await getComments(postId);
  }
  useEffect( () => {
    const isStateEmpty = !comments.length && !currentPost.title;
    if (isStateEmpty) {
      executeActions(params.id);
    }
  }, [comments, currentPost]);

  return (
    <div>
      <div className="ui one column stackable grid container">
      <button className="ui button back primary" onClick={e => history.goBack()}> Back </button>
        <div className="ui align center">
          <h1> {currentPost.title} </h1>
          <h4> {currentPost.body} </h4>
        </div>
        <div className="ui align center comments">
          {
            comments.map(comment => (<PostComment key={comment.id} data={comment}></PostComment>))
          }
        </div>
      </div>
    </div>
  );
}

const mapPropsToState = (state) => {
  const { posts } = state;
  return {
    currentPost: posts.currentPost,
    comments: posts.postComments,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ getPost, getComments }, dispatch);

export default connect(mapPropsToState, mapDispatchToProps)(ViewPost);
