import { useDispatch } from "react-redux";
import { toggleMenuBar } from "../utils/appSlice";
import { Link } from "react-router";

const Head = () => {
  const dispatch = useDispatch();
  const handleToggleMenuBar = () => {
    dispatch(toggleMenuBar());
  };
  return (
    <div className="p-6 grid grid-flow-col shadow-lg">
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZYY2AIAedQFVaPuihmQqipxOijVXLCIJtA&s"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 py-2 ">
        <input
          className="w-1/2 border border-gray-700 rounded-l-full p-2 ml-100"
          type="text"
        />
        <button className="bg-gray-200 rounded-r-full px-4 py-2">🔍</button>
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
