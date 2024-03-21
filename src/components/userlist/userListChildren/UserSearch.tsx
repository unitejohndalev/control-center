import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store/store";
import { MdSearch } from "react-icons/md";
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import {
  setSearchOptions,
  setSearchOptionsFalse,
} from "../../../redux/state/userListState";

//import module style css
import UserSearchStyle from "../UserList.module.css";
import { useEffect, useRef } from "react";

const UserSearch = () => {
  const dispatch = useDispatch();

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
          <div className="w-[5%]"></div>
          <div className={UserSearchStyle.formContainer}>
            <form
              className={UserSearchStyle.formStyle}
              ref={searchDropDownContainerRef}>
              <button className={UserSearchStyle.searchIcon}>
                <MdSearch />
              </button>
              <div className={UserSearchStyle.searchInputContainer}>
                <input
                  type="text"
                  className={UserSearchStyle.searchInput}
                  placeholder="Search User"
                />
              </div>
              <div className={UserSearchStyle.searchDropdownIcon}>
                {searchOptionHandler ? (
                  <MdArrowDropUp onClick={searchOptionHandlerToggle} />
                ) : (
                  <MdArrowDropDown onClick={searchOptionHandlerToggle} />
                )}
              </div>
              {searchOptionHandler && (
                <div className={UserSearchStyle.searchDropdownContentContainer}>
                  <div className={UserSearchStyle.dropdownContentContainer}>
                    <p className={UserSearchStyle.dropdownContent}>Name</p>
                    <p className={UserSearchStyle.dropdownContent}>Position</p>
                    <p className={UserSearchStyle.dropdownContent}>
                      Business Unit
                    </p>
                    <p className={UserSearchStyle.dropdownContent}>
                      Department
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
          <div className="w-[5%]"></div>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
