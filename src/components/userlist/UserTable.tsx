import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserListFetch } from "../../redux/state/userListState";
import { RootState } from "../../redux/store/store";
import { MdSearch } from "react-icons/md";
import { BsArrowBarUp, BsArrowBarDown } from "react-icons/bs";
import { MdDeleteOutline, MdTableRows } from "react-icons/md";
import { IoKey, IoFilterSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { CgExport } from "react-icons/cg";

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

const UserTable = () => {
  const dispatch = useDispatch();

  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    dispatch(getUserListFetch());
  }, [dispatch]);

  const userList = useSelector(
    (state: RootState) => state.userListReducer.userList
  );
  return (
    <table className="w-[100%] border-[.1rem] rounded-md shadow-sm bg-white  gap-x-5 flex flex-col items-center pb-2">
      <div className="flex justify-center w-full text-[#24288A] text-[1.5rem]  cursor-pointer transition-all ease-linear">
        {showTopBar ? (
          <BsArrowBarDown onClick={() => setShowTopBar((prev) => !prev)} />
        ) : (
          <BsArrowBarUp onClick={() => setShowTopBar((prev) => !prev)} />
        )}
      </div>
      <div
        className={
          showTopBar
            ? "h-[5rem] w-[98%] bg-white py-2 transition-all ease-linear duration-100"
            : "h-[0rem] transition-all ease-linear duration-100"
        }>
        {showTopBar && (
          <>
            <form className="flex justify-between ">
              <input
                type="text"
                className="border-[.1rem] w-[20%]  py-2 px-2 rounded-md text-[.9rem] font-medium outline-none"
                placeholder="Name"
              />
              <input
                type="text"
                className="border-[.1rem] w-[20%] py-2 px-2 rounded-md text-[.9rem] font-medium outline-none"
                placeholder="Position"
              />
              <input
                type="text"
                className="border-[.1rem]  w-[20%] py-2 px-2 rounded-md text-[.9rem] font-medium outline-none"
                placeholder="Business Unit"
              />
              <input
                type="text"
                className="border-[.1rem] w-[20%]  py-2 px-2 rounded-md text-[.9rem] font-medium outline-none"
                placeholder="Department"
              />
              <button className="flex px-4 py-1 font-medium rounded-md gap-x-2 bg-[#E5E7EB] justify-center items-center">
                <MdSearch className="text-[1.5rem]" />
                Search
              </button>
            </form>
            <div className="flex">
              <button>DELETE</button>
              <button>SEARCH</button>
              <button>ADD USER</button>
              <button className="flex">
                <span>
                  <TfiLayoutColumn3Alt />
                </span>
                <span>COLUMNS</span>
              </button>
              <button className="flex">
                <span>
                  <IoFilterSharp />
                </span>
                <span>FILTERS</span>
              </button>
              <button className="flex">
                <span>
                  <MdTableRows />
                </span>
                <span>DENSITY</span>
              </button>
              <button className="flex">
                <span>
                  <CgExport />
                </span>
                <span>EXPORT</span>
              </button>
            </div>
          </>
        )}
      </div>
      <div className="w-[98%] border-[.1rem] rounded-md shadow-sm bg-white h-[100vh]">
        <tr className="flex w-full  border-b-[.1rem] py-1 gap-x-5 shadow-sm font-medium text-[.8rem] ">
          <th className="w-[5%] flex items-center justify-center">
            <input
              type="checkbox"
              name=""
              id=""
              className="h-[1rem] cursor-pointer"
            />
            {/* <MdDeleteOutline className="text-[1.3rem]" /> */}
          </th>
          <th className="w-[10%]">Username</th>
          <th className="w-[10%]">First Name</th>
          <th className="w-[10%]">Last Name</th>
          <th className="w-[10%]">Position</th>
          <th className="w-[10%]">Email</th>
          <th className="w-[10%] line-clamp-1">Business Unit</th>
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
              className="flex w-full border-b-[.1rem]  gap-x-5 py-1  shadow-sm text-[.8rem] font-medium">
              <td className="w-[5%] flex items-center justify-center">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="h-[1rem] cursor-pointer"
                />
              </td>
              <td className="w-[10%] line-clamp-1 text-center">
                <Link to="" className="text-blue-700 underline">
                  {username}
                </Link>
              </td>
              <td className="w-[10%] line-clamp-1 text-center">{fname}</td>
              <td className="w-[10%] line-clamp-1 text-center">{lname}</td>
              <td className="w-[10%] line-clamp-1 text-center">
                {position_sh_name}
              </td>
              <td className="w-[10%] whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
                {email}
              </td>
              <td className="w-[10%] line-clamp-1 text-center">{dept_name}</td>
              <td className="w-[10%] line-clamp-1 text-center">
                {section_name}
              </td>
              <td className="w-[10%] line-clamp-1 text-center">{reg_date}</td>
              <td className="w-[10%] flex justify-center items-center gap-x-2">
                <span className="text-[1.3rem] cursor-pointer text-[#78797c]">
                  <MdDeleteOutline />
                </span>
                <div className="h-[1rem] border-[.01rem] border-[#E5E7EB]"></div>
                <span className="text-[1.3rem] cursor-pointer text-[#78797c]">
                  <IoKey />
                </span>
              </td>
            </tr>
          );
        })}
      </div>
    </table>
  );
};

export default UserTable;
