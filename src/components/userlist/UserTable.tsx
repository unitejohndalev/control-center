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
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { SlOptionsVertical } from "react-icons/sl";
import { GrMoreVertical } from "react-icons/gr";
import { LuMinimize2, LuMaximize2 } from "react-icons/lu";

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
  const [searchOptions, setSearchOptions] = useState(false);
  const [deleteHover, setDeleteHover] = useState(false);
  const [addUserHover, setAddUserHover] = useState(false);
  const [exportTable, setExportTable] = useState(false);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    dispatch(getUserListFetch());
  }, [dispatch]);

  const userList = useSelector(
    (state: RootState) => state.userListReducer.userList
  );
  return (
    <table className="w-[100%] border-[.1rem] rounded-md shadow-sm bg-white  gap-x-5 flex flex-col items-center pb-2">
      <div className="flex justify-between  text-[#24288A] text-[1.5rem] w-full cursor-pointer transition-all ease-linear relative">
        <button
          className="relative flex items-end px-2 py-1 font-bold"
          onMouseEnter={() => setAddUserHover(true)}
          onMouseLeave={() => setAddUserHover(false)}>
          <span>
            <IoPersonAdd className="text-[1.5rem] text-[#24288A]" />
          </span>
          {addUserHover && (
            <div className="absolute top-0 w-[5rem] left-[1.2rem] font-bold text-[.7rem]">
              ADD USER
            </div>
          )}
        </button>
        <span
          onClick={() => setShowMore((prev) => !prev)}
          className="items-end py-1">
          <GrMoreVertical />
        </span>
        {showMore && (
          <div className="absolute w-[10rem]  flex flex-col top-[1.9rem] px-2 py-1 right-[.5rem] text-[1rem] border-[.1rem] rounded-md shadow-sm bg-white">
            {showTopBar ? (
              <span
                onClick={() => {
                  setShowTopBar((prev) => !prev);
                  setShowMore(false);
                }}
                className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer flex items-center justify-between">
                Minimize
                <LuMinimize2 />
              </span>
            ) : (
              <span
                onClick={() => {
                  setShowTopBar((prev) => !prev);
                  setShowMore(false);
                }}
                className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer flex items-center justify-between">
                Expand
                <LuMaximize2 />
              </span>
            )}
            <span className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer flex items-center justify-between">
              Export
              <CgExport />
            </span>
            <span className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer flex items-center justify-between">
              Columns
              <TfiLayoutColumn3Alt />
            </span>
            <span className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer flex items-center justify-between">
              Filters
              <IoFilterSharp />
            </span>
            <span className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer flex items-center justify-between">
              Density
              <MdTableRows />
            </span>
          </div>
        )}
      </div>
      <div
        className={
          showTopBar
            ? "h-[5rem] w-[98%] bg-white py-2 transition-all ease-linear duration-100"
            : "h-[0rem] transition-all ease-linear duration-100"
        }>
        {showTopBar && (
          <div className="flex items-end justify-between h-[2.5rem]">
            {/* <div className="w-[5%] flex justify-center ">
              <button
                className="relative flex items-end font-bold transition-all ease-linear"
                onMouseEnter={() => setDeleteHover(true)}
                onMouseLeave={() => setDeleteHover(false)}>
                <span>
                  <MdDeleteOutline className="text-[1.5rem] text-red-500" />
                </span>
                {deleteHover && (
                  <div className="absolute top-[-.8rem] left-[1rem] font-bold text-[.7rem]">
                    DELETE
                  </div>
                )}
              </button>
            </div> */}
            <div className="w-[5%]"></div>
            <div className="flex items-center justify-center h-full ">
              <form
                className="flex w-[18rem] justify-evenly gap-x-2 h-full
               items-center relative border-[.1rem] rounded-md shadow-sm px-2">
                <button className="items-center justify-center font-medium ">
                  <MdSearch className="text-[1.5rem]" />
                </button>
                <div className="flex items-center justify-center ">
                  <input
                    type="text"
                    className="outline-none placeholder:pl-2"
                    placeholder="Search User"
                  />
                </div>
                <div className=" text-[1.5rem] cursor-pointer flex items-center justify-center">
                  {searchOptions ? (
                    <MdArrowDropUp
                      onClick={() => setSearchOptions((prev) => !prev)}
                    />
                  ) : (
                    <MdArrowDropDown
                      onClick={() => setSearchOptions((prev) => !prev)}
                    />
                  )}
                </div>
                {searchOptions && (
                  <div className="absolute w-[10rem] top-[2.7rem] right-0 text-[1rem] border-[.1rem] rounded-md shadow-sm bg-white">
                    <div className="w-full px-2 py-1">
                      <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer">
                        Name
                      </p>
                      <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer">
                        Position
                      </p>
                      <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer">
                        Business Unit
                      </p>
                      <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem] cursor-pointer">
                        Department
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
            {/* <div className="flex justify-center w-[5%]">
              <button
                className="relative flex items-end font-bold transition-all ease-linear"
                onMouseEnter={() => setExportTable(true)}
                onMouseLeave={() => setExportTable(false)}>
                <span>
                  <CgExport className="text-[1.5rem] text-[#24288A]" />
                </span>
                {exportTable && (
                  <div className="absolute top-[-.8rem] left-[-2.5rem] font-bold text-[.7rem]">
                    EXPORT
                  </div>
                )}
              </button>
            </div> */}
            <div className="w-[5%]"></div>
          </div>
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
