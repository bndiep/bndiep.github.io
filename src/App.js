
function App() {
  return (
    <div className="mt-4">
      <header className="mx-4">
        <ul className="flex flex-row justify-end">
          <li className="p-4"><a href="/">Home</a></li>
          <li className="p-4"><a href="#skills">Skills</a></li>
          <li className="p-4"><a href="#projects">Projects</a></li>
          <li className="p-4"><a href="">Art</a></li>
        </ul>
      </header>
      <div className=" my-24 sm:my-72">
        <h1 className="px-12 w-100 text-6xl">
          Hi, I'm <span className="font-bold">Bach</span>,
        </h1>
        <h1 className="px-12 w-100 text-6xl">
          your friendly coder.
        </h1>
      </div>

      <div className="mx-8 p-8 bg-gray-500 text-gray-100 lg:mx-16">
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

      <div className="px-8 p-4 flex justify-around">
        <a href="mailto:bachdiep.dev@gmail.com">Contact Me</a>
        <a href="www.linkedin.com/in/bachdiep" target="_blank">LinkedIn</a>
        <a href="https://twitter.com/itsabach" target="_blank">Twitter</a>
        <a href="https://github.com/bndiep" target="_blank">GitHub</a>
        <a href="" target="_blank">Resume</a>
      </div>

      <div className="mx-8 py-20">
        <h2 className="py-2 text-3xl font-bold border-b-2" id="skills">Skills</h2>
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
      </div>

      <div className="px-8 py-20 bg-gray-800 text-gray-200">
        <h2 className="py-2 text-3xl font-bold" id="projects">Projects</h2>
        <div className="flex flex-col justify-center items-center">
          
          <div className="py-8">
            <h4 className="text-2xl">LifeBand</h4>
            <p>
              In the case of an emergency or whenever a medical professional requires a patient's medical history, LifeBand can step in to help those in need. Once a profile has been completed with the information the user would like to be known, a QR code will be generated and can be shared to the user's loved ones to redirect them to the user's profile. The profile can include a list of emergency contacts and the user's current daily medications.
            </p>
            <div>
              <a href="https://fathomless-woodland-26064.herokuapp.com/">Demo</a>
              <a href="https://github.com/Life-Science-Rejects/LifeBand">GitHub</a>
            </div>
          </div>
          
          <div className="py-8">
            <h4 className="text-2xl">React Here, Tryna Function</h4>
            <p>
              An homage to E-40's song Function, this party app allows the user to input their budget and number of guests to give them a list of typical party items they will need to purchase. Go over budget, and your guests will have to pitch in.
            </p>
            <a href="https://react-here-tryna-function-app.netlify.app">Demo</a>
            <a href="https://github.com/bndiep/party-app">GitHub</a>
          </div>
          
          <div className="py-8">
            <h4 className="text-2xl">Tic-Tac-Toe</h4>
            <p>
              A simple implementation of Tic-Tac-Toe intended to be played by two users. The app will display the current player to keep track of the user's turns. There are three possible outcomes: X wins, O wins, or a cats game.
              </p>
            <a href="https://tictactoe-app.netlify.app"></a>
            <a href="https://github.com/bndiep/tic-tac-toe-app"></a>
          </div>
          
          <div className="py-8">
            <h4 className="text-2xl">Pig Latin</h4>
            <p>
              An app that allows the user to convert their English words into Pig Latin. Has the ability to translate words starting with 'qu' and words in which 'y' acts a vowel. Maybe you can use this app when sending secret messages!
            </p>
            <a href="https://react-pig-latin-app.netlify.app">Demo</a>
            <a href="https://github.com/bndiep/pig-latin-app">GitHub</a>
          </div>   

          <div className="py-8">
            <h4 className="text-2xl">Blog App</h4>
            <p>
              A simple blog app that demonstrates RESTful routes. The user is able to create, view, edit, and delete a blog post. Strong params exist to ensure the user includes all fields in their blog post submission.
            </p>
            <a href="https://github.com/bndiep/blog-app">GitHub</a>
          </div>

        </div>
      </div>

      <div className="py-16 flex justify-center">
        <p>Interested in contacting me? Reach me <a href="mailto:bachdiep.dev@gmail.com"> here</a>.</p>
      </div>
      
      <footer className="py-2 text-sm flex justify-center bg-gray-800 text-gray-200">Designed and built by Bach Diep using React.js and Tailwind CSS</footer>
    </div>
  )
}

export default App;
