import { href, Link, Outlet } from "react-router-dom";
import mine from "./images/profile1.jpg";


const Home = () => {
    
  return (
    <div className="text-white  overflow-hidden bg-maincl ">
      <div className=" flex justify-center">
        
      </div>
<Outlet></Outlet>
    </div>
  );
};

export default Home;
