import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  //if users are not available in the array
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found.</h2>
        </Card>
      </div>
    );
  }

  //is users are available in the array
  return (
    <ul className="users-list">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          image={user.image}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
