import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/saga/sessionSaga";
import navLogo from "../../assets/logo (blue).png";
import imgProfile from "../../assets/MaleDefaultProfile.jpg";

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
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar hover:bg-[#C9E7F9]"
            onClick={() => setShowDropDown((prev) => !prev)}>
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={imgProfile} />
            </div>
          </div>
        </div>
        {showDropDown && (
          <ul
            tabIndex={0}
            className="absolute right-0 flex flex-col justify-center w-[15rem] mt-[1rem] border-[.1rem] rounded-md shadow-sm px-2 py-2 gap-y-1">
            <li className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md cursor-pointer">
              <a className="justify-between">username</a>
            </li>
            <li className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md cursor-pointer">
              <a className="justify-between">email</a>
            </li>
            <li className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md cursor-pointer">
              <a className="justify-between">Manage your Account</a>
            </li>

            <li
              onClick={handleLogout}
              className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md cursor-pointer">
              <a>Logout</a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
