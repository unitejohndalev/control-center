import React, { useEffect, useRef, useState } from "react";
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

import SideBarStyle from "./sideBar.module.css";

//import raw data for sidebar
import { SideBarMoreSectionData } from "./sideBarTypes";

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
  };

  //show other side bar when showSidebarText is false
  const otherSideBarFalseTextHandler = () => {
    dispatch(setShowOthersSideBarText2());
    dispatch(setShowOtherSideBarText1False());
  };

  //a function to handle when to open other side bar 1 or other side bar 2
  const otherSideBarHandler = () => {
    sideBarText
      ? otherSidebarTrueTextHandler()
      : otherSideBarFalseTextHandler();
  };

  const moreContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        moreContainerRef.current &&
        !moreContainerRef.current.contains(event.target)
      ) {
        dispatch(setShowOtherSideBarText1False());
        dispatch(setShowOthersSideBarText2False());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [moreContainerRef, dispatch]);

  return (
    <div
      className={
        sideBarText
          ? SideBarStyle.sideBarWidthMax
          : SideBarStyle.sideBarWidthMin
      }>
      <div className={SideBarStyle.sideBarIconOpenClose}>
        {sideBarText ? (
          <BsArrowBarLeft
            onClick={() => {
              dispatch(setShowSideBarText());
            }}
          />
        ) : (
          <BsArrowBarRight
            onClick={() => {
              dispatch(setShowSideBarText());
            }}
          />
        )}
      </div>
      <div className={SideBarStyle.sideBarContentContainer}>
        {/* DASHBOARD */}
        <div
          className={SideBarStyle.contentContainer}
          onMouseEnter={() => {
            dispatch(setShowHoverDashBoardTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverDashBoardTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? SideBarStyle.contentIconDefault
                : SideBarStyle.contentIconHover
            }>
            <RxDashboard />
          </div>
          {sideBarText && (
            <p
              className={
                hoverDashBoardText
                  ? SideBarStyle.contentTextHover
                  : SideBarStyle.contentTextFalse
              }>
              Dashboard
            </p>
          )}
        </div>
        {/* USER */}
        <div
          className={SideBarStyle.contentContainer}
          onMouseEnter={() => {
            dispatch(setShowHoverUserTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverUserTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? SideBarStyle.contentIconDefault
                : SideBarStyle.contentIconHover
            }>
            <FaUsersCog />
          </div>

          {sideBarText && (
            <p
              className={
                hoverUserText
                  ? SideBarStyle.contentTextHover
                  : SideBarStyle.contentTextFalse
              }>
              User
            </p>
          )}
        </div>
        {/* PROJECT */}
        <div
          className={SideBarStyle.contentContainer}
          onMouseEnter={() => {
            dispatch(setShowHoverProjectTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverProjectTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? SideBarStyle.contentIconDefault
                : SideBarStyle.contentIconHover
            }>
            <FaProjectDiagram />
          </div>
          {sideBarText && (
            <p
              className={
                hoverProjectText
                  ? SideBarStyle.contentTextHover
                  : SideBarStyle.contentTextFalse
              }>
              Project
            </p>
          )}
        </div>
        {/* ROLE */}
        <div
          className={SideBarStyle.contentContainer}
          onMouseEnter={() => {
            dispatch(setShowHoverRoleTextTrue());
          }}
          onMouseLeave={() => {
            dispatch(setShowHoverRoleTextFalse());
          }}>
          <div
            className={
              sideBarText
                ? SideBarStyle.contentIconDefault
                : SideBarStyle.contentIconHover
            }>
            <LiaUserCogSolid />
          </div>
          {sideBarText && (
            <p
              className={
                hoverRoleText
                  ? SideBarStyle.contentTextHover
                  : SideBarStyle.contentTextFalse
              }>
              Role
            </p>
          )}
        </div>
        {/* OTHERS */}
        <div
          ref={moreContainerRef}
          className="relative flex flex-col w-full gap-x-2">
          <div
            className={SideBarStyle.contentContainer}
            onClick={otherSideBarHandler}
            onMouseEnter={() => {
              dispatch(setShowHoverOthersTextTrue());
            }}
            onMouseLeave={() => {
              dispatch(setShowHoverOthersTextFalse());
            }}>
            <div
              className={
                otherSidebarText2
                  ? SideBarStyle.contentIconTrue
                  : sideBarText
                  ? SideBarStyle.contentIconDefault
                  : SideBarStyle.contentIconHover
              }>
              <SlOptions />
            </div>
            {sideBarText && (
              <>
                <p
                  className={
                    otherSidebarText1
                      ? SideBarStyle.contentTextTrue
                      : hoverOthersText
                      ? SideBarStyle.contentTextHover
                      : SideBarStyle.contentTextFalse
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
            <div className={SideBarStyle.text1Container}>
              <div className={SideBarStyle.text1InnerContainer}>
                {SideBarMoreSectionData.map((data, idx) => {
                  return (
                    <div key={idx} className={SideBarStyle.contentText}>
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {otherSidebarText2 && (
            <div className={SideBarStyle.text2Container}>
              <div className={SideBarStyle.text2InnerContainer}>
                {SideBarMoreSectionData.map((data, idx) => {
                  return (
                    <div key={idx} className={SideBarStyle.contentText}>
                      {data}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
