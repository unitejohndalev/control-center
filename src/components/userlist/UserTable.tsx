import UserTopBar from "./userListChildren/UserTopBar";
import UserSearch from "./userListChildren/UserSearch";
import UserListTableData from "./userListChildren/UserListTableData";

//import module style css
import UserTableStyle from "./UserList.module.css";

const UserTable = () => {
  return (
    <table className={UserTableStyle.userTableContainer}>
      <UserTopBar />
      <UserSearch />
      <UserListTableData />
    </table>
  );
};

export default UserTable;
