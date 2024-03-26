import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import {
  getUserListFetch,
  setUserField,
} from "../../../redux/state/userListState";
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

  //get all empty string for user input
  const userInputById = useSelector(
    (state: RootState) => state.userListReducer.userInfo
  );
  //input function, setting the state into empty string
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUserField({ ...userInputById, [name]: value }));
  };
  console.log(userInputById);
  console.log(userList);

  // const {
  //   username,
  //   fname,
  //   lname,
  //   position_sh_name,
  //   email,
  //   dept_name,
  //   section_name,
  //   reg_date,
  //   emp_id,
  // } = userData;
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
            <input
              className={UserListTableDataStyle.userNameInput}
              onClick={() => {
                setUserViewModal(true);
                setUserViewModalId(emp_id);
              }}
              name="username"
              value={username}
              onChange={handleChange}
            />

            <input
              className={UserListTableDataStyle.tdContainer}
              name="fname"
              value={fname}
              onChange={handleChange}
            />
            <input
              className={UserListTableDataStyle.tdContainer}
              name="lname"
              value={lname}
              onChange={handleChange}
            />
            <input
              className={UserListTableDataStyle.tdContainer}
              name="position_sh_name"
              value={position_sh_name}
              onChange={handleChange}
            />

            <input
              className={UserListTableDataStyle.tdEmail}
              name="email"
              value={email}
              onChange={handleChange}
            />
            <input
              className={UserListTableDataStyle.tdContainer}
              name="dept_name"
              value={dept_name}
              onChange={handleChange}
            />

            <input
              className={UserListTableDataStyle.tdContainer}
              name="section_name"
              value={section_name}
              onChange={handleChange}
            />

            <div className={UserListTableDataStyle.tdContainer}>{reg_date}</div>
            <div className={UserListTableDataStyle.tdDeleteIconContainer}>
              <span className={UserListTableDataStyle.tdIcon}>
                <MdDeleteOutline />
              </span>
              <div className={UserListTableDataStyle.lineDiv}></div>
              <span className={UserListTableDataStyle.tdIcon}>
                <IoKey />
              </span>
            </div>
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
