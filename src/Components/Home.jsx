import { href, Link } from "react-router-dom";
import mine from "./images/profile1.jpg";
import GooeyNav from './GooeyNav'

const Home = () => {
    const items = [
      { label: "Skills", href: "/hello" },
      { label: "Projects", href: "#" },
      { label: "Contact", href: "#" },
    ];
  return (
    <div className="text-white  overflow-hidden bg-maincl ">
      <div className="border-b-2 flex justify-center border-white">
        <div className="px-3 py-2  relative" >
  <GooeyNav
    items={items}
    particleCount={15}
    particleDistances={[90, 10]}
    particleR={100}
    initialActiveIndex={0}
    animationTime={600}
    timeVariance={300}
    colors={[1, 2, 3, 1, 2, 3, 1, 4]}
  />
</div>
      </div>

    </div>
  );
};

export default Home;
