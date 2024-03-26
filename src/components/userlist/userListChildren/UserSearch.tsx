import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { MdSearch } from "react-icons/md";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import {
  setBusinessIconFalse,
  setBusinessIconToggle,
  setBusinessIconTrue,
  setDepartmentIconFalse,
  setDepartmentIconToggle,
  setDepartmentIconTrue,
  setNameIconFalse,
  setNameIconToggle,
  setNameIconTrue,
  setPositionIconFalse,
  setPositionIconToggle,
  setPositionIconTrue,
  setSearchOptions,
  setSearchOptionsFalse,
  setShowBusinessInputFalse,
  setShowBusinessInputToggle,
  setShowBusinessInputTrue,
  setShowDepartmentInputFalse,
  setShowDepartmentInputToggle,
  setShowDepartmentInputTrue,
  setShowNameInputFalse,
  setShowNameInputToggle,
  setShowNameInputTrue,
  setShowPositionInputFalse,
  setShowPositionInputToggle,
  setShowPositionInputTrue,
  setShowSearchUserInputFalse,
  setShowSearchUserInputToggle,
  setShowSearchUserInputTrue,
} from "../../../redux/state/userListState";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

//import module style css
import UserSearchStyle from "../UserList.module.css";
import { useEffect, useRef, useState } from "react";

