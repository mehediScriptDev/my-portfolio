import image from "./images/profile1.jpg";
import 'animate.css';
import { Wave } from "react-animated-text";
import { FaRegHandPointer } from "react-icons/fa6";
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import FuzzyText from './FuzzyText';
const Banner = () => {
  return (
    <section className="pt-3 min-h-screen flex flex-col justify-center items-center">
      <div className="flex justify-center py-10 lg:py-3 items-center">
        <img
          className="lg:w-52 lg:h-52 w-40 h-40 hover:border-textcl border-gray-500 border-2 object-cover rounded-full"
          src={image}
          alt="myimage"
        />
      </div>
      <div className="space-y-1 w-11/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-4xl font-bold hover:text-gray-500">Mehedi</h1>
        <h1 className="animate__animated animate__swing text-center text-2xl font-bold text-textcl">
          {" "}
          {/* <Wave effectChange={3.0} text="EXAMPLE TEXT" /> */}
          <FuzzyText 
  baseIntensity={0.01} 
  
 
>
  Junior Frontend Developer
</FuzzyText>
        </h1>
        
        <div className="text-gray-500 min-h-[100px] lg:min-h-[90px] font-semibold text-center text-xs lg:text-sm max-w-2xl">
          <Typewriter
          onInit={(typewriter) => {
    typewriter
      .typeString(
        "I'm a passionate frontend developer skilled in crafting responsive, elegant user interfaces with React, Tailwind CSS, and JavaScript. With a strong foundation in mern-stack principles, I focus on clean code, intuitive UX, and performance optimization. I'm dedicated to building meaningful digital experiences, always learning, and ready to collaborate. Let’s bring your ideas to life efficiently, creatively, and beautifully."
      )
      .start();
  }}
            options={{
              
              autoStart: true,
              loop: false,
              delay: 1,
              deleteSpeed: 0,
             
            }}
          />
        </div>
      </div>
      <div>
        <div className="mt-1">
          <div className="flex justify-center items-center gap-2 md:gap-3 mt-3">
            <Link
              to="https://github.com/mehediScriptDev"
              target="_blank"
              className="bg-littlebg hover:text-textcl text-xl text-gray-500 duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaGithub></FaGithub>
            </Link>
            <Link
              to="https://www.linkedin.com/in/mehedi-mehedi-09a088349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              className="bg-littlebg hover:text-textcl text-xl text-gray-500 duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaLinkedin></FaLinkedin>
            </Link>
            <Link
              to="https://x.com/mehediscript_x"
              target="_blank"
              className="bg-littlebg hover:text-textcl text-xl text-gray-500 duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaX></FaX>
            </Link>
            <Link
              to="https://www.facebook.com/mehediScript404"
              target="_blank"
              className="bg-littlebg hover:text-textcl text-xl text-gray-500 duration-200 shadow-md px-3 py-3 rounded-full"
            >
              <FaFacebook></FaFacebook>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center mt-1">
          
  <button className="btn btn-md px-5 rounded-md hover:text-white bg-textcl font-semibold duration-300 hover:bg-gray-500 text-white border-transparent">
            Resume <BsDownload />
          </button>

        </div>
      </div>
      <div className="flex justify-center w-full items-center mt-3 ">
        <button className="btn w-full sm:w-full rounded-none hover:text-white text-gray-800 duration-300 bg-gray-900 hover:bg-textcl  shadow-none border-transparent">
           View Portfolio <FaRegHandPointer />
        </button>
      </div>
    </section>
  );
};

export default Banner;
