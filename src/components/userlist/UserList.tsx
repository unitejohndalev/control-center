// /* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getUserListFetch } from "../../redux/state/userListState";
import Sidebar from "../sidebar/Sidebar";
import { Navbar } from "../nav/Navbar";

type userData = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  dept_name: string;
  position_sh_name: string;
  section_name: string;
  username: string;
  reg_date: string;
};

const UserList: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserListFetch());
  }, [dispatch]);

  const userList = useSelector(
    (state: RootState) => state.userListReducer.userList
  );

  console.log(userList);
  return (
    <div className="relative flex flex-col w-full px-2 mt-2 gap-y-2">
      <Navbar />
      <div className="flex gap-x-2">
        <Sidebar />
        <table className="w-[100%] border-[.1rem] rounded-md shadow-sm bg-white  py-2 gap-x-5 flex flex-col ">
          <tr className="flex w-full border-b-[.1rem] py-1  gap-x-5 shadow-sm font-medium text-[.9rem]">
            <th className="w-[10%]">Username</th>
            <th className="w-[10%]">First Name</th>
            <th className="w-[10%]">Last Name</th>
            <th className="w-[10%]">Position</th>
            <th className="w-[10%]">Email</th>
            <th className="w-[10%]">Business Unit</th>
            <th className="w-[10%]">Department</th>
            <th className="w-[10%]">Created</th>
            <th className="w-[10%]">Actions</th>
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
            console.log(user);
            return (
              <tr
                key={idx}
                className="flex w-full border-b-[.1rem]  gap-x-5 py-1  shadow-sm font-medium text-[.9rem]">
                <td className="w-[10%] line-clamp-1 text-center">{username}</td>
                <td className="w-[10%] line-clamp-1 text-center">{fname}</td>
                <td className="w-[10%] line-clamp-1 text-center">{lname}</td>
                <td className="w-[10%] line-clamp-1 text-center">
                  {position_sh_name}
                </td>
                <td className="w-[10%] whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
                  {email}
                </td>
                <td className="w-[10%] line-clamp-1 text-center">
                  {dept_name}
                </td>
                <td className="w-[10%] line-clamp-1 text-center">
                  {section_name}
                </td>
                <td className="w-[10%] line-clamp-1 text-center">{reg_date}</td>
                <td className="w-[10%] flex justify-between px-2">
                  <p>delete</p>
                  <p>edit</p>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default UserList;
