import React from "react";
import { Navbar } from "../nav/Navbar";
import UserList from "../userlist/UserList";

const UserPage = () => {
  return (
    <div className="h-[100vh] overflow-auto no-scrollbar">
      <UserList />
    </div>
  );
};

export default UserPage;
