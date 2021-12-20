import { Routes, Route, Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex w-full h-11 bg-purple-50 items-center ">
      <NavLink to="/" className="mr-4 active:font-bold">
        home
      </NavLink>
      <NavLink to="/movies" className="mr-4">
        movies
      </NavLink>
      <NavLink to="/users" className="mr-4">
        users
      </NavLink>
    </nav>
  );
}
export default Navbar;
