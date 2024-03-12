import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import NavbarStyle from "./Navbar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/state/navState";
import { RootState } from "../../redux/store/store";


export const Navbar: React.FC = () => {
 
  const dispatch = useDispatch()

  const toggleThemeButton = () => {
    dispatch(toggleTheme()); 
  }
  const getTheme = useSelector(
    (state: RootState) => state.themeReducer.themeState
  );
  console.log(getTheme)
  return (
    <div className={NavbarStyle.NavbarContainer}>
      <div className={NavbarStyle.iconContainer}>
        {getTheme ? (
          <FaMoon onClick={toggleThemeButton} className={NavbarStyle.darkIcon} />
        ) : (
          <FaSun onClick={toggleThemeButton} className={NavbarStyle.lightIcon} />
        )}
      </div>
    </div>
  );
};
