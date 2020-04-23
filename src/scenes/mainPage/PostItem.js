import React from "react";

const PostItem = (props) => {
  const { onDeletePost, data, onViewPost } = props;
  const { body, title, id } = data;
  const postLink = `post/${id}`;

  return (
    <div className="content">
      <h4 className="header">{title}</h4>
      <p className="ellipsis">{body}</p>
      <button className="primary ui button" onClick={(e) => onViewPost(id)}>View</button>
      <button className="red ui button" onClick={(e) => onDeletePost(id)}>
        Delete
      </button>
    </div>
  );
};
export default PostItem;
