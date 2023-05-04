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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula, nisi sit amet sagittis eleifend, elit mauris lacinia sapien, vitae feugiat quam metus at erat. </p>
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
                <img src="project1.jpg" alt="Project 1" />
                <h3>Wordle</h3>
                <p>A web app that generates random five-letter words for the popular game, Wordle.</p>
              </a>
            </div>
            <div class="project-card">
              <a href="https://chirag-rajani.github.io/Audiophile-Website/">
                <img src="project2.jpg" alt="Project 2" />
                <h3>Audiophile Website</h3>
                <p>A responsive website for a fictional high-end audio equipment company.</p>
              </a>
            </div>
            <div class="project-card">
              <a href="https://chirag-rajani.github.io/Fylo/">
                <img src="project3.jpg" alt="Project 3" />
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

