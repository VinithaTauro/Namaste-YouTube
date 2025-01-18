import { useDispatch, useSelector } from "react-redux";
import { toggleMenuBar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { searchSuggestions } from "../utils/searchSlice";

const Head = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  const handleToggleMenuBar = () => {
    dispatch(toggleMenuBar());
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery][0]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchQuery
    );
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      searchSuggestions({
        [searchQuery]: [json[1]],
      })
    );
  };
  return (
    <div className="p-6 grid grid-flow-col shadow-lg ">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0evWy6vmua96UkF8RqHQv-SoBcuu3V9fwZw&s"
          onClick={handleToggleMenuBar}
        />
        <a href="/">
          <img
            className="h-8 ml-2"
            alt="Youtube-logo"
            src="https://t4.ftcdn.net/jpg/06/09/13/31/360_F_609133122_u5vaiyCHsL5UqtdrSNrV5llL2JC1oYWi.jpg"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 py-2 ">
        <div>
          <input
            className="w-1/2 border rounded-l-full px-4 py-2 ml-100"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="bg-gray-200 rounded-r-full px-4 py-2 ">🔍</button>
        </div>
        {showSuggestions && (
          <div className=" rounded-lg absolute bg-white  w-[37rem] p-2  mx-2 border border-gray-100 ">
            <ul>
              {suggestions.map((suggesion) => (
                <li key={suggesion} className="py-2">
                  {suggesion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa7tBFCEp6gP1NhOcGkP1xrcJOkfkhLVCXOA&s"
        />
      </div>
    </div>
  );
};

export default Head;
