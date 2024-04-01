import UserTopBar from "./userListChildren/UserTopBar";
import UserSearch from "./userListChildren/UserSearch";
import UserListTableData from "./userListChildren/UserListTableData";

//import module style css
import UserTableStyle from "./UserList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserListFetch } from "../../redux/state/userListState";
import { RootState } from "../../redux/store/store";
import UserView from "../userView/UserView";
import { userData } from "./userListTypes";
import { MdSearch } from "react-icons/md";

import { motion } from "framer-motion";


//import userView module style css
import UserViewStyle from "../userView/UserView.module.css";
import { tableAni } from "../../framer/variants";

const UserTable = () => {
  const dispatch = useDispatch();

  //userlist side effect handler
  useEffect(() => {
    dispatch(getUserListFetch());
  }, [dispatch]);

  //get user list array
  const userList = useSelector(
    (state: RootState) => state.userListReducer.userList
  );

  //show userview modal
  const [userViewModal, setUserViewModal] = useState(false);
  const [userViewModalId, setUserViewModalId] = useState<number>();
  const setUserViewModalHandle = () => {
    setUserViewModal(false);
  };
  return (
    <motion.div
      className={UserTableStyle.userTableContainer}
      variants={tableAni}>
      {!userViewModal && (
        <>
          <UserTopBar />
          <UserSearch />
          <UserListTableData
            setUserViewModal={setUserViewModal}
            setUserViewModalId={setUserViewModalId}
          />
        </>
      )}
      {userViewModal && (
        <>
          <div className="w-full h-full flex  pt-2 px-[1rem] gap-x-3">
            <div className="w-[85%]  border-[.1rem] rounded-md shadow-sm bg-white  gap-x-5 flex flex-col  pb-2">
              {userList.map((user: userData, idx) => {
                const { emp_id } = user;
                return (
                  <div key={idx}>
                    {userViewModal && userViewModalId === emp_id && (
                      <>
                        <UserView
                          empId={emp_id}
                          setUserViewModalClose={setUserViewModalHandle}
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className={UserViewStyle.sidebar_Container}>
              <div className="flex w-full justify-evenly gap-x-2 items-center  border-[.1rem] rounded-md shadow-sm px-2 py-1 mb-2">
                <input
                  type="text"
                  placeholder="Search Username"
                  className="outline-none placeholder:pl-2 border-b-[.1rem] w-[80%] shadow-sm"
                />
                <MdSearch className="items-center justify-center font-medium text-[1.5rem] text-[#24288A] w-[20%]" />
              </div>
              {userList.map((user: userData, idx) => {
                const { emp_id, username } = user;
                return (
                  <div
                    key={idx}
                    className="w-full flex items-center justify-center">
                    <p
                      className="hover:bg-[#C9E7F9] w-[80%] py-[.1rem] px-[.15rem] rounded-md text-[.9rem] cursor-pointer"
                      onClick={() => {
                        setUserViewModal(true);
                        setUserViewModalId(emp_id);
                      }}>
                      {username}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
};

export default UserTable;
