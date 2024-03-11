/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import UserList from "./components/userlist/UserList";


const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </>
  );
};

export default App;
