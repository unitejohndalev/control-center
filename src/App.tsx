import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import UserList from "./components/userlist/UserList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store/store";
import Cookies from "universal-cookie";
import { apiLogin } from "./redux/saga/sessionSaga";
import { setAuthenticationStatus, setUser } from "./redux/state/sessionState";
import UserPage from "./components/userPage/UserPage";
import UserView from "./components/userView/UserView";

const App: React.FC = () => {
  const themeState = useSelector(
    (state: RootState) => state.themeReducer.themeState
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.sessionReducer.isAuthenticated
  );
  const cookies = new Cookies();
  const dispatch = useDispatch();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true"; // Fixed logic

    if (isAuthenticated) {
      const username = cookies.get("username");
      const password = cookies.get("password");

      if (username && password) {
        apiLogin(username, password)
          .then((userData) => {
            if (userData) {
              dispatch(setUser(userData));
              dispatch(setAuthenticationStatus(true));
            }
          })
          .catch((error) => {
            console.error("Error while checking authentication:", error);
          });
      }
    }
  }, [cookies, dispatch]);

  return (
    <div className={themeState === "dark" ? "dark" : "light"}>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/userpage" />} />
            <Route path="/userpage/*" element={<UserPage />} />
            <Route path="/userview/:id/*" element={<UserView />} />
          </>
        ) : (
          <>
            <Route index element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
