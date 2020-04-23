import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useHistory } from "react-router-dom";

import { deletePost, getPost, getComments } from "../../actions/PostsActions";
import PostItem from "./PostItem";

// Events
const onDeletePost = (deleteAction) => async (postId) => {
  await deleteAction(postId);
};

const onViewPost = (actions) => async (postId) => {
  const executeActions = async () => {
    actions.getPost(postId);
    actions.getComments(postId);
  };

  executeActions();
  const link = `post/${postId}`
  actions.history.push(link);
};

// Helper Element
const NoPost = () => (
  <div className="column">
    <h1> No Posts </h1>
  </div>
);

const PostsList = (props) => {
  const { selectedUser, postList, deletePost, getPost, getComments } = props;
  const hasPost = postList.length;
  const history = useHistory();
  const bindDeletePost = onDeletePost(deletePost);
  const bindViewPost = onViewPost({ getPost, getComments, history });

  const renderNoPost = () => <NoPost></NoPost>;
  const renderPosts = () =>
    hasPost &&
    postList.map((data) => (
      <div className="column" key={data.id}>
        <PostItem
          data={data}
          userId={selectedUser}
          onDeletePost={bindDeletePost}
          onViewPost={bindViewPost}
        ></PostItem>
      </div>
    ));

  return (
    <div className="doubling stackable one column ui grid">
      <h1>Post List</h1>
      <button style={{ width: "100%" }} className="ui primary button">
        Create Post
      </button>

      <div
        className="ui one column doubling stackable grid card-container"
        style={{ marginTop: "20px" }}
      >
        {hasPost ? renderPosts() : renderNoPost()}
      </div>
    </div>
  );
};

const mapPropsToState = (state) => {
  const { users, posts } = state;
  return {
    selectedUser: users.selectedUser,
    postList: posts.postList,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ deletePost, getPost, getComments }, dispatch);

export default connect(mapPropsToState, mapDispatchToProps)(PostsList);
