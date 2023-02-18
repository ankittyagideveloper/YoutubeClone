import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { MdHomeFilled } from "react-icons/md";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //early return pattern
  const screenSize = window.screen.width;
  const dispatch = useDispatch();
  useEffect(() => {
    if (screenSize < 400) dispatch(closeMenu());
  }, [screenSize]);
  if (!isMenuOpen) return null;
  return (
    <div className="shadow-lg w-56 h-[85vh] p-3  bg-white mt-28 md:mt-12">
      <ul>
        <li className="hover:bg-gray-100 p-2 rounded-lg p-2 mb-1 ">
          <Link to="/" className="flex items-center">
            <div className="pr-6">
              <MdHomeFilled size="23px" />
            </div>
            <div className="font-semibold text-sm">Home</div>
          </Link>
        </li>

        <li className="hover:bg-gray-100 p-2 rounded-lg p-2 mb-1">
          <Link to="/" className="flex items-center">
            <div className="pr-6">
              <MdHomeFilled size="23px" />
            </div>
            <div className="font-semibold text-sm">Shorts</div>
          </Link>
        </li>

        <li className="hover:bg-gray-100 p-2 rounded-lg p-2 mb-1">
          <Link to="/" className="flex items-center">
            <div className="pr-6">
              <MdHomeFilled size="23px" />
            </div>
            <div className="font-semibold text-sm">Videos</div>
          </Link>
        </li>

        <li className="hover:bg-gray-100 p-2 rounded-lg p-2 mb-1">
          <Link to="/" className="flex items-center">
            <div className="pr-6">
              <MdHomeFilled size="23px" />
            </div>
            <div className="font-semibold text-sm">Live</div>
          </Link>
        </li>
      </ul>
      <h1 className="font-bold">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Trending</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