const UserSearch = () => {
  const dispatch = useDispatch();

  //store all dispatch in a variable to avoid repetitive calls of dispatch

  //showSearchUserInputReducer
  const showSearchUserInput = useSelector(
    (state: RootState) =>
      state.showSearchUserInputReducer.showSearchUserInputValue
  );
  const setToggleUserInput = () => dispatch(setShowSearchUserInputToggle());
  const falseUserInput = () => dispatch(setShowSearchUserInputFalse());
  const trueUserInput = () => dispatch(setShowSearchUserInputTrue());

  //nameIconReducer
  const nameIcon = useSelector(
    (state: RootState) => state.nameIconReducer.nameIconValue
  );
  const setToggleNameIcon = () => dispatch(setNameIconToggle());
  const falseNameIcon = () => dispatch(setNameIconFalse());
  const trueNameIcon = () => dispatch(setNameIconTrue());

  //showNameInputReducer
  const showNameInput = useSelector(
    (state: RootState) => state.showNameInputReducer.showNameInputValue
  );
  const setToggleNameInput = () => dispatch(setShowNameInputToggle());
  const falseNameInput = () => dispatch(setShowNameInputFalse());
  const trueNameInput = () => dispatch(setShowNameInputTrue());

  //positionIconReducer
  const positionIcon = useSelector(
    (state: RootState) => state.positionIconReducer.positionIconValue
  );
  const setTogglePositionIcon = () => dispatch(setPositionIconToggle());
  const falsePositionIcon = () => dispatch(setPositionIconFalse());
  const truePositionIcon = () => dispatch(setPositionIconTrue());

  //showPositionInputReducer
  const showPositionInput = useSelector(
    (state: RootState) => state.showPositionInputReducer.showPositionInputValue
  );
  const setTogglePositionInput = () => dispatch(setShowPositionInputToggle());
  const falsePositionInput = () => dispatch(setShowPositionInputFalse());
  const truePositionInput = () => dispatch(setShowPositionInputTrue());

  //businessIconReducer
  const businessIcon = useSelector(
    (state: RootState) => state.businessIconReducer.businessIconValue
  );
  const setToggleBusinessIcon = () => dispatch(setBusinessIconToggle());
  const falseBusinessIcon = () => dispatch(setBusinessIconFalse());
  const trueBusinessIcon = () => dispatch(setBusinessIconTrue());

  //showBusinessInputReducer
  const showBusinessInput = useSelector(
    (state: RootState) => state.showBusinessInputReducer.showBusinessInputValue
  );
  const setToggleBusinessInput = () => dispatch(setShowBusinessInputToggle());
  const falseBusinessInput = () => dispatch(setShowBusinessInputFalse());
  const trueBusinessInput = () => dispatch(setShowBusinessInputTrue());

  //departmentIconReducer
  const departmentIcon = useSelector(
    (state: RootState) => state.departmentIconReducer.departmentIconValue
  );
  const setToggleDepartmentIcon = () => dispatch(setDepartmentIconToggle());
  const falseDepartmentIcon = () => dispatch(setDepartmentIconFalse());
  const trueDepartmentIcon = () => dispatch(setDepartmentIconTrue());

  //showDepartmentInputReducer
  const showDepartmentInput = useSelector(
    (state: RootState) =>
      state.showDepartmentInputReducer.showDepartmentInputValue
  );
  const setToggleDepartmentInput = () =>
    dispatch(setShowDepartmentInputToggle());
  const falseDepartmentInput = () => dispatch(setShowDepartmentInputFalse());
  const trueDepartmentInput = () => dispatch(setShowDepartmentInputTrue());


  //toggleName function
  const toggleName = () => {
    setToggleNameInput();
    setToggleUserInput();
    setToggleNameIcon();
    if (
      showPositionInput ||
      showBusinessInput ||
      showDepartmentInput === true
    ) {
      falseUserInput();
      falseBusinessInput();
      falsePositionInput();
      falseDepartmentInput();
      trueNameInput();
      trueNameIcon();
      falsePositionIcon();
      falseBusinessIcon();
      falseDepartmentIcon();
    }
  };
  //nameIconToggle function
  const toggleIconName = () => {
    setToggleNameIcon();
    if (
      showPositionInput ||
      showBusinessInput ||
      showDepartmentInput === true
    ) {
      falseUserInput();
    }
  };

  //nameIconToggleRemove function
  const nameIconToggleRemove = () => {
    trueUserInput();

    falseNameInput();
  };
  //nameIconToggleAdd function
  const nameIconToggleAdd = () => {
    falseUserInput();

    trueNameInput();
  };


  //togglePosition function
  const togglePosition = () => {
    setTogglePositionInput();
    setToggleUserInput();
    setTogglePositionIcon();
    if (showNameInput || showBusinessInput || showDepartmentInput === true) {
      falseUserInput();
      falseBusinessInput();
      falseDepartmentInput();
      falseNameInput();
      truePositionInput();
      falseNameIcon();
      truePositionIcon();
      falseBusinessIcon();
      falseDepartmentIcon();
    }
  };
  //togglePositionInput function
  const togglePositionInput = () => {
    setTogglePositionIcon();
    if (showNameInput || showBusinessInput || showDepartmentInput === true) {
      falseUserInput();
    }
  };
  
  //positionIconToggleRemove function
  const positionIconToggleRemove = () => {
    trueUserInput();
    falsePositionInput();
  };
  //positionIconToggleAdd function
  const positionIconToggleAdd = () => {
    falseUserInput();
    truePositionInput();
  };

 
  //togglePosition function
  const toggleBusiness = () => {
    setToggleUserInput();
    setToggleBusinessIcon();
    setToggleBusinessInput()
    if (showNameInput || showPositionInput || showDepartmentInput === true) {
      falseUserInput();
      falseDepartmentInput();
      falsePositionInput();
      falseNameInput();
      trueBusinessInput();
      falseNameIcon();
      falsePositionIcon();
      trueBusinessIcon();
      falseDepartmentIcon();
    }
  };
  //toggleBusinessInput function
  const toggleBusinessInput = () => {
    setToggleBusinessIcon();
    if (showNameInput || showPositionInput || showDepartmentInput === true) {
      falseUserInput();
    }
  };
  //businessIconToggleRemove function
  const businessIconToggleRemove = () => {
    trueUserInput();
    falseBusinessInput();
  };
  //businessIconToggleAdd function
  const businessIconToggleAdd = () => {
    falseUserInput();
    trueBusinessInput();
  };


  //toggleDepartment function
  const toggleDepartment = () => {
    setToggleDepartmentInput();
    setToggleUserInput();
    setToggleDepartmentIcon();

    if (showNameInput || showBusinessInput || showPositionInput === true) {
      falseUserInput();
      falseBusinessInput();
      falsePositionInput();
      falseNameInput();
      trueDepartmentInput();
      falseNameIcon();
      falsePositionIcon();
      falseBusinessIcon();
      trueDepartmentIcon();
    }
  };
  //toggleDepartmentInput function
  const toggleDepartmentInput = () => {
    setToggleDepartmentIcon();
    if (showNameInput || showBusinessInput || showPositionInput === true) {
      falseUserInput();
    }
  };
  //departmentIconToggleRemove function
  const departmentIconToggleRemove = () => {
    trueUserInput();
    falseDepartmentInput();
  };
  //departmentIconToggleAdd function
  const departmentIconToggleAdd = () => {
    falseUserInput();
    trueDepartmentInput();
  };

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
              {showSearchUserInput && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Search User"
                  />
                </div>
              )}
              {showNameInput && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Name"
                  />
                </div>
              )}

              {showPositionInput && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Position"
                  />
                </div>
              )}
              {showBusinessInput && (
                <div className={UserSearchStyle.searchInputContainer}>
                  <input
                    type="text"
                    className={UserSearchStyle.searchInput}
                    placeholder="Business Unit"
                  />
                </div>
              )}
              {showDepartmentInput && (
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
                    <div className="flex items-center justify-between ">
                      <p
                        className={
                          showNameInput
                            ? UserSearchStyle.dropdownContentTrue
                            : UserSearchStyle.dropdownContent
                        }
                        onClick={toggleName}>
                        Name
                      </p>
                      <span className="cursor-pointer" onClick={toggleIconName}>
                        {nameIcon ? (
                          <IoIosRemove onClick={nameIconToggleRemove} />
                        ) : (
                          <IoIosAdd onClick={nameIconToggleAdd} />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p
                        className={
                          showPositionInput
                            ? UserSearchStyle.dropdownContentTrue
                            : UserSearchStyle.dropdownContent
                        }
                        onClick={togglePosition}>
                        Position
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={togglePositionInput}>
                        {positionIcon ? (
                          <IoIosRemove onClick={positionIconToggleRemove} />
                        ) : (
                          <IoIosAdd onClick={positionIconToggleAdd} />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p
                        className={
                          showBusinessInput
                            ? UserSearchStyle.dropdownContentTrue
                            : UserSearchStyle.dropdownContent
                        }
                        onClick={toggleBusiness}>
                        Business Unit
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={toggleBusinessInput}>
                        {businessIcon ? (
                          <IoIosRemove onClick={businessIconToggleRemove} />
                        ) : (
                          <IoIosAdd onClick={businessIconToggleAdd} />
                        )}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p
                        className={
                          showDepartmentInput
                            ? UserSearchStyle.dropdownContentTrue
                            : UserSearchStyle.dropdownContent
                        }
                        onClick={toggleDepartment}>
                        Department
                      </p>
                      <span
                        className="cursor-pointer"
                        onClick={toggleDepartmentInput}>
                        {departmentIcon ? (
                          <IoIosRemove onClick={departmentIconToggleRemove} />
                        ) : (
                          <IoIosAdd onClick={departmentIconToggleAdd} />
                        )}
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
