// /* eslint-disable @typescript-eslint/no-unused-vars */
// import React, { useEffect, useState } from "react";

// type userData = {
//   username: string;
//   password: string;
// };

// const UserList: React.FC = () => {
//   const [userData, setUserData] = useState<userData[]>([]);

//   useEffect(() => {
//     fetchUserList();
//   }, []);

//   const fetchUserList = async () => {
//     const response = await fetch("http://localhost:8080/profile");
//     const data = await response.json();
//     setUserData(data);
//   };

//   const renderUser = (user: userData, idx: number) => {
//     return <div key={idx}>{user.username}</div>;
//   };
//   console.log(userData);

//   return <div>{userData.map(renderUser)}</div>;
// };

// export default UserList;

// UserList.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getUserListFetch } from "../../redux/state/userListState";

type userData = {
  id:number,
  username: string,
  password: string
}

const UserList: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getUserListFetch());
  }, [dispatch]);
  
  const userList = useSelector(
    (state: RootState) => state.userListReducer.userList
  );
 
  
 
  console.log(userList);

  return (
    <div>
      {userList.map((user:userData) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default UserList;
