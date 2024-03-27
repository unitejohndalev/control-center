import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import {
  getUserListFetch,
  setUserField,
} from "../../../redux/state/userListState";
import { useEffect, useRef, useState } from "react";
import { MdOutlineCancel, MdOutlineSaveAs } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { userData } from "../userListTypes";
import { MdSettingsAccessibility } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { CiEdit, CiSettings } from "react-icons/ci";

//import module style css
import UserListTableDataStyle from "../UserList.module.css";

//import raw data for table head
import { thData } from "../userListTypes";
import UserView from "../../userView/UserView";

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

  //show userview modal
  const [userViewModal, setUserViewModal] = useState(false);
  const [userViewModalId, setUserViewModalId] = useState<number>();

  //get all empty string for user input
  const userInputById = useSelector(
    (state: RootState) => state.userListReducer.userInfo
  );
  //input function, setting the state into empty string
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch(setUserField({ ...userInputById, [name]: value }));
  };
  console.log(userInputById);
  console.log(userList);

  // const {
  //   username,
  //   fname,
  //   lname,
  //   position_sh_name,
  //   email,
  //   dept_name,
  //   section_name,
  //   reg_date,
  //   emp_id,
  // } = userData;
  const [pShow, setPShow] = useState(false);
  const [buShow, setBuShow] = useState(false);
  const [dpShow, setDpShow] = useState(false);
  const [dpId, setDpId] = useState<any>(null);

  const [quickEdit, setQuickEdit] = useState(false);

  const pShowContainerRef = useRef(null);
  const buShowContainerRef = useRef(null);
  const dpShowContainerRef = useRef(null);
  const pShowContainerReffnc = () => {
    const handleClickOutside = (event: any) => {
      if (
        pShowContainerRef.current &&
        !pShowContainerRef.current.contains(event.target)
      ) {
        setPShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };
  const buShowContainerReffnc = () => {
    const handleClickOutside = (event: any) => {
      if (
        buShowContainerRef.current &&
        !buShowContainerRef.current.contains(event.target)
      ) {
        setBuShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };
  const dpShowContainerReffnc = () => {
    const handleClickOutside = (event: any) => {
      if (
        dpShowContainerRef.current &&
        !dpShowContainerRef.current.contains(event.target)
      ) {
        setDpShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  useEffect(() => {
    pShowContainerReffnc();
    buShowContainerReffnc();
    dpShowContainerReffnc();
  }, []);

  return (
    <div className={UserListTableDataStyle.container}>
      <div className={UserListTableDataStyle.trContainer}>
        <div className="w-[5%] flex items-center justify-center">
          <input
            type="checkbox"
            name=""
            id=""
            className={UserListTableDataStyle.thInput}
          />
        </div>
        {thData.map((thD, idx) => {
          return (
            <div key={idx} className={UserListTableDataStyle.thData}>
              {thD}
            </div>
          );
        })}
      </div>
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
          emp_id,
        } = user;

        return (
          <div
            key={idx}
            className={
              quickEdit && dpId === emp_id
                ? "flex w-full items-center relative  gap-x-5  text-[.8rem] font-medium py-[.5rem] border-[.1rem] border-red-500 transition-all ease-linear"
                : UserListTableDataStyle.trDataContainer
            }>
            {quickEdit && dpId === emp_id ? (
              <>
                <div className={UserListTableDataStyle.thInputContainer}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={UserListTableDataStyle.thInput}
                  />
                </div>
                <input
                  className={UserListTableDataStyle.userNameInput}
                  name="username"
                  value={username}
                  onChange={handleChange}
                />

                <input
                  className={UserListTableDataStyle.tdContainer}
                  name="fname"
                  value={fname}
                  onChange={handleChange}
                />

                <input
                  className={UserListTableDataStyle.tdContainer}
                  name="lname"
                  value={lname}
                  onChange={handleChange}
                />

                {/* <input
              className={UserListTableDataStyle.tdContainer}
              name="position_sh_name"
              value={position_sh_name}
              onChange={handleChange}
            /> */}

                <div
                  className=" relative w-[10%] h-full "
                  onClick={() => {
                    setPShow((prev) => !prev);
                    setDpId(emp_id);
                  }}>
                  <p
                    className={
                      pShow
                        ? "h-full text-center cursor-pointer line-clamp-1 bg-[#80C6F1]  rounded-md text-white"
                        : "h-full text-center cursor-pointer line-clamp-1 hover:bg-[#C9E7F9]  rounded-md"
                    }
                    ref={pShowContainerRef}>
                    {position_sh_name}
                  </p>
                  {pShow && dpId === emp_id && (
                    <div className="absolute z-[100]  w-full  flex flex-col top-[1.5rem] px-2 py-1 right-0 text-[1rem] border-[.1rem] rounded-md drop-shadow-md shadow-sm bg-white">
                      <span className={UserListTableDataStyle.moreCategory}>
                        DE1
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        DE2
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        SDE
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        JES
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        ES
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        EM
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        SEM
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        AGM
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        GM
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        ED
                      </span>
                    </div>
                  )}
                </div>

                <input
                  className={UserListTableDataStyle.tdEmail}
                  name="email"
                  value={email}
                  onChange={handleChange}
                />

                {/* <input
              className={UserListTableDataStyle.tdContainer}
              name="dept_name"
              value={dept_name}
              onChange={handleChange}
            /> */}

                <div
                  className=" relative w-[10%]  h-full"
                  onClick={() => {
                    setBuShow((prev) => !prev);
                    setDpId(emp_id);
                  }}>
                  <p
                    className={
                      buShow
                        ? "h-full text-center cursor-pointer line-clamp-1 bg-[#80C6F1]  rounded-md text-white"
                        : "h-full text-center cursor-pointer line-clamp-1 hover:bg-[#C9E7F9]  rounded-md"
                    }
                    ref={buShowContainerRef}>
                    {dept_name}
                  </p>
                  {buShow && dpId === emp_id && (
                    <div className="absolute z-[100]  w-full  flex flex-col top-[1.5rem] px-2 py-1 right-0 text-[1rem] border-[.1rem] rounded-md drop-shadow-md shadow-sm bg-white">
                      <span className={UserListTableDataStyle.moreCategory}>
                        1ST Dept
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        2ND Dept
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        3RD Dept
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        4TH Dept
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        5TH Dept
                      </span>
                    </div>
                  )}
                </div>

                {/* <input
              className={UserListTableDataStyle.tdContainer}
              name="section_name"
              value={section_name}
              onChange={handleChange}
              disabled
              onClick={() => {
                setDpShow((prev) => !prev);
              }}
            /> */}

                <div
                  className=" relative w-[10%] h-full "
                  onClick={() => {
                    setDpShow((prev) => !prev);
                    setDpId(emp_id);
                  }}>
                  <p
                    className={
                      dpShow
                        ? "h-full text-center cursor-pointer line-clamp-1 bg-[#80C6F1]  rounded-md text-white"
                        : "h-full text-center cursor-pointer line-clamp-1 hover:bg-[#C9E7F9]  rounded-md"
                    }
                    ref={dpShowContainerRef}>
                    {section_name}
                  </p>
                  {dpShow && dpId === emp_id && (
                    <div className="absolute z-[100]  w-full  flex flex-col top-[1.5rem] px-2 py-1 right-0 text-[1rem] border-[.1rem] rounded-md drop-shadow-md shadow-sm bg-white">
                      <span className={UserListTableDataStyle.moreCategory}>
                        SSS Business Unit
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        VSBU
                      </span>
                      <span className={UserListTableDataStyle.moreCategory}>
                        <p className="line-clamp-1">
                          1st and 2nd SSS Business Unit
                        </p>
                      </span>
                    </div>
                  )}
                </div>
                <div className={UserListTableDataStyle.tdContainer}>
                  {reg_date}
                </div>

                <div className={UserListTableDataStyle.tdDeleteIconContainer}>
                  <span
                    className={UserListTableDataStyle.tdIcon}
                    onClick={() => {
                      setQuickEdit((prev) => !prev);
                      setDpId(emp_id);
                    }}>
                    <MdOutlineCancel />
                  </span>
                  <div className={UserListTableDataStyle.lineDiv}></div>

                  <span className={UserListTableDataStyle.tdIcon}>
                    <MdOutlineSaveAs />
                  </span>
                </div>
              </>
            ) : (
              <>
                <div className={UserListTableDataStyle.thInputContainer}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={UserListTableDataStyle.thInput}
                  />
                </div>
                <p className={UserListTableDataStyle.userNameInput}>
                  {username}
                </p>

                <p className={UserListTableDataStyle.tdContainer}>{fname}</p>

                <p className={UserListTableDataStyle.tdContainer}>{lname}</p>

                <p className={UserListTableDataStyle.tdContainer}>
                  {position_sh_name}
                </p>

                <p className={UserListTableDataStyle.tdEmail}>{email}</p>

                <p className={UserListTableDataStyle.tdContainer}>
                  {dept_name}
                </p>

                <p className={UserListTableDataStyle.tdContainer}>
                  {section_name}
                </p>
                <div className={UserListTableDataStyle.tdContainer}>
                  {reg_date}
                </div>

                <div className={UserListTableDataStyle.tdDeleteIconContainer}>
                  <span
                    className={UserListTableDataStyle.tdIcon}
                    onClick={() => {
                      setQuickEdit(true);
                      setDpId(emp_id);
                    }}>
                    <CiEdit />
                  </span>
                  <div className={UserListTableDataStyle.lineDiv}></div>
                  <span
                    className={UserListTableDataStyle.tdIcon}
                    onClick={() => {
                      setUserViewModal(true);
                      setUserViewModalId(emp_id);
                    }}>
                    <CiSettings />
                  </span>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="">
        {userList.map((user: userData, idx) => {
          const { emp_id } = user;
          return (
            <div key={idx}>
              {userViewModal && userViewModalId === emp_id && (
                <UserView empId={emp_id} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserListTableData;
