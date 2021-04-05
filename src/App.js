
function App() {
  return (
    <div className="m-8">
      <header>
        <ul className="flex flex-row justify-between">
          <li><a href="/">Home</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#design">Design</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </header>
      <h1 className="p-12 w-96 text-6xl">
        Hi, I'm <span className="font-bold">Bach</span>, your friendly coder.
      </h1>

      <div className="p-8 bg-gray-500 text-gray-100">
        <p>
          I'm a full stack develop based in San Diego, CA.
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
      <div className="flex flex-wrap justify-center">
        <div className="w-48 p-2 border border-black rounded-lg">
          <h3 className="text-2xl">Frontend</h3>
          <ul>
            <li className="">HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>React</li>
          </ul>
        </div>
        
        <div className="w-48 p-2 border border-black rounded-lg">
          <h3 className="text-2xl">Backend</h3>
          <span className="text-xs">Heh. <span className="italic">"Bach-end"</span>. Sorry.</span>
          <ul>
            <li>Ruby on Rails</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
          </ul>
        </div>
        
        <div className="w-48 p-2 border border-black rounded-lg">
          <h3 className="text-2xl">Version Control</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </div>

        <div className="w-48 p-2 border border-black rounded-lg">
          <h3 className="text-2xl">Remote Work</h3>
          <ul>
            <li>Slack</li>
            <li>Zoom</li>
          </ul>
        </div>

        <div className="w-48 p-2 border border-black rounded-lg">
          <h3 className="text-2xl" id="design">Design</h3>
          <ul>
            <li>Figma</li>
            <li>Balsamiq</li>
            <li>Adobe Illustrator</li>
            <li>Affinity Designer</li>
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

      <footer className="text-sm">Designed and build by Bach Diep using React.js and Tailwind CSS</footer>
    </div>
  )
}

export default App;
