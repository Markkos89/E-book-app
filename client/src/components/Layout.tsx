import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav
        className="flex bg-cover border-b-2 border-black"
        style={{
          backgroundImage: "url(/banner-bg.webp)",
        }}
      >
        <div className="text-center p-4 bg-lime-300 text-2xl font-extrabold font-mono">
          E-Book App
        </div>
        <div className="flex flex-row gap-4 align-middle text-center p-2">
          <Link
            to="/"
            className="no-underline text-white hover:bg-lime-400 rounded-lg px-4 bg-lime-700 pt-[26px] text-xl lg:text-base lg:pt-3"
          >
            Home
          </Link>
          <Link
            to="/newbook"
            className="no-underline text-white  hover:bg-lime-400 rounded-lg px-4 bg-lime-700 pt-2 text-xl lg:text-base lg:pt-3"
          >
            Add New Book
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}
