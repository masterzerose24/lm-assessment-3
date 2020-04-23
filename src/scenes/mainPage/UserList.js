import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, selectUser } from "../../actions/UsersActions";
import { getPosts } from '../../actions/PostsActions';
import UserCard from "./UserCard";
import { bindActionCreators } from "redux";
import './styles.css';


const getUserPosts = (actions) => async (userId) => {
  await actions.selectUser(userId);
  await actions.getPosts(userId);
};

const UserList = (props) => {
  const { getUsers, userList, selectedUser, selectUser, getPosts } = props;
  const bindGetUserPost = getUserPosts({selectUser, getPosts});

  useEffect(() => {
    const fetchData = async () => {
      if (userList.length) return;
      await getUsers();
    };
    fetchData();
  }, [getUsers, userList]);

 

  return (
    <div className="doubling stackable one column ui grid">
      <h1>User List </h1>
      <div className="ui one column doubling stackable grid card-container" style={{ marginTop: "20px" }}>
        {userList &&
          userList.length &&
          userList.map((data) => {
            const classes = data.id === selectedUser ? 'column selected' : 'column';
            return <div className={classes} key={data.id} onClick={e => bindGetUserPost(data.id)}>
              <UserCard data={data}></UserCard>
            </div>
          })}
      </div>
    </div>
  );
};

const mapPropsToState = (state) => {
  const { users } = state;
  return { 
    userList: users.userList,
    selectedUser: users.selectedUser,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators({ 
  getUsers,
  selectUser,
  getPosts
}, dispatch);

export default connect(mapPropsToState, mapDispatchToProps)(UserList);
