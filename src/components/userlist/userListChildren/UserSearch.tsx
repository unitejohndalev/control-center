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
  setNameIconToggle,
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

  //showSearchUserInput state
  const [showSearchUserInput, setShowSearchUserInput] = useState(true);

  //store all dispatch in a variable to avoid repetitive calls of dispatch

  //showSearchUserInputReducer
  // const showSearchUserInput = useSelector(
  //   (state: RootState) =>
  //     state.showSearchUserInputReducer.showSearchUserInputValue
  // );
  const setToggleUserInput = () => dispatch(setShowSearchUserInputToggle());
  const falseUserInput = () => dispatch(setShowSearchUserInputFalse());
  const trueUserInput = () => dispatch(setShowSearchUserInputTrue());

  //nameIconReducer
  // const nameIcon = useSelector(
  //   (state: RootState) => state.nameIconReducer.nameIconValue
  // );
  const setToggleNameIcon = () => dispatch(setNameIconToggle());
  const falseNameIcon = () => dispatch(setNameIconToggle());
  const trueNameIcon = () => dispatch(setNameIconToggle());

  //showNameInputReducer
  // const showNameInput = useSelector(
  //   (state: RootState) =>
  //     state.showNameInputReducer.showNameInputValue
  // );
  const setToggleNameInput = () => dispatch(setShowNameInputToggle());
  const falseNameInput = () => dispatch(setShowNameInputFalse());
  const trueNameInput = () => dispatch(setShowNameInputTrue());

  //positionIconReducer
  // const positionIcon = useSelector(
  //   (state: RootState) =>
  //     state.positionIconReducer.positionIconValue
  // );
  const setTogglePositionIcon = () => dispatch(setPositionIconToggle());
  const falsePositionIcon = () => dispatch(setPositionIconFalse());
  const truePositionIcon = () => dispatch(setPositionIconTrue());

  //showPositionInputReducer
  // const showPositionInput = useSelector(
  //   (state: RootState) =>
  //     state.showPositionInputReducer.showPositionInputValue
  // );
  const setTogglePositionInput = () => dispatch(setShowPositionInputToggle());
  const falsePositionInput = () => dispatch(setShowPositionInputFalse());
  const truePositionInput = () => dispatch(setShowPositionInputTrue());

  //businessIconReducer
  // const businessIcon = useSelector(
  //   (state: RootState) =>
  //     state.businessIconReducer.businessIconValue
  // );
  const setToggleBusinessIcon = () => dispatch(setBusinessIconToggle());
  const falseBusinessIcon = () => dispatch(setBusinessIconFalse());
  const trueBusinessIcon = () => dispatch(setBusinessIconTrue());

  //showBusinessInputReducer
  // const showBusinessInput = useSelector(
  //   (state: RootState) =>
  //     state.showBusinessInputReducer.showBusinessInputValue
  // );
  const setToggleBusinessInput = () => dispatch(setShowBusinessInputToggle());
  const falseBusinessInput = () => dispatch(setShowBusinessInputFalse());
  const trueBusinessInput = () => dispatch(setShowBusinessInputTrue());

  //departmentIconReducer
  // const departmentIcon = useSelector(
  //   (state: RootState) =>
  //     state.departmentIconReducer.departmentIconValue
  // );
  const setToggleDepartmentIcon = () => dispatch(setDepartmentIconToggle());
  const falseDepartmentIcon = () => dispatch(setDepartmentIconFalse());
  const trueDepartmentIcon = () => dispatch(setDepartmentIconTrue());

  //showDepartmentInputReducer
  // const showDepartmentInput = useSelector(
  //   (state: RootState) =>
  //     state.showDepartmentInputReducer.showDepartmentInputValue
  // );
  const setToggleDepartmentInput = () => dispatch(setShowDepartmentInputToggle());
  const falseDepartmentInput = () => dispatch(setShowDepartmentInputFalse());
  const trueDepartmentInput = () => dispatch(setShowDepartmentInputTrue());
  useEffect(() => {
    //showSearchUserInputReducer
    setToggleUserInput();
    falseUserInput();
    trueUserInput();

    //nameIconReducer
    setToggleNameIcon();
    falseNameIcon();
    trueNameIcon();

    //showNameInputReducer
    setToggleNameInput();
    falseNameInput();
    trueNameInput();

    //positionIconReducer
    setTogglePositionIcon();
    falsePositionIcon();
    truePositionIcon();

    //showPositionInputReducer
    setTogglePositionInput();
    falsePositionInput();
    truePositionInput();

    //businessIconReducer
    setToggleBusinessIcon();
    falseBusinessIcon();
    trueBusinessIcon();

    //showBusinessInputReducer
    setToggleBusinessInput();
    falseBusinessInput();
    trueBusinessInput();

    //departmentIconReducer
    setToggleDepartmentIcon();
    falseDepartmentIcon();
    trueDepartmentIcon();

    //showDepartmentInputReducer
    setToggleDepartmentInput();
    falseDepartmentInput();
    trueDepartmentInput();
  }, []);
  //NameIcon state
  const [nameIcon, setNameIcon] = useState(false);
  //showNameInput state
  const [showNameInput, setShowNameInput] = useState(false);

  //toggleName function
  const toggleName = () => {
    setShowNameInput((prev) => !prev);
    setShowSearchUserInput((prev) => !prev);

    setNameIcon((prev) => !prev);
    if (
      showPositionInput ||
      showBusinessInput ||
      showDepartmentInput === true
    ) {
      setShowSearchUserInput(false);

      setShowBusinessInput(false);
      setShowPositionInput(false);
      setShowDepartmentInput(false);
      setShowNameInput(true);
      setNameIcon(true);
      setPositionIcon(false);
      setBusinessIcon(false);
      setDepartmentIcon(false);
    }
  };
  //nameIconToggle function
  const toggleIconName = () => {
    setNameIcon((prev) => !prev);
    if (
      showPositionInput ||
      showBusinessInput ||
      showDepartmentInput === true
    ) {
      setShowSearchUserInput(false);
    }
  };

  //nameIconToggleRemove function
  const nameIconToggleRemove = () => {
    setShowSearchUserInput(true);

    setShowNameInput(false);
  };
  //nameIconToggleAdd function
  const nameIconToggleAdd = () => {
    setShowSearchUserInput(false);

    setShowNameInput(true);
  };

  //positionIcon state
  const [positionIcon, setPositionIcon] = useState(false);
  //showPositionInput state
  const [showPositionInput, setShowPositionInput] = useState(false);
  //togglePosition function
  const togglePosition = () => {
    setShowPositionInput((prev) => !prev);
    setShowSearchUserInput((prev) => !prev);

    setPositionIcon((prev) => !prev);

    if (showNameInput || showBusinessInput || showDepartmentInput === true) {
      setShowSearchUserInput(false);
      setShowBusinessInput(false);
      setShowDepartmentInput(false);
      setShowNameInput(false);
      setShowPositionInput(true);

      setNameIcon(false);
      setPositionIcon(true);
      setBusinessIcon(false);
      setDepartmentIcon(false);
    }
  };
  //togglePositionInput function
  const togglePositionInput = () => {
    setPositionIcon((prev) => !prev);
    if (showNameInput || showBusinessInput || showDepartmentInput === true) {
      setShowSearchUserInput(false);
    }
  };
  //positionIconToggleRemove function
  const positionIconToggleRemove = () => {
    setShowSearchUserInput(true);
    setShowPositionInput(false);
  };
  //positionIconToggleAdd function
  const positionIconToggleAdd = () => {
    setShowSearchUserInput(false);
    setShowPositionInput(true);
  };

  //businessIcon state
  const [businessIcon, setBusinessIcon] = useState(false);
  //showBusinessInput state
  const [showBusinessInput, setShowBusinessInput] = useState(false);
  //togglePosition function
  const toggleBusiness = () => {
    setShowSearchUserInput((prev) => !prev);
    setBusinessIcon((prev) => !prev);

    if (showNameInput || showPositionInput || showDepartmentInput === true) {
      setShowSearchUserInput(false);
      setShowDepartmentInput(false);
      setShowPositionInput(false);
      setShowNameInput(false);
      setShowBusinessInput(true);
      setNameIcon(false);
      setPositionIcon(false);
      setBusinessIcon(true);
      setDepartmentIcon(false);
    }
  };
  //toggleBusinessInput function
  const toggleBusinessInput = () => {
    setBusinessIcon((prev) => !prev);
    if (showNameInput || showPositionInput || showDepartmentInput === true) {
      setShowSearchUserInput(false);
    }
  };
  //businessIconToggleRemove function
  const businessIconToggleRemove = () => {
    setShowSearchUserInput(true);
    setShowBusinessInput(false);
  };
  //businessIconToggleAdd function
  const businessIconToggleAdd = () => {
    setShowSearchUserInput(false);
    setShowBusinessInput(true);
  };

  //departmentIcon state
  const [departmentIcon, setDepartmentIcon] = useState(false);
  //showDepartmentInput state
  const [showDepartmentInput, setShowDepartmentInput] = useState(false);
  //toggleDepartment function
  const toggleDepartment = () => {
    setShowDepartmentInput((prev) => !prev);
    setShowSearchUserInput((prev) => !prev);
    setDepartmentIcon((prev) => !prev);

    if (showNameInput || showBusinessInput || showPositionInput === true) {
      setShowSearchUserInput(false);
      setShowBusinessInput(false);
      setShowPositionInput(false);
      setShowNameInput(false);
      setShowDepartmentInput(true);
      setNameIcon(false);
      setPositionIcon(false);
      setBusinessIcon(false);
      setDepartmentIcon(true);
    }
  };
  //toggleDepartmentInput function
  const toggleDepartmentInput = () => {
    setDepartmentIcon((prev) => !prev);
    if (showNameInput || showBusinessInput || showPositionInput === true) {
      setShowSearchUserInput(false);
    }
  };
  //departmentIconToggleRemove function
  const departmentIconToggleRemove = () => {
    setShowSearchUserInput(true);
    setShowDepartmentInput(false);
  };
  //departmentIconToggleAdd function
  const departmentIconToggleAdd = () => {
    setShowSearchUserInput(false);
    setShowDepartmentInput(true);
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
