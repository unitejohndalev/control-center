// /* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
import { getUserListFetch } from "../../redux/state/userListState";

type userData = {
  id: number;
  fname: string;
  lname: string;
  email: string;
  dept_name: string;
  position_sh_name: string;
  section_name: string;
  username: string;
};

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
    // <div>

    //   {userList.map((user: userData) => (
    //     <div key={user.id} className="">
    //       {user.username}
    //     </div>
    //   ))}
    // </div>
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Email</th>
            <th>Position</th>
            <th>Department</th>
            <th>Status</th>
            <th>Project</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {userList.map((user: userData) => (
            <tr key={user.id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-12 h-12 mask mask-squircle">
                      <img
                        src="/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{`${user.fname} ${user.lname}`}</div>
                  </div>
                </div>
              </td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.position_sh_name}</td>
              <td>{user.dept_name}</td>
              <td>{user.position_sh_name}</td>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default UserList;
