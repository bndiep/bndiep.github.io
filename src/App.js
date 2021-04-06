
function App() {
  return (
    <div className="mx-8 mt-4">
      <header>
        <ul className="flex flex-row justify-end">
          <li className="p-4"><a href="/">Home</a></li>
          <li className="p-4"><a href="#skills">Skills</a></li>
          <li className="p-4"><a href="#projects">Projects</a></li>
          <li className="p-4"><a href="">Art</a></li>
        </ul>
      </header>
      <h1 className="p-12 w-96 text-6xl">
        Hi, I'm <span className="font-bold">Bach</span>, your friendly coder.
      </h1>

      <div className="p-8 bg-gray-500 text-gray-100 lg:mx-16">
        <p>
          I'm a full stack developer based in San Diego, CA.
          </p>
        <p>
          I'm most interested in how tech and art can brige the connection between people.
          This is what I love most about web development! It is the culimnation of these two concepts:
        </p>
        <p className="italic">
          (1) It's the challenge of making a digital product tangible and (2) also engaging using effective design
          </p>
      </div>

      <div className="p-4 flex justify-around">
        <button>Contact Me</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>GitHub</button>
        <button>Resume</button>
      </div>

      <h2 className="py-2 text-3xl" id="skills">Skills</h2>
      <div className="flex flex-wrap justify-center items-start">
        
        <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
          <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Frontend</h3>
          <ul className="">
            <li className="p-2 border-b-2 border-black rounded-lg">HTML</li>
            <li className="p-2 border-b-2 border-black rounded-lg">CSS</li>
            <li className="p-2 border-b-2 border-black rounded-lg">JavaScript</li>
            <li className="p-2 border-b-2 border-black rounded-lg">Ruby</li>
            <li className="p-2 border-b-2 border-black rounded-lg">React</li>
          </ul>
        </div>
        
        <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
          <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Backend</h3>
          <ul>
            <li className="p-2 border-b-2 border-black rounded-lg">Ruby on Rails</li>
            <li className="p-2 border-b-2 border-black rounded-lg">PostgreSQL</li>
            <li className="p-2 border-b-2 border-black rounded-lg">MySQL</li>
          </ul>
        </div>
        
        <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
          <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Version Control</h3>
          <ul>
            <li className="p-2 border-b-2 border-black rounded-lg">Git</li>
            <li className="p-2 border-b-2 border-black rounded-lg">GitHub</li>
            <li className="p-2 border-b-2 border-black rounded-lg">GitLab</li>
          </ul>
        </div>

        <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
          <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Remote Work</h3>
          <ul>
            <li className="p-2 border-b-2 border-black rounded-lg">Slack</li>
            <li className="p-2 border-b-2 border-black rounded-lg">Zoom</li>
          </ul>
        </div>

        <div className="m-2 w-48 border-t border-l border-r border-black rounded-lg">
          <h3 className="p-2 h-48 text-2xl border-b-2 border-black rounded-lg">Design</h3>
          <ul>
            <li className="p-2 border-b-2 border-black rounded-lg">Figma</li>
            <li className="p-2 border-b-2 border-black rounded-lg">Balsamiq</li>
            <li className="p-2 border-b-2 border-black rounded-lg">Adobe Illustrator</li>
            <li className="p-2 border-b-2 border-black rounded-lg">Affinity Designer</li>
          </ul>
        </div>
      </div>

      <div className="">
        <h2 className="py-2 text-3xl" id="projects">Projects</h2>
        <h4>LifeBand</h4>
        <h4>React Here, Tryna Function</h4>
        <h4>Tic-Tac-Toe</h4>
        <h4>Pig Latin</h4>
        <h4>Blog App</h4>
      </div>

      <footer className="mx-2 text-sm flex justify-center">Designed and built by Bach Diep using React.js and Tailwind CSS</footer>
    </div>
  )
}

export default App;
