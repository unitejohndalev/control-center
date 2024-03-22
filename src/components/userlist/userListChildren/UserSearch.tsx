import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { MdSearch } from "react-icons/md";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import {
  setSearchOptions,
  setSearchOptionsFalse,
} from "../../../redux/state/userListState";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

//import module style css
import UserSearchStyle from "../UserList.module.css";
import { useEffect, useRef, useState } from "react";

const UserSearch = () => {
  const dispatch = useDispatch();

  //NameIcon state
  const [nameIcon, setNameIcon] = useState(false);

  //positionIcon state
  const [positionIcon, setPositionIcon] = useState(false);

  //businessIcon state
  const [businessIcon, setBusinessIcon] = useState(false);

  //departmentIcon state
  const [departmentIcon, setDepartmentIcon] = useState(false);

  //topBar value
  const showTopBarHandler = useSelector(
    (state: RootState) => state.topBarReducer.showTopBarValue
  );

  //searchOption value
  const searchOptionHandler = useSelector(
    (state: RootState) => state.searchOptionsReducer.searchOptionsValue
  );

  const searchOptionHandlerToggle = () => {
    dispatch(setSearchOptions());
  };

  const searchDropDownContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        searchDropDownContainerRef.current &&
        !searchDropDownContainerRef.current.contains(event.target)
      ) {
        dispatch(setSearchOptionsFalse());
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchDropDownContainerRef, dispatch]);

  return (
    <div
      className={
        showTopBarHandler
          ? UserSearchStyle.showTopHandlerTrue
          : UserSearchStyle.showTopHandlerFalse
      }>
      {showTopBarHandler && (
        <div className={UserSearchStyle.userSearchContainer}>
          <div className={UserSearchStyle.formContainer}>
            <form
              className={UserSearchStyle.formStyle}
              ref={searchDropDownContainerRef}>
              <div className={UserSearchStyle.searchInputContainer}>
                <input
                  type="text"
                  className={UserSearchStyle.searchInput}
                  placeholder={nameIcon ? "Name" : "Search User"}
                />
              </div>
              {positionIcon && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Position"
                  />
                </div>
              )}
              {businessIcon && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Business Unit"
                  />
                </div>
              )}
              {departmentIcon && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Department"
                  />
                </div>
              )}

              <div className={UserSearchStyle.searchDropdownIcon}>
                {searchOptionHandler ? (
                  <MdArrowDropUp onClick={searchOptionHandlerToggle} />
                ) : (
                  <MdArrowDropDown onClick={searchOptionHandlerToggle} />
                )}
              </div>
              <button className={UserSearchStyle.searchIcon}>
                <MdSearch />
              </button>
              <div className={UserSearchStyle.searchDropdownContentContainer}>
                {searchOptionHandler && (
                  <div className={UserSearchStyle.dropdownContentContainer}>
                    <div className="flex items-center justify-between">
                      <p className={UserSearchStyle.dropdownContent}>Name</p>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          setNameIcon((prev) => !prev);
                        }}>
                        {nameIcon ? <IoIosRemove /> : <IoIosAdd />}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className={UserSearchStyle.dropdownContent}>
                        Position
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          setPositionIcon((prev) => !prev);
                        }}>
                        {positionIcon ? <IoIosRemove /> : <IoIosAdd />}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className={UserSearchStyle.dropdownContent}>
                        Business Unit
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          setBusinessIcon((prev) => !prev);
                        }}>
                        {businessIcon ? <IoIosRemove /> : <IoIosAdd />}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className={UserSearchStyle.dropdownContent}>
                        Department
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={() => {
                          setDepartmentIcon((prev) => !prev);
                        }}>
                        {departmentIcon ? <IoIosRemove /> : <IoIosAdd />}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
