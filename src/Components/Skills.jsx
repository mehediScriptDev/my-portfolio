const Skills = () => {
  return (
    <div className="min-h-screen">
      <h1 className="py-2 text-2xl pb-3 font-bold text-white/80">Skills</h1>
      <div className="overflow-y-scroll pb-5">
        <div>
          <p className="font-semibold">Language</p>
          <div className="pt-5">
            <btn className="lg:py-3 lg:px-8 text-sm flex items-center py-2 px-4 bg-gray-800 text-gray-400 rounded-md">
              JavaScript(ES6)
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold">Frontend</p>
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
          <p className="font-semibold">Tools & Libraries</p>
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
              Reactjs
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Reactjs
            </btn>
            <btn className="lg:py-3 py-1 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              VScode
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              Git
            </btn>
            <btn className="lg:py-3 text-xs flex items-center justify-center lg:px-8 bg-gray-800 text-gray-400 text-center rounded-md">
              JavaScript
            </btn>
          </div>
        </div>
        <div className="pt-6">
          <p className="font-semibold">Backend</p>
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
          <p className="font-semibold">Database & Hosting</p>
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
