/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userData } from "../userlist/userListTypes";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfoFetch } from "../../redux/state/userInfoState";
import { RootState } from "../../redux/store/store";
type UserListType = {
  empId: number;
};

const UserView: React.FC<UserListType> = ({ empId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserInfoFetch(empId)); // Dispatch action with empId
  }, [dispatch, empId]);
  const userInfoData: any = useSelector<RootState, typeof userInfoData>(
    (state) => state.userInfoReducer.userView
  );
  console.log(userInfoData);

  userInfoData;
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
  } = userInfoData;

  return (
    <div className=" border-[.1rem] rounded-md shadow-sm bg-white  gap-x-5 flex flex-col items-center pb-2">
      <p>{emp_id}</p>
      <p>{username}</p>
      <p>{fname}</p>
      <p>{lname}</p>
      <p>{position_sh_name}</p>
      <p>{email}</p>
      <p>{dept_name}</p>
      <p>{section_name}</p>
      <p>{reg_date}</p>
      {/* <p>{userInfoData}</p> */}
    </div>
  );
};

export default UserView;
