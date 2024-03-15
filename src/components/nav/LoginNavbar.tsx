import React, { useEffect } from "react";
import NavbarStyle from "./LoginNavbar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/state/loginNavState";
import { RootState } from "../../redux/store/store";
import { Expand } from "@theme-toggles/react";
import "@theme-toggles/react/css/Expand.css";
export const LoginNavbar: React.FC = () => {
  const dispatch = useDispatch();

  // Get the theme state from Redux store
  const theme = useSelector(
    (state: RootState) => state.themeReducer.themeState
  );

  // Dispatch toggleTheme action when the toggle button is clicked
  const toggleThemeButton = () => {
    dispatch(toggleTheme());
  };

  // Update the HTML body class and local storage when the theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  console.log(theme); // Log the theme state to check if it's being correctly retrieved

  return (
    <div className={NavbarStyle.NavbarContainer}>
      <div className={NavbarStyle.iconContainer}>
        {/* Render the toggle button based on the current theme */}
        <div onClick={toggleThemeButton}>
          <Expand
            duration={750}
            placeholder={undefined}
            className={
              theme === "light" ? NavbarStyle.lightIcon : NavbarStyle.darkIcon
            }
          />
        </div>
      </div>
    </div>
  );
};
