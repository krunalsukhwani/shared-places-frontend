import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "wilson",
      name: "Wilson Canivilo",
      image: "https://i.imgur.com/OB0y6MR.jpg",
      places: 3,
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
