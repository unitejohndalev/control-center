/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login";
import UserList from "./components/userlist/UserList";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store/store";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { apiLogin } from "./redux/saga/sessionSaga";
import { setAuthenticationStatus, setUser } from "./redux/state/sessionState";


const App: React.FC = () => {
  const themeState = useSelector(
    (state: RootState) => state.themeReducer.themeState
  );
  const isAuthenticated = useSelector(
    (state: RootState) => state.sessionReducer.isAuthenticated
  );
  console.log("isAuthenticated", isAuthenticated);
  const cookies = new Cookies();
  const dispatch = useDispatch(); // Get the dispatch function from Redux

  useEffect(() => {
    // Check if the user is authenticated in localStorage
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "false";

    if (isAuthenticated) {
      // If the user is authenticated, call the login API to get user info
      const username = cookies.get("username"); // Retrieve the username from localStorage
      const password = cookies.get("password"); // Replace with the actual way you retrieve the password or token

      if (isAuthenticated && username && password) {
        apiLogin(username, password)
          .then((userData) => {
            if (userData) {
              // Dispatch an action to update the user state
              dispatch(setUser(userData)); // You should define the setUser action
              // Dispatch an action to update the authentication status
              dispatch(setAuthenticationStatus(true)); // You should define the setAuthenticationStatus action
            }
          })
          .catch((error) => {
            console.error("Error while checking authentication:", error);
          });
      }
    }
  }, [cookies, dispatch]);
  return (
    <div className={themeState ? "dark" : "light"}>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/" element={<Navigate to="/userlist" />} />
            <Route path="/userlist/*" element={<UserList />} />
          </>
        ) : (
          <>
            <Route index element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="*" element={<Navigate to="/" />} />
            {/* <Route path="/" element={<Login />} /> */}
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
