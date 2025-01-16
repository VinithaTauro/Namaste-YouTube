import { useSelector } from "react-redux";
import { Link } from "react-router";

const Sidebar = () => {
  const istoggleMenuBar = useSelector((store) => store.app.showMenuBar);
  if (!istoggleMenuBar) return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

      <div className="mt-5">
        <h1 className="font-bold">Explore</h1>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Live</li>
          <li>Movies</li>
        </ul>
      </div>
      <div className="mt-5">
        <ul>
          <li>History</li>
          <li>Watch Later</li>
          <li>Playlists</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
