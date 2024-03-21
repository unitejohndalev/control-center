import UserTopBar from "./userListChildren/UserTopBar";
import UserSearch from "./userListChildren/UserSearch";
import UserListTableData from "./userListChildren/UserListTableData";

//import module style css
import UserTableStyle from "./UserList.module.css";

const UserTable = () => {
  return (
    <div className={UserTableStyle.userTableContainer}>
      <UserTopBar />
      <UserSearch />
      <UserListTableData />
    </div>
  );
};

export default UserTable;
