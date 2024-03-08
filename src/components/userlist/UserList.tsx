/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from "react";
import { fetchUserList } from "../../redux/saga/userListSaga";
import { useDispatch } from "react-redux";

// type Props = {}

const UserList = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);
  console.log(fetchUserList);
  return <div>UserList</div>;
};

export default UserList;
