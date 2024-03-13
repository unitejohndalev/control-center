import React, { useState } from "react";
import NavbarStyle from "./Navbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/state/navState";
import { RootState } from "../../redux/store/store";

import "@theme-toggles/react/css/Expand.css";
import { Expand } from "@theme-toggles/react";

export const Navbar: React.FC = () => {
  const dispatch = useDispatch();

  const toggleThemeButton = () => {
    dispatch(toggleTheme());
  };
  const getTheme = useSelector(
    (state: RootState) => state.themeReducer.themeState
  );

  return (
    <div className={NavbarStyle.NavbarContainer}>
      <div className={NavbarStyle.iconContainer}>
        {getTheme ? (
          <div onClick={toggleThemeButton}>
            <Expand
              duration={750}
              placeholder={undefined}
              className={NavbarStyle.darkIcon}
            />
          </div>
        ) : (
          <div onClick={toggleThemeButton}>
            <Expand
           
              duration={750}
              placeholder={undefined}
              className={NavbarStyle.lightIcon}
            />
          </div>
        )}
      </div>
    </div>
  );
};
