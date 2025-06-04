import { href, Link, Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import mine from "./images/profile1.jpg";


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
    <Outlet></Outlet>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay ">
      
    </label>
    
    <ul className="menu bg-[#001F3F] text-white min-h-full w-80 p-4">
    <img src={mine} className="w-20 h-20 object-cover rounded-full border mb-5" alt="profile" />
      {/* Sidebar content here */}
      <li><a>Projects</a></li>
      <li><a>Skills</a></li>
      <li><a>Contact</a></li>
    </ul>
    <p className="fixed bottom-1 left-3 text-gray-500 text-xs">Build with React && Tailwind</p>
  </div>
  
</div>
      </div>

    </div>
  );
};

export default Home;
