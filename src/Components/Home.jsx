import { Link } from "react-router-dom";
import mine from "./images/profile1.jpg";
import GooeyNav from './GooeyNav'

const Home = () => {
    const items = [
      { label: "Skills", href: "#" },
      { label: "Projects", href: "#" },
      { label: "Contact", href: "#" },
    ];
  return (
    <div className="text-white flex justify-center overflow-hidden overflow-y-hidden overflow-x-hidden bg-maincl ">
      <div className="px-3 py-2" style={{ height: '600px', position: 'relative' }}>
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
  );
};

export default Home;
