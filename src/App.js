import React from 'react';
import './App.css';
import './Animations.css';


function App() {
  return (
    <div className="App scale-in-vertical-top">
      <header className="App-header">
        <h1>Hello, my name is Chirag</h1>
        <nav id>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>Hi there, I'm Chirag Rajani, and I'm thrilled to be an aspiring web developer. From a young age, I've been captivated by the power and potential of technology. My passion for coding has led me to constantly explore and learn new skills, always with a pragmatic approach. Some might say that I have high energy, but I simply see it as being committed to my goals, and I won't rest until I land my first junior role. Oh, and by the way, I'm pretty easy to get along with, or at least that's what people tell me. When I'm not typing away at my keyboard, you might find me swimming or reading a good book. Let's build something amazing together!. </p>
        </section>
        <section id="skills">
          <h2>My Stack</h2>
          <ul>
            <li><img src="https://cdn.iconscout.com/icon/free/png-512/react-226053.png?f=avif&w=256" alt="React logo" /></li>
            <li><img src="https://cdn.iconscout.com/icon/free/png-512/html5-41-1175209.png?f=avif&w=256" alt="HTML/CSS logo" /></li>
            <li><img src=" https://cdn.iconscout.com/icon/free/png-512/javascript-2752148-2284965.png" alt="JavaScript logo" /></li>
            <li><img src="https://cdn.iconscout.com/icon/free/png-512/nodejs-2-226035.png" alt="Node.js logo" /></li>
            <li><img src="https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png?f=avif&w=256" alt="Python logo" /></li>
          </ul>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div class="project-cards">
            <div class="project-card">
              <a href="https://chirag-rajani.github.io/Wordle/">                
                <h3>Wordle</h3>
                <p>A web app that generates random five-letter words for the popular game, Wordle.</p>
              </a>
            </div>
            <div class="project-card">
              <a href="https://chirag-rajani.github.io/Audiophile-Website/">                
                <h3>Audiophile Website</h3>
                <p>A responsive website for a fictional high-end audio equipment company.</p>
              </a>
            </div>
            <div class="project-card">
              <a href="https://chirag-rajani.github.io/Fylo/">                
                <h3>Fylo</h3>
                <p>A landing page for a cloud-based file storage and sharing service.</p>
              </a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>If you like what you see so far and would like us to work together. Don't hesistate to get in touch.</p>
          <a className="emailButton" href="mailto:chirag.rajani97@gmail.com">
            <img src="https://cdn.iconscout.com/icon/free/png-512/email-20-83988.png?f=avif&w=256" alt="Email Me" />
          </a>

          <a className='phoneButton' href="tel:1234567890">
            <img src="https://cdn.iconscout.com/icon/free/png-512/call-10-83987.png?f=avif&w=256" alt="Phone me"></img>
          </a>

        </section>

      </main>
      <footer>
        <p>Copyright Chirag Rajani© 2023</p>
      </footer>
    </div>
  );
}

export default App;

