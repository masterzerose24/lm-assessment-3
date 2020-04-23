import React from "react";
import UserList from "./UserList";
import PostsList from "./PostsList";

const index = () => {
  return (
    <div className="ui two column stackable grid container">
      <UserList></UserList>
      <PostsList></PostsList>
    </div>
  );
};

export default index;
