import React from "react";

import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Joe",
      image:
        "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      places: 2,
    },
    {
      id: "u2",
      name: "Jane",
      image:
        "https://images.pexels.com/photos/895259/pexels-photo-895259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      places: 5,
    },
  ];
  return <UserList users={USERS} />;
};

export default Users;
