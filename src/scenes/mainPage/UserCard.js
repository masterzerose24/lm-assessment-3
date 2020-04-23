import React from "react";

const UserCard = (props) => {
  const { fullName, company, avatar } = props.data;
  return (
    <h4 className="ui image header">
      <img src={avatar} className="ui mini rounded image"></img>
      <div className="content">
        {fullName} 
        <p className="sub header"> {company} </p>
      </div>
    </h4>
  );
};

export default UserCard;
