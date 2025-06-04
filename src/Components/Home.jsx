import { href, Link, Outlet } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import mine from "./images/profile1.jpg";


const Home = () => {
    
  return (
    <div className="text-white  overflow-hidden bg-maincl ">
      <div className=" flex justify-start">
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-start">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn text-white border-transparent bg-transparent drawer-button lg:hidden">
      <HiMenu />
    </label>
  </div>
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay "></label>
    <ul className="menu bg-[#14274E] text-white min-h-full w-80 p-4">
    <img src={mine} className="w-20 h-20 object-cover rounded-full border mb-5" alt="profile" />
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
      </div>
<Outlet></Outlet>
    </div>
  );
};

export default Home;
