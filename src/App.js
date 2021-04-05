
function App() {
  return (
    <div className="m-8">
      <header>
        <ul>
          <li>Home</li>
          <li>Skills</li>
          <li>Design</li>
          <li>Projects</li>
        </ul>
      </header>
      <h1 className="text-6xl">Hi, it's me, Bach, your friendly coder. </h1>
      <div className="p-4 bg-gray-500 text-gray-100">
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

      <div>
        <button>Contact Me</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
        <button>GitHub</button>
        <button>Resume</button>
      </div>

      <h2 className="text-3xl">Skills</h2>
      <div>
        <h3 className="text-2xl">Frontend</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Ruby</li>
          <li>React</li>
        </ul>

        <h3 className="text-2xl">Backend</h3>
        <span className="text-xs">Heh. Bach-end. Sorry.</span>
        <ul>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>MySQL</li>
        </ul>

        <h3 className="text-2xl">Version Control</h3>
        <ul>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitLab</li>
        </ul>

        <h3 className="text-2xl">Remote Work</h3>
        <ul>
          <li>Slack</li>
          <li>Zoom</li>
        </ul>

        <h3 className="text-3xl">Design</h3>
        <ul>
          <li>Figma</li>
          <li>Balsamiq</li>
          <li>Adobe Illustrator</li>
          <li>Affinity Designer</li>
        </ul>
      </div>

      <div>
        <h2 className="text-3xl">Projects</h2>
        <h4>LifeBand</h4>
        <h4>React Here, Tryna Function</h4>
        <h4>Tic-Tac-Toe</h4>
        <h4>Pig Latin</h4>
        <h4>Blog App</h4>
      </div>
    </div>
  )
}

export default App;
