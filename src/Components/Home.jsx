import { href, Link, NavLink, Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import mine from "./images/profile1.jpg";
import { FaGithub } from "react-icons/fa";


const Home = () => {
    
  return (
    <div className="text-white  overflow-hidden bg-maincl ">
      <div className=" flex justify-start">
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-start justify-start">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn text-white border-transparent bg-transparent drawer-button lg:hidden">
      <HiMenu />
    </label>
    <div className="w-11/12 mx-auto">
      <Outlet></Outlet>
    </div>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay ">
      
    </label>
    
    <ul className="menu bg-[#0f172a] text-gray-400 min-h-full w-80 p-4">
    <img src={mine} className="w-20 h-20 object-cover rounded-full border mb-5" alt="profile" />
      {/* Sidebar content here */}
      <li><NavLink to={'/portfolio'}>Skills</NavLink></li>
      <li><NavLink to={'/projects'} >Projects</NavLink></li>
      <li><NavLink to={'/contact'}>Contact</NavLink></li>
    </ul>
    <p className="fixed bottom-1 left-3 text-gray-300 text-xs">Build with <span className="font-semibold">React && Tailwind</span> <FaGithub /></p>
    
  </div>
  
</div>
      </div>

    </div>
  );
};

export default Home;
