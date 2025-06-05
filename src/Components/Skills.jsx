import GlitchText from './GlitchText';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <h1 className="py-2 text-3xl pb-1 font-bold text-[#0118D8] pt-5">Skills</h1>
      <p className='text-xs text-gray-400 pb-4'>I love diving into new tech and sharpening my development skills every day, constantly pushing myself to build better, smarter, and more meaningful digital experiences.</p>
      {/* <GlitchText
  speed={3}
  enableShadows={true}
  enableOnHover={false}
  className='text-xl'
>
  Skills
</GlitchText> */}
      <div className="overflow-y-scroll pb-5">
        <div>
          <p className="font-semibold text-white/80">Language</p>
          <div className="pt-5">
            <btn className="lg:py-3 lg:px-8 text-xs py-2 px-4 bg-gray-800 text-gray-400 rounded-md">
              JavaScript(ES6)
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-white/80">Frontend</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Reactjs
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              TailwindCss
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              JavaScript
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-white/80">Tools & Libraries</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Reactjs
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              TailwindCss
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              DaisyUI
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Nodejs
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Express
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              JWT
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Firebase
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              VScode
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Git
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              GitHub
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Axios
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-white/80">Backend</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Nodejs
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Express
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Firebase
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold text-white/80">Database & Hosting</p>
          <div className="pt-2 grid grid-cols-4 gap-2">
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              MongoDB
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Github Pages
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Netlify
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Vercel
            </btn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
