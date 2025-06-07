import { href, Link, NavLink, Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import mine from "./images/profile1.png";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white  overflow-hidden bg-primary ">
      <div className=" flex justify-start w-full h-full">
        <div className="drawer sm:drawer-open lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-start justify-start">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn text-white shadow-none border-transparent bg-transparent drawer-button lg:hidden"
            >
              <HiMenu className="text-white p-1 rounded-md text-2xl bg-anotherbg" />
            </label>
            <div className="w-11/12 grid lg:grid-cols-12 sm:grid-cols-12 xl:grid-cols-12 grid-cols-4 md:grid-cols-7  mx-auto h-full overflow-y-auto">
            <div className="lg:col-span-4 xl:col-span-3 sm:col-span-4 md:col-span-3 hidden sm:block lg:block"></div>
              <div className="lg:col-span-8 xl:col-span-9 sm:col-span-8 md:col-span-4 col-span-4">
            <Outlet></Outlet>
  </div>  
            </div>
        </div>
          <div className="drawer-side fixed top-1 left-0 bottom-1 h-screen">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu bg-secondary  text-[18px] font-sans fixed top-1 left-0 bottom-1 text-gray-400 min-h-full w-80 p-4 ">
              <img
                src={mine}
                className="w-20 h-20 object-cover rounded-full border-2 border-textcl mb-5"
                alt="profile"
              />
              {/* Sidebar content here */}
              <li>
                <NavLink to={"/"} end>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to={"/projects"}>Projects</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
            <p className="fixed bottom-1 left-3 text-gray-300 text-xs">
              Build with{" "}
              <span className="font-semibold">React && Tailwind</span>{" "}
              
            </p>
            <p className="bottom-1 z-20 fixed left-72 lg:flex"><a
              href="https://github.com/mehediScriptDev"
              target="_blank"
              
            >
              <FaGithub className="text-xl " />
            </a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
