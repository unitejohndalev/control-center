/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import UserList from "./components/userlist/UserList";
import { Navbar } from "./components/nav/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";

const App: React.FC = () => {
  const themeState = useSelector((state: RootState) => state.themeReducer.themeState);
  
  return (
    <div className={themeState ? "dark" : "light"}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default App;
