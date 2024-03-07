import { Routes, Route } from "react-router-dom"
import Login from "./components/login/Login"
import UserList from "./components/userlist/UserList";



function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/userlist" element={<UserList />} />
      </Routes>
    </>
  );
}

export default App
