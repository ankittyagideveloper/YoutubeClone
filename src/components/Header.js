import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, getSearchQuery } from "../utils/appSlice";
import { cacheResults } from "../utils/searchSlice";
import { CiSearch } from "react-icons/ci";
import { RxCounterClockwiseClock } from "react-icons/rx";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((state) => state.search);
  const handleCLick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setShowSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    console.log("timerCreated", timer);
    return () => {
      console.log("cleared Time", timer);
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    await fetch(process.env.REACT_APP_YOUTUBE_VIDEOS_SEARCH_API + searchQuery)
      .then((res) => res.json())
      .then((data) => {
        setSuggestions(data[1]);
        dispatch(cacheResults({ [searchQuery]: data[1] }));
      });
  };

  return (
    <div className=" grid grid-flow-col p-1 md:p-2 mb-2 w-full shadow-lg md:shadow-none fixed bg-white h-12 md:h-18 flex items-center">
      <div className="flex col-span-2 ">
        <img
          onClick={() => handleCLick()}
          className="h-6 cursor-pointer hidden md:flex"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0OBQgMAAWlpKQpJSaenZ309PUAAAAIAAD8/Pz5+fna2tqop6dvbW1oZmevrq4tKivFxMQYExRiYGC+vr7Dc4WrAAABB0lEQVR4nO3cS3LCMBAFQGIIIBPbhN/9jxqSyiIsTUnlydB9g1eSNV5MvdUKAAAAAAAAAAAAAAAAXtEwvscwDk3yHabSb2Loy/TRIOHUv8XRH+sHHMrSqR6U+hd1jHSE90P8lHC2/Lc0/0vzMy3WMdynxaFBwu+Jv4uh0cQHAAAAAAAAAIB59jG0ijdcT9sYTtcmK0PncumiuJRz/YD7bbf0ut4f3br+GvQt2PblrXrC3WbpUA/6sXrC/GeY/zvM/5aGmofHZiu0S//M/GoVDwAAAAAAAAAAZsjeuRerN1HL7hPy95fm76DNnzD/Lc3/0rxAJ3v+Xn0AAAAAAAAAAAAAAAD4T74AYhs1O+vt3ioAAAAASUVORK5CYII="
          alt="menu-icon"
        />
        <a href="/">
          <img
            className="hidden md:flex h-6  mx-2 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="youtube-logo"
          />
        </a>
        <a href="/">
          <img
            className=" md:hidden  h-8  mx-2 cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <form
        className="col-span-10 relative"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(getSearchQuery(searchQuery));
        }}
      >
        <div className="flex">
          <input
            placeholder="Search"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-5 w-1/2 border border-gray-400 rounded-l-full p-1 focus:border focus:border-blue-500 outline-none"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            tyoe="submit"
            className="rounded-r-full border border-gray-400 md:px-6 md:py-2  bg-gray-100"
          >
            <div>
              <CiSearch />
            </div>
          </button>
        </div>

        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute  bg-white w-96 py-2 m-2 rounded-lg border border-gray-100 shodow-lg">
            <ul>
              {suggestions.length > 0 &&
                suggestions.map((suggestion) => (
                  <li
                    key={suggestion}
                    className="m-2 z-10 hover:bg-gray-100 py-2 px-3 shadow-sm flex items-center font-semibold"
                    onMouseDown={() => {
                      setSearchQuery(suggestion);
                      dispatch(getSearchQuery(suggestion));
                    }}
                  >
                    <div className="pr-3">
                      <RxCounterClockwiseClock />
                    </div>
                    {suggestion}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </form>
      <div className="col-span-1">
        <img
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="user-icon"
        />
      </div>
    </div>
  );
};

export default Header;
