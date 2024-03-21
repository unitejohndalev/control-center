import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getUserListFetch } from "../../../redux/state/userListState";
import { useEffect, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { userData } from "../userListTypes";

//import module style css
import UserListTableDataStyle from "../UserList.module.css";

//import raw data for table head
import { thData } from "../userListTypes";
import UserView from "../../userView/UserView";

const UserListTableData = () => {
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

  return (
    <div className={UserListTableDataStyle.container}>
      <div className={UserListTableDataStyle.trContainer}>
        <div className={UserListTableDataStyle.thInputContainer}>
          <input
            type="checkbox"
            name=""
            id=""
            className={UserListTableDataStyle.thInput}
          />
        </div>
        {thData.map((thD, idx) => {
          return (
            <div key={idx} className={UserListTableDataStyle.thData}>
              {thD}
            </div>
          );
        })}
      </div>
      {userList.map((user: userData, idx) => {
        const {
          username,
          fname,
          lname,
          position_sh_name,
          email,
          dept_name,
          section_name,
          reg_date,
          emp_id,
        } = user;

        return (
          <div key={idx} className={UserListTableDataStyle.trDataContainer}>
            <div className={UserListTableDataStyle.thInputContainer}>
              <input
                type="checkbox"
                name=""
                id=""
                className={UserListTableDataStyle.thInput}
              />
            </div>
            <td className={UserListTableDataStyle.tdContainer}>
              <span
                onClick={() => {
                  setUserViewModal(true);
                  setUserViewModalId(emp_id);
                }}
                className="text-blue-700 underline">
                {username}
              </span>
            </td>
            <td className={UserListTableDataStyle.tdContainer}>{fname}</td>
            <td className={UserListTableDataStyle.tdContainer}>{lname}</td>
            <td className={UserListTableDataStyle.tdContainer}>
              {position_sh_name}
            </td>
            <td className={UserListTableDataStyle.tdEmail}>{email}</td>
            <td className={UserListTableDataStyle.tdContainer}>{dept_name}</td>
            <td className={UserListTableDataStyle.tdContainer}>
              {section_name}
            </td>
            <td className={UserListTableDataStyle.tdContainer}>{reg_date}</td>
            <td className={UserListTableDataStyle.tdDeleteIconContainer}>
              <span className={UserListTableDataStyle.tdIcon}>
                <MdDeleteOutline />
              </span>
              <div className={UserListTableDataStyle.lineDiv}></div>
              <span className={UserListTableDataStyle.tdIcon}>
                <IoKey />
              </span>
            </td>
          </div>
        );
      })}
      <div className="">
        {userList.map((user: userData, idx) => {
          const { emp_id } = user;
          return (
            <div key={idx}>
              {userViewModal && userViewModalId === emp_id && (
                <UserView empId={emp_id} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserListTableData;
