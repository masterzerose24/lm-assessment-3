import React from "react";

export default function PostComments(props) {
  const { email, body } = props.data;
  return (
    <div className="content">
      <p>{email}</p>
      <h4>{body}</h4>
    </div>
  );
}
