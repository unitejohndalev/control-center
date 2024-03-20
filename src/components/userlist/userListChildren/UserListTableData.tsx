import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getUserListFetch } from "../../../redux/state/userListState";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { userData } from "../userListTypes";

//import module style css
import UserListTableDataStyle from "../UserList.module.css";
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
  //raw data for table head
  const thData = [
    "Username",
    "First Name",
    "Last Name",
    "Position",
    "Email",
    "Business Unit",
    "Department",
    "Created",
    "Actions",
  ];

  return (
    <div className={UserListTableDataStyle.container}>
      <tr className={UserListTableDataStyle.trContainer}>
        <th className={UserListTableDataStyle.thInputContainer}>
          <input
            type="checkbox"
            name=""
            id=""
            className={UserListTableDataStyle.thInput}
          />
        </th>
        {thData.map((thD, idx) => {
          return (
            <th key={idx} className={UserListTableDataStyle.thData}>
              {thD}
            </th>
          );
        })}
      </tr>
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
        } = user;
        return (
          <tr key={idx} className={UserListTableDataStyle.trDataContainer}>
            <td className={UserListTableDataStyle.thInputContainer}>
              <input
                type="checkbox"
                name=""
                id=""
                className={UserListTableDataStyle.thInput}
              />
            </td>
            <td className={UserListTableDataStyle.tdContainer}>
              <Link to="" className="text-blue-700 underline">
                {username}
              </Link>
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
          </tr>
        );
      })}
    </div>
  );
};

export default UserListTableData;
