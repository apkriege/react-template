import { NavLink, Outlet } from "react-router";

const Sidebar = () => {
  return (
    <div className="sidebar min-h-screen bg-slate-900 p-4 text-white">
      <h2 className="mb-5 text-xl">Sidebar</h2>
      <nav className="flex flex-col">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/films">Films</NavLink>
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex min-h-screen bg-slate-800">
      <div className="w-[250px]">
        <Sidebar />
      </div>
      <div className="w-full bg-slate-700">
        <Outlet />
      </div>
    </div>
  );
}
