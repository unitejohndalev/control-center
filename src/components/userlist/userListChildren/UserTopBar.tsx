import { useDispatch, useSelector } from "react-redux";
import {
  setAddUserHover,
  setSearchOptionsFalse,
  setShowMore,
  setShowMoreFalse,
  setShowTopBar,
} from "../../../redux/state/userListState";

import { MdTableRows } from "react-icons/md";
import { IoFilterSharp } from "react-icons/io5";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { CgExport } from "react-icons/cg";
import { IoPersonAdd } from "react-icons/io5";
import { GrMoreVertical } from "react-icons/gr";
import { LuMinimize2, LuMaximize2 } from "react-icons/lu";
import { RootState } from "../../../redux/store/store";

//import module style css
import UserTopBarStyle from "../UserList.module.css";
import { setDropDownFalse } from "../../../redux/state/navBarState";

const UserTopBar = () => {
  const dispatch = useDispatch();

  //topBar value
  const showTopBarHandler = useSelector(
    (state: RootState) => state.topBarReducer.showTopBarValue
  );

  //addUserHover value
  const userHoverHandler = useSelector(
    (state: RootState) => state.addUserHoverReducer.addUserHoverValue
  );

  //showMore value
  const showMoreHandler = useSelector(
    (state: RootState) => state.showMoreReducer.showMoreValue
  );

  //navbar dropdown state
  const dropDownHandler = useSelector(
    (state: RootState) => state.navbarDropDownReducer.navbarDropDownValue
  );

  const dropDownHandlerToggle = () => {
    dispatch(setShowMore());
    dispatch(setSearchOptionsFalse());
    dispatch(setDropDownFalse());
  };
  return (
    <div className={UserTopBarStyle.userTopBarContainer}>
      <button
        className={UserTopBarStyle.addUserButton}
        onMouseEnter={() => {
          dispatch(setAddUserHover());
        }}
        onMouseLeave={() => {
          dispatch(setAddUserHover());
        }}>
        <span>
          <IoPersonAdd />
        </span>
        {userHoverHandler && (
          <div className={UserTopBarStyle.addUserText}>ADD USER</div>
        )}
      </button>
      {!dropDownHandler && (
        <>
          <span
            onClick={dropDownHandlerToggle}
            className={UserTopBarStyle.moreIcon}>
            <GrMoreVertical />
          </span>
          {showMoreHandler && (
            <div className={UserTopBarStyle.moreContainer}>
              {showTopBarHandler ? (
                <span
                  onClick={() => {
                    dispatch(setShowTopBar());
                    dispatch(setShowMoreFalse());
                  }}
                  className={UserTopBarStyle.moreCategory}>
                  Minimize
                  <LuMinimize2 />
                </span>
              ) : (
                <span
                  onClick={() => {
                    dispatch(setShowTopBar());
                    dispatch(setShowMoreFalse());
                  }}
                  className={UserTopBarStyle.moreCategory}>
                  Expand
                  <LuMaximize2 />
                </span>
              )}
              <span className={UserTopBarStyle.moreCategory}>
                Export
                <CgExport />
              </span>
              <span className={UserTopBarStyle.moreCategory}>
                Columns
                <TfiLayoutColumn3Alt />
              </span>
              <span className={UserTopBarStyle.moreCategory}>
                Filters
                <IoFilterSharp />
              </span>
              <span className={UserTopBarStyle.moreCategory}>
                Density
                <MdTableRows />
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserTopBar;
