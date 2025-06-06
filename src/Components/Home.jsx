import { href, Link, NavLink, Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import mine from "./images/profile1.png";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <div className="text-white  overflow-hidden bg-maincl ">
      <div className=" flex justify-start w-full h-full">
        <div className="drawer sm:drawer-open lg:drawer-open ">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-start justify-start">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn text-white shadow-none border-transparent bg-transparent drawer-button lg:hidden"
            >
              <HiMenu className="" />
            </label>
            <div className="w-11/12 grid grid-cols-4  mx-auto h-full overflow-y-auto">
            <div className="lg:col-span-1 hidden sm:block lg:block"></div>
              <div className="lg:col-span-3  col-span-4">
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

            <ul className="menu bg-[#191919] text-[18px] font-sans fixed top-1 left-0 bottom-1 text-gray-400 min-h-full w-80 p-4 ">
              <img
                src={mine}
                className="w-20 h-20 object-cover rounded-full border-2 border-textcl mb-5"
                alt="profile"
              />
              {/* Sidebar content here */}
              <li>
                <NavLink to={"/portfolio"} end>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio/projects"}>Projects</NavLink>
              </li>
              <li>
                <NavLink to={"/portfolio/contact"}>Contact</NavLink>
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
