import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/saga/sessionSaga";
import navLogo from "../../assets/logo (blue).png";
import imgProfile from "../../assets/MaleDefaultProfile.jpg";
import { FaRegBell } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  const [showDropDown, setShowDropDown] = useState(false);
  return (
    // <div>
    //     <button onClick={handleLogout}>logout</button>
    // </div>
    <div className=" border-[.1rem] w-full px-4  flex drop-shadow-lg py-2  shadow-sm rounded-md justify-between">
      <div className="flex">
        <img
          src={navLogo}
          alt=""
          className="rounded-lg cursor-pointer w-[12rem]"
        />
        {/* <a className="text-xl btn btn-ghost">Control Center</a> */}
      </div>
      <div className="flex-none gap-2">
        <div
          className="flex items-center px-4 rounded-md dropdown dropdown-end gap-x-2  border-[.01rem] border-[#C9E7F9] cursor-pointer"
          onClick={() => setShowDropDown((prev) => !prev)}>
          <div
            tabIndex={0}
            role="button"
            className="relative p-1 btn btn-ghost btn-circle avatar hover:bg-transparent">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={imgProfile} />
            </div>
            <div className="text-[#0070FF] absolute top-0 right-0 text-[1rem]">
              <FaRegBell />
            </div>
            <div className="w-[.4rem] h-[.4rem] rounded-full bg-red-500 absolute top-[.15rem] left-[2.4rem]"></div>
          </div>
          <p>Username</p>
        </div>
        {showDropDown && (
          <ul
            tabIndex={0}
            className="absolute bg-white right-0 flex flex-col justify-center items-center w-[15rem]
             mt-[1rem] border-[.1rem] rounded-md shadow-sm px-2 py-4">
            <div className="flex flex-col items-center justify-center leading-[1.1rem]">
              <li className="">
                <a className="font-bold">Sample Name</a>
              </li>
              <li className="">
                <a className="text-[.8rem]">sample@gmail.com</a>
              </li>
            </div>
            <div className="flex flex-col items-center justify-center w-full mt-5 gap-y-2">
              <li className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md cursor-pointer w-[80%] flex items-center justify-center border-[.01rem] border-[#C9E7F9]">
                <a className="text-[.9rem]">Manage your Account</a>
              </li>

              <li
                onClick={handleLogout}
                className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md cursor-pointer flex items-center justify-center w-[80%]  bg-slate-200 gap-x-[.1rem]">
                <span className="font-bold text-[1.5rem]">
                  <IoIosLogOut />
                </span>
                <a className="font-medium text-[1rem]">Logout</a>
              </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};
