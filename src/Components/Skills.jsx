import GlitchText from './GlitchText';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className="min-h-screen relative">
      <h1 className="py-2 text-3xl pb-1 font-bold text-anotherbg pt-5">Skills</h1>
      <p className='text-xs text-gray-400 pb-4'>I love diving into new tech and sharpening my development skills every day, constantly pushing myself to build better, smarter, and more meaningful digital experiences.</p>
      {/* <GlitchText
  speed={3}
  enableShadows={true}
  enableOnHover={false}
  className='text-xl'
>
  Skills

</GlitchText> */}

<div className='absolute top-1 right-1'>
<p className='dimlight'><RiReactjsFill /></p>
</div>
      <div className="overflow-y-scroll pb-5">
        <div>
          <p className="font-semibold text-textColor/80">Language</p>
          <div className="pt-3">
            <btn className="lg:py-3 lg:px-8 text-xs py-2 px-4 font-semibold bg-anotherbg text-primary border-gray-900 border-2 rounded-md">
              JavaScript(ES6) 
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-textColor/80">Frontend</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 text-primary border-gray-900 border-2 py-1 text-xs font-semibold lg:px-8 bg-anotherbg  text-center rounded-md">
              Reactjs 
            </btn>
            <btn className="lg:py-3 text-xs flex items-center font-semibold justify-center lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              TailwindCss
            </btn>
            <btn className="lg:py-3 text-xs flex items-center font-semibold justify-center lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              JavaScript
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-textColor/80">Tools & Libraries</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Reactjs
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              TailwindCss
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              DaisyUI
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Nodejs
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Express
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              JWT
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Firebase
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              VScode
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Git
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              GitHub
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Axios
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-textColor/80">Backend</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center font-semibold lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Nodejs
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Express
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Firebase
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-textColor/80">Database & Hosting</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs flex items-center font-semibold justify-center lg:px-8 bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              MongoDB
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Github Pages
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Netlify
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 font-semibold bg-anotherbg text-primary border-gray-900 border-2 text-center rounded-md">
              Vercel
            </btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
