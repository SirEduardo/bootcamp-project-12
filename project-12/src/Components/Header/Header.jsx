import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-20 bg-slate-500 flex items-center justify-center">
      <nav className="w-full">
        <ul className="w-full flex justify-around font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
            >
              Task List
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-task"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-black" : ""
              }
            >
              New Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
