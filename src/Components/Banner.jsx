import image from "./images/profile1.jpg";
import { FaFacebook, FaGithub, FaLinkedin, FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";
import Typewriter from 'typewriter-effect';

const Banner = () => {
  return (
    <section className="pt-3">
      <div className="flex justify-center items-center">
        <img
          className="lg:w-52 lg:h-52 w-40 h-40 border-textcl border-2 object-cover rounded-full"
          src={image}
          alt="myimage"
        />
      </div>
      <div className="space-y-1 w-11/12 mx-auto flex flex-col justify-center items-center">
        <h1 className="text-white text-center text-4xl font-bold">Mehedi</h1>
        <h1 className=" text-center text-2xl font-bold text-textcl">
          Junior Frontend Developer
        </h1>
        <div className="text-white text-center text-xs lg:text-sm max-w-2xl">
            <Typewriter
  options={{
    strings: ['As a dedicated full-stack developer, I craft scalable, user-centric applications from front to back. I specialize in building sleek, responsive interfaces using React, Next.js and powerful backends with Node.js, Express, and MongoDB. Passionate about clean code, performance optimization, and continuous learning, Im always ready to bring ideas to life. Lets collaborate and create something extraordinary!'],
    autoStart: true,
    loop: true,
    delay: 30,
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
            <button className="btn btn-md px-5 rounded-md hover:text-white bg-textcl font-semibold duration-300 hover:bg-gray-500 text-white border-transparent">Resume <BsDownload /></button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
