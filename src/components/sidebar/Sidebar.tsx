import React, { useState } from "react";
import { FaUsersCog, FaProjectDiagram } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LiaUserCogSolid } from "react-icons/lia";
import { SlOptions } from "react-icons/sl";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";

const Sidebar: React.FC = () => {
  const [showSidebarText, setShowSidebarText] = useState(true);
  const [showOtherSidebarText1, setShowOtherSidebarText1] = useState(false);
  const [showOtherSidebarText2, setShowOtherSidebarText2] = useState(false);
  const [hoverDashBoardText, setHoverDashBoardText] = useState(false);
  const [hoverUserText, setHoverUserText] = useState(false);
  const [hoverProjectText, setHoverProjectText] = useState(false);
  const [hoverRoleText, setHoverRoleText] = useState(false);
  const [hoverOthersText, setHoverOthersText] = useState(false);

  //show other side bar when showSidebarText is true
  const otherSidebarTrueTextHandler = () => {
    setShowOtherSidebarText1((prev) => !prev);
    setShowOtherSidebarText2(false);
  };

  //show other side bar when showSidebarText is false
  const otherSideBarFalseTextHandler = () => {
    setShowOtherSidebarText2((prev) => !prev);
    setShowOtherSidebarText1(false);
  };

  //a function to handle when to open other side bar 1 or other side bar 2
  const otherSideBarHandler = () => {
    showSidebarText
      ? otherSidebarTrueTextHandler()
      : otherSideBarFalseTextHandler();
  };

  return (
    <div
      className={
        showSidebarText
          ? "h-full border-[.1rem] w-[13rem] px-5  flex flex-col gap-y-5 drop-shadow-lg shadow-sm rounded-md transition-all ease-linear "
          : "h-full border-[.1rem] w-[5.2rem] px-5  flex flex-col gap-y-5 drop-shadow-lg  shadow-sm rounded-md transition-all ease-linear "
      }>
      <div className="flex justify-end w-full text-[#24288A] text-[1.5rem] mt-2 cursor-pointer py-1 px-2 rounded-md transition-all ease-linear">
        {showSidebarText ? (
          <BsArrowBarLeft
            onClick={() => {
              setShowSidebarText((prev) => !prev);
              setShowOtherSidebarText1(false);
            }}
          />
        ) : (
          <BsArrowBarRight
            onClick={() => {
              setShowSidebarText((prev) => !prev);

              setShowOtherSidebarText2(false);
            }}
          />
        )}
      </div>
      <div className="flex flex-col items-center w-full cursor-pointer gap-y-6">
        {/* DASHBOARD */}
        <div
          className="flex items-center w-full gap-x-2 focus:bg-black"
          onMouseEnter={() => setHoverDashBoardText(true)}
          onMouseLeave={() => setHoverDashBoardText(false)}>
          <div
            className={
              showSidebarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <RxDashboard />
          </div>
          {showSidebarText && (
            <p
              className={
                hoverDashBoardText
                  ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                  : "bg-transparent py-1 px-2 rounded-md transition-all ease-linear"
              }>
              Dashboard
            </p>
          )}
        </div>
        {/* USER */}
        <div
          className="flex items-center w-full gap-x-2"
          onMouseEnter={() => setHoverUserText(true)}
          onMouseLeave={() => setHoverUserText(false)}>
          <div
            className={
              showSidebarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <FaUsersCog />
          </div>

          {showSidebarText && (
            <p
              className={
                hoverUserText
                  ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                  : "bg-transparent py-1 px-2 rounded-md transition-all ease-linear"
              }>
              User
            </p>
          )}
        </div>
        {/* PROJECT */}
        <div
          className="flex items-center w-full gap-x-2"
          onMouseEnter={() => setHoverProjectText(true)}
          onMouseLeave={() => setHoverProjectText(false)}>
          <div
            className={
              showSidebarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <FaProjectDiagram />
          </div>
          {showSidebarText && (
            <p
              className={
                hoverProjectText
                  ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                  : "bg-transparent py-1 px-2 rounded-md transition-all ease-linear"
              }>
              Project
            </p>
          )}
        </div>
        {/* ROLE */}
        <div
          className="flex items-center w-full gap-x-2"
          onMouseEnter={() => setHoverRoleText(true)}
          onMouseLeave={() => setHoverRoleText(false)}>
          <div
            className={
              showSidebarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <LiaUserCogSolid />
          </div>
          {showSidebarText && (
            <p
              className={
                hoverRoleText
                  ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                  : "bg-transparent py-1 px-2 rounded-md transition-all ease-linear"
              }>
              Role
            </p>
          )}
        </div>
        {/* OTHERS */}
        <div className="relative flex flex-col w-full gap-x-2">
          <div
            className="flex items-center gap-x-2"
            onClick={otherSideBarHandler}
            onMouseEnter={() => setHoverOthersText(true)}
            onMouseLeave={() => setHoverOthersText(false)}>
            <div
              className={
                showSidebarText
                  ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                  : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
              }>
              <SlOptions />
            </div>
            {showSidebarText && (
              <>
                <p
                  className={
                    showOtherSidebarText1
                      ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                      : hoverOthersText
                      ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                      : "bg-transparent py-1 px-2 rounded-md transition-all ease-linear"
                  }>
                  Others
                </p>

                <div className="text-[#0070FF] text-[1.5rem] cursor-pointer ">
                  {showOtherSidebarText1 ? (
                    <MdArrowDropUp />
                  ) : (
                    <MdArrowDropDown />
                  )}
                </div>
              </>
            )}
          </div>
          {showOtherSidebarText1 && (
            <div className="flex justify-center border-[.1rem] rounded-md shadow-sm  py-2 mt-[1rem] ">
              <div className="h-[140px] overflow-y-auto custom-scrollbar flex flex-col gap-y-1 pr-1 py-2 ">
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Development Phase
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Project Status
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Employee Status
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Employee Position
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Business Unit
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Department
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Technologies
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Clients
                </p>
              </div>
            </div>
          )}
          {showOtherSidebarText2 && (
            <div className="absolute left-[4rem] bg-white flex  justify-center  border-[.1rem] rounded-md shadow-sm px-2 py-2 ">
              <div className="w-[10rem] h-[160px] overflow-y-auto custom-scrollbar pr-1 py-2 flex flex-col gap-y-1">
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Development Phase
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Project Status
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Employee Status
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Employee Position
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Business Unit
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Department
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Technologies
                </p>
                <p className="hover:bg-[#C9E7F9] py-[.1rem] px-[.15rem] rounded-md text-[.8rem]">
                  Clients
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
