// /* eslint-disable @typescript-eslint/no-unused-vars */
import Sidebar from "../sidebar/Sidebar";
import { Navbar } from "../nav/Navbar";
import UserTable from "./UserTable";
import { motion } from "framer-motion";

//import module style css
import UserListStyle from "./UserList.module.css";
import { staggerContainer, navbarAni } from "../../framer/variants";

const UserList: React.FC = () => {
  return (
    <motion.div
      className={UserListStyle.userListContainer}
      variants={staggerContainer}
      initial="initial"
      animate="animate">
      <motion.div className="" variants={navbarAni}>
        <Navbar />
      </motion.div>
      <motion.div
        className={UserListStyle.userListChildContainer}
        variants={staggerContainer}
        initial="initial"
        animate="animate">
        <Sidebar />
        <UserTable />
      </motion.div>
    </motion.div>
  );
};

export default UserList;
