import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Luna",
      image: "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg",
      places: 2,
    },
    {
      id: "u2",
      name: "Patti",
      image: "https://images.pexels.com/photos/73639/pexels-photo-73639.jpeg",
      places: 5,
    },
  ];
  return <UserList users={USERS} />;
};

export default Users;
