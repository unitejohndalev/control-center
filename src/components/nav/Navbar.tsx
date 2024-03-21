import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/saga/sessionSaga";
import navLogo from "../../assets/logo (blue).png";
import imgProfile from "../../assets/MaleDefaultProfile.jpg";
import { FaRegBell } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { RootState } from "../../redux/store/store";
import { setDropDown, setDropDownFalse } from "../../redux/state/navBarState";

//import navBar style
import NavBarStyle from "./navbar.module.css";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(setDropDownFalse());
  };

  //navbar dropdown state
  const dropDownHandler = useSelector(
    (state: RootState) => state.navbarDropDownReducer.navbarDropDownValue
  );

  const dropDownHandlerToggle = () => {
    dispatch(setDropDown());
  };

  const profileDropDownContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        profileDropDownContainerRef.current &&
        !profileDropDownContainerRef.current.contains(event.target)
      ) {
        dispatch(setDropDownFalse());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileDropDownContainerRef, dispatch]);

  return (
    <nav className={NavBarStyle.navBarContainer}>
      <div>
        <img
          src={navLogo}
          alt="control-center-logo"
          className={NavBarStyle.navBarLogo}
        />
      </div>
      <div className="flex-none gap-2 " ref={profileDropDownContainerRef}>
        <div
          className={NavBarStyle.navBarUserContainer}
          onClick={dropDownHandlerToggle}>
          <div role="button" className={NavBarStyle.navBarUserNoti}>
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={imgProfile} />
            </div>
            <div className="text-[#0070FF] absolute top-0 right-0 text-[1rem]">
              <FaRegBell />
            </div>
            <div className={NavBarStyle.navBarUserNotiCircle}></div>
          </div>
          <p>Username</p>
        </div>
        {dropDownHandler && (
          <div className={NavBarStyle.navBarDropDownContainer}>
            <div className={NavBarStyle.navBarUserFullName}>
              <div className="">
                <a className="font-bold">Sample Name</a>
              </div>
              <div className="">
                <a className="text-[.8rem]">sample@gmail.com</a>
              </div>
            </div>
            <div className={NavBarStyle.navBarUserManageAccContainer}>
              <div className={NavBarStyle.navBarUserManageTextContainer}>
                <a className="text-[.9rem]">Manage your Account</a>
              </div>

              <div
                onClick={handleLogout}
                className={NavBarStyle.navBarUserLogoutContainer}>
                <span className="font-bold text-[1.5rem]">
                  <IoIosLogOut />
                </span>
                <a className="font-medium text-[1rem]">Logout</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
