import React, { useState } from "react";
import { FaUsersCog, FaProjectDiagram } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";
import { LiaUserCogSolid } from "react-icons/lia";
import { SlOptions } from "react-icons/sl";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { BsArrowBarRight, BsArrowBarLeft } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import {
  setShowHoverDashBoardTextFalse,
  setShowHoverDashBoardTextTrue,
  setShowHoverOthersTextFalse,
  setShowHoverOthersTextTrue,
  setShowHoverProjectTextFalse,
  setShowHoverProjectTextTrue,
  setShowHoverRoleTextFalse,
  setShowHoverRoleTextTrue,
  setShowHoverUserTextFalse,
  setShowHoverUserTextTrue,
  setShowOtherSideBarText1,
  setShowOtherSideBarText1False,
  setShowOthersSideBarText2,
  setShowOthersSideBarText2False,
  setShowSideBarText,
} from "../../redux/state/sidebarState";
import {
  setSearchOptions,
  setSearchOptionsFalse,
  setShowMoreFalse,
} from "../../redux/state/userListState";
import { setDropDownFalse } from "../../redux/state/navBarState";

const Sidebar: React.FC = () => {
  const dispatch = useDispatch();

  //sidebartext state
  const sideBarText = useSelector(
    (state: RootState) => state.sideBarTextReducer.sideBarTextValue
  );

  //othersidebartext1 state
  const otherSidebarText1 = useSelector(
    (state: RootState) => state.otherSideBarText1Reducer.otherSideBarTextValue
  );

  //othersidebartext2 state
  const otherSidebarText2 = useSelector(
    (state: RootState) => state.otherSideBartText2Reducer.othersSideBarTextValue
  );

  //hoverdashbordtext state
  const hoverDashBoardText = useSelector(
    (state: RootState) =>
      state.hoverDashBoardTextReducer.hoverDashBoardTextValue
  );

  //hoverusertext state
  const hoverUserText = useSelector(
    (state: RootState) => state.hoverUserTextReducer.hoverUserTextValue
  );

  //hoverprojecttext state
  const hoverProjectText = useSelector(
    (state: RootState) => state.hoverProjectTextReducer.hoverProjectTextValue
  );

  //hoverroletext state
  const hoverRoleText = useSelector(
    (state: RootState) => state.hoverRoleTextReducer.hoverRoleTextValue
  );

  //hoverothers text state
  const hoverOthersText = useSelector(
    (state: RootState) => state.hoverOthersTextReducer.hoverOthersTextValue
  );

  //show other side bar when showSidebarText is true
  const otherSidebarTrueTextHandler = () => {
    dispatch(setShowOtherSideBarText1());
    dispatch(setShowOthersSideBarText2False());
    dispatch(setSearchOptionsFalse());
    dispatch(setDropDownFalse());
    dispatch(setShowMoreFalse());
  };

  //show other side bar when showSidebarText is false
  const otherSideBarFalseTextHandler = () => {
    dispatch(setShowOthersSideBarText2());
    dispatch(setShowOtherSideBarText1False());
    dispatch(setSearchOptionsFalse());
    dispatch(setShowMoreFalse());
    dispatch(setDropDownFalse());
  };

  //a function to handle when to open other side bar 1 or other side bar 2
  const otherSideBarHandler = () => {
    sideBarText
      ? otherSidebarTrueTextHandler()
      : otherSideBarFalseTextHandler();
  };

  return (
    <div
      className={
        sideBarText
          ? "h-full border-[.1rem] w-[13rem] px-5  flex flex-col gap-y-5 drop-shadow-lg shadow-sm rounded-md transition-all ease-linear "
          : "h-full border-[.1rem] w-[5.2rem] px-5  flex flex-col gap-y-5 drop-shadow-lg  shadow-sm rounded-md transition-all ease-linear "
      }>
      <div className="flex justify-end w-full text-[#24288A] text-[1.5rem] mt-2 cursor-pointer py-1 px-2 rounded-md transition-all ease-linear">
        {sideBarText ? (
          <BsArrowBarLeft
            onClick={() => {
              dispatch(setShowSideBarText());

              dispatch(setShowOtherSideBarText1False());
            }}
          />
        ) : (
          <BsArrowBarRight
            onClick={() => {
              dispatch(setShowSideBarText());

              dispatch(setShowOthersSideBarText2False());
            }}
          />
        )}
      </div>
      <div className="flex flex-col items-center w-full cursor-pointer gap-y-6">
        {/* DASHBOARD */}
        <div
          className="flex items-center w-full gap-x-2 focus:bg-black"
          onMouseEnter={() => {
            dispatch(setShowHoverDashBoardTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverDashBoardTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <RxDashboard />
          </div>
          {sideBarText && (
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
          onMouseEnter={() => {
            dispatch(setShowHoverUserTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverUserTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <FaUsersCog />
          </div>

          {sideBarText && (
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
          onMouseEnter={() => {
            dispatch(setShowHoverProjectTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverProjectTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <FaProjectDiagram />
          </div>
          {sideBarText && (
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
          onMouseEnter={() => {
            dispatch(setShowHoverRoleTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverRoleTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
            }>
            <LiaUserCogSolid />
          </div>
          {sideBarText && (
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
            onMouseEnter={() => {
              dispatch(setShowHoverOthersTextTrue());
            }}
            onMouseLeave={() => {
              dispatch(setShowHoverOthersTextFalse());
            }}>
            <div
              className={
                sideBarText
                  ? "text-[#24288A] text-[1.5rem] py-1 px-2"
                  : "hover:bg-[#C9E7F9] text-[#24288A]  text-[1.5rem] py-1 px-2 rounded-md transition-all ease-linear"
              }>
              <SlOptions />
            </div>
            {sideBarText && (
              <>
                <p
                  className={
                    otherSidebarText1
                      ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                      : hoverOthersText
                      ? "bg-[#C9E7F9] py-1 px-2 rounded-md transition-all ease-linear"
                      : "bg-transparent py-1 px-2 rounded-md transition-all ease-linear"
                  }>
                  Others
                </p>

                <div className="text-[#0070FF] text-[1.5rem] cursor-pointer ">
                  {otherSidebarText1 ? <MdArrowDropUp /> : <MdArrowDropDown />}
                </div>
              </>
            )}
          </div>
          {otherSidebarText1 && (
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
          {otherSidebarText2 && (
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
