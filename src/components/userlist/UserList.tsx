// /* eslint-disable @typescript-eslint/no-unused-vars */
import Sidebar from "../sidebar/Sidebar";
import { Navbar } from "../nav/Navbar";
import UserTable from "./UserTable";

//import module style css
import UserListStyle from "./UserList.module.css";

const UserList: React.FC = () => {
  return (
    <div className={UserListStyle.userListContainer}>
      <div className="">
        <Navbar />
      </div>
      <div className={UserListStyle.userListChildContainer}>
        <Sidebar />
        <UserTable />
      </div>
    </div>
  );
};

export default UserList;
