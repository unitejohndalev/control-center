// /* eslint-disable @typescript-eslint/no-unused-vars */
import Sidebar from "../sidebar/Sidebar";
import { Navbar } from "../nav/Navbar";
import UserTable from "./UserTable";

const UserList: React.FC = () => {
  return (
    <div className="relative flex flex-col w-full px-2 py-2 gap-y-2">
      <Navbar />
      <div className="flex gap-x-2 h-[84vh]">
        <Sidebar />
        <UserTable />
      </div>
    </div>
  );
};

export default UserList;
