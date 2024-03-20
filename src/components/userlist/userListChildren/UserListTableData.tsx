import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { getUserListFetch } from "../../../redux/state/userListState";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { userData } from "../userListTypes";

const UserListTableData = () => {
  const dispatch = useDispatch();

  //userlist side effect handler
  useEffect(() => {
    dispatch(getUserListFetch());
  }, [dispatch]);

  //get user list array
  const userList = useSelector(
    (state: RootState) => state.userListReducer.userList
  );

  return (
    <div className="w-[98%] border-[.1rem] rounded-md shadow-sm bg-white h-[100vh]">
      <tr className="flex w-full  border-b-[.1rem] py-1 gap-x-5 shadow-sm font-medium text-[.8rem] ">
        <th className="w-[5%] flex items-center justify-center">
          <input
            type="checkbox"
            name=""
            id=""
            className="h-[1rem] cursor-pointer"
          />
        </th>
        <th className="w-[10%]">Username</th>
        <th className="w-[10%]">First Name</th>
        <th className="w-[10%]">Last Name</th>
        <th className="w-[10%]">Position</th>
        <th className="w-[10%]">Email</th>
        <th className="w-[10%] line-clamp-1">Business Unit</th>
        <th className="w-[10%]">Department</th>
        <th className="w-[10%]">Created</th>
        <th className="w-[10%]">Actions</th>
      </tr>
      {userList.map((user: userData, idx) => {
        const {
          username,
          fname,
          lname,
          position_sh_name,
          email,
          dept_name,
          section_name,
          reg_date,
        } = user;
        console.log(user);
        return (
          <tr
            key={idx}
            className="flex w-full border-b-[.1rem]  gap-x-5 py-1  shadow-sm text-[.8rem] font-medium">
            <td className="w-[5%] flex items-center justify-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="h-[1rem] cursor-pointer"
              />
            </td>
            <td className="w-[10%] line-clamp-1 text-center">
              <Link to="" className="text-blue-700 underline">
                {username}
              </Link>
            </td>
            <td className="w-[10%] line-clamp-1 text-center">{fname}</td>
            <td className="w-[10%] line-clamp-1 text-center">{lname}</td>
            <td className="w-[10%] line-clamp-1 text-center">
              {position_sh_name}
            </td>
            <td className="w-[10%] whitespace-nowrap overflow-hidden overflow-ellipsis text-center">
              {email}
            </td>
            <td className="w-[10%] line-clamp-1 text-center">{dept_name}</td>
            <td className="w-[10%] line-clamp-1 text-center">{section_name}</td>
            <td className="w-[10%] line-clamp-1 text-center">{reg_date}</td>
            <td className="w-[10%] flex justify-center items-center gap-x-2">
              <span className="text-[1.3rem] cursor-pointer text-[#78797c]">
                <MdDeleteOutline />
              </span>
              <div className="h-[1rem] border-[.01rem] border-[#E5E7EB]"></div>
              <span className="text-[1.3rem] cursor-pointer text-[#78797c]">
                <IoKey />
              </span>
            </td>
          </tr>
        );
      })}
    </div>
  );
};

export default UserListTableData;
