import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-indigo-600 shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="h-20 flex items-center justify-center">
          <ul className="flex space-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-white font-semibold text-lg transition duration-300 ease-in-out
               ${
                 isActive
                   ? "border-b-2 border-white"
                   : "hover:text-purple-200 hover:border-b-2 hover:border-purple-200"
               }`
                }
              >
                Lista de Tareas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/new-task"
                className={({ isActive }) =>
                  `text-white font-semibold text-lg transition duration-300 ease-in-out
                ${
                  isActive
                    ? "border-b-2 border-white"
                    : "hover:text-purple-200 hover:border-b-2 hover:border-purple-200"
                }`
                }
              >
                Nueva Tarea
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
