import React from 'react';
import './App.css';
import './mediaqueries.css';
import instagram from '../assets/instagram.webp'



function App() {
  const toggleMenu = () => {
    const menuLinks = document.querySelector('.menu-links');
    menuLinks.classList.toggle('hidden');
  };

  return (
    <div>
      <nav id="desktop-nav">
        <div className="logo">Ajith Balan</div>
        <div>
          <ul className="nav-links">
          <li><a href="#about" className="transition-colors duration-300 hover:text-blue-500 hover:bg-gray-100 px-2 py-1 rounded">About</a></li>
<li><a href="#experience" className="transition-colors duration-300 hover:text-blue-500 hover:bg-gray-100 px-2 py-1 rounded">Skills</a></li>
<li><a href="#projects" className="transition-colors duration-300 hover:text-blue-500 hover:bg-gray-100 px-2 py-1 rounded">Projects</a></li>
<li><a href="#contact" className="transition-colors duration-300 hover:text-blue-500 hover:bg-gray-100 px-2 py-1 rounded">Contact</a></li>

          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Ajith Balan</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links hidden">
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>





      <section id="profile">
        <div className="section__pic-container float">

          <img src={"../assets/profilepic.jpg" }  className='rounded-[50%]' alt="Ajith Balan profile picture" />

         

        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Ajith Balan</h1>
          <p className="section__text__p2">MERN Stack Developer</p>
          <div className="btn-container">
            <button  className="btn btn-color-1 transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600" onClick={() => window.open('./assets/resume-example.pdf')}>
              Download CV
            </button>
         
          </div>
          <div id="socials-container">
          <img src={instagram} alt="My Github profile" className=" transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-200 bg-radius-50  icon" onClick={() => window.location.href = 'https://www.instagram.com/ajith____b?igsh=d2lwZHg1Y2hqeHl4'} />

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/598px-WhatsApp_icon.png" alt="My Github profile" className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-200 bg-radius-50  icon" onClick={() => window.location.href = 'https://wa.me/8129718562?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services'  } />
            <img src="https://logowik.com/content/uploads/images/github-colored9940.logowik.com.webp" alt="My Github profile"  className="transition duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-200 bg-radius-50  icon" onClick={() =>   window.location.href = 'https://github.com/Ajith-Balan'} />
          </div>
        </div>
      </section>
      <section id="about">

      <div className="lg:col-span-8 pt-4 lg:pt-0">
      <h2 className="text-3xl text-center mt-5 mb-6 font-bold">About</h2>

      <h3 className="text-xl font-bold">Software Engineer</h3>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <span className="material-icons mr-2">arrow_forward</span>
              <strong>Email:</strong>
              <a 
                href="mailto:ayalurajith@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="ml-2 text-blue-500 "
              >
                ayalurajith@gmail.com
              </a>
            </li>
            <li className="flex items-center mb-2">
              <span className="material-icons mr-2">arrow_forward</span>
              <strong>Degree:</strong>
              <a 
                href="#" 
                rel="noopener noreferrer" 
                className="ml-2 text-blue-500 "
              >
                Electronics
              </a>
            </li>
            <li className="flex items-center mb-2">
              <span className="material-icons mr-2">arrow_forward</span>
              <strong>Course:</strong>
              <a 
                href="#" 
                rel="noopener noreferrer" 
                className="ml-2 text-blue-500 "
              >
                MERN Stack developer
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="list-none">
            <li className="flex items-center mb-2">
              <span className="material-icons mr-2">arrow_forward</span>
              <strong>City:</strong>
              <h3
                 
                className="ml-2 text-blue-500 "
              >
                Palakkad, Kerala, India
              </h3>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-3">
                        <p class="text-justify">
                      




Hello! I'm a dedicated full-stack web developer with a passion for technology and problem-solving. With experience from a year at Synefo Solutions in Kochi, I’ve developed strong skills in both front-end and back-end development. I value teamwork and leadership, and I’m committed to contributing meaningfully to any project or organization. Let’s connect and see how we can work together!





                        </p>
                    </div>

    </div>

      </section>
      <section id="experience">
      <div className="container   gap-5 mx-auto" data-aos="fade-up">
        <div className="section-title  text-center my-4">
          <h2 className="text-3xl  font-bold animate-fade-in">Skills</h2>
        </div>

        <div>
          <h4 className="font-semibold pb-3 animate-fade-in">Languages</h4>
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="skill-item  animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/javascript.svg" alt="JavaScript" className="mx-auto" />
              <p className="skill">JavaScript</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/html-5.svg" alt="HTML" className="mx-auto" />
              <p className="skill">HTML</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold pb-3 pt-4 animate-fade-in">Frameworks & Tools</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/css3.svg" alt="CSS" className="mx-auto" />
              <p className="skill">CSS</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/tailwind.png" alt="Tailwind CSS" className="mx-auto w-1/3" />
              <p className="skill">Tailwind CSS</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="/assets/icons/bootstrap.png" alt="Bootstrap" className="mx-auto" />
              <p className="skill">Bootstrap</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/React_Logo_SVG.svg.png" alt="React" className="mx-auto mt-[-6px]" />
              <p className="skill">React</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="/assets/icons/express.png" alt="React" className="mx-auto mt-[-6px]" />
              <p className="skill">Express</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/aws.png" alt="AWS" className="mx-auto w-1/3" />
              <p className="skill">AWS</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/git.svg" alt="Git" className="mx-auto" />
              <p className="skill">Git</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/mongodb.png" alt="MongoDB" className="mx-auto w-1/3" />
              <p className="skill">MongoDB</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-semibold pb-3 pt-4 animate-fade-in">Operating Systems</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/macos-logo1.jpg" alt="MacOS" className="mx-auto" />
              <p className="skill">MacOS</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/linux.png" alt="Linux" className="mx-auto" />
              <p className="skill">Linux</p>
            </div>
            <div className="skill-item animate-fade-in transition-transform duration-300 ease-in-out transform hover:scale-110">
              <img src="assets/icons/windows-10.svg" alt="Windows" className="mx-auto" />
              <p className="skill">Windows</p>
            </div>
          </div>
        </div>
      </div>
    </section>




      <section id="resume" className="resume py-12">
      <div className="container mx-auto" data-aos="fade-up">
        <div className="section-title text-center mb-8">
          <h2 className="text-3xl font-bold">Resume</h2>
          <div className="border-t-4 border-blue-500 w-16 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Work Experience</h3>

            <div className="relative mb-10 pl-10">
              <div className="absolute left-0 top-0 h-full border-l-2 border-blue-500"></div>
              <div className="absolute left-0 top-0 bg-white border-2 border-blue-500 rounded-full w-4 h-4 -ml-2"></div>
              <h4 className="text-xl font-bold text-blue-600">MERN Stack Web Developer Trainee</h4>
              <h5 className="bg-gray-200 inline-block text-sm font-medium mt-1 mb-2 px-2 py-1 rounded-md">Jan 2023 - 2024</h5>
              <p className="italic text-gray-500">Synefo Solutions, Ernakulam</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Expert in back-end & front-end</li>
              </ul>
            </div>

            <div className="relative mb-10 pl-10">
              <div className="absolute left-0 top-0 h-full border-l-2 border-blue-500"></div>
              <div className="absolute left-0 top-0 bg-white border-2 border-blue-500 rounded-full w-4 h-4 -ml-2"></div>
              <h4 className="text-xl font-bold text-blue-600">Aerospace Inspector</h4>
              <h5 className="bg-gray-200 inline-block text-sm font-medium mt-1 mb-2 px-2 py-1 rounded-md">2021 - 2022</h5>
              <p className="italic text-gray-500">SFO Technologies, Ernakulam</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Aerospace and defense inspection</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Education</h3>

            <div className="relative mb-10 pl-10">
              <div className="absolute left-0 top-0 h-full border-l-2 border-blue-500"></div>
              <div className="absolute left-0 top-0 bg-white border-2 border-blue-500 rounded-full w-4 h-4 -ml-2"></div>
              <h4 className="text-xl font-bold text-blue-600">MERN Stack Web Developer</h4>
              <h5 className="bg-gray-200 inline-block text-sm font-medium mt-1 mb-2 px-2 py-1 rounded-md">Jan 2023 - 2024</h5>
              <p className="italic text-gray-500">Synefo Solutions, Ernakulam</p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Expert in back-end & front-end</li>
              </ul>
            </div>

            <div className="relative mb-10 pl-10">
              <div className="absolute left-0 top-0 h-full border-l-2 border-blue-500"></div>
              <div className="absolute left-0 top-0 bg-white border-2 border-blue-500 rounded-full w-4 h-4 -ml-2"></div>
              <h4 className="text-xl font-bold text-blue-600">Electronics</h4>
              <div className="flex justify-between items-center bg-gray-200 inline-block text-sm font-medium mt-1 mb-2 px-2 py-1 rounded-md">
                <h5>2019 - 2021</h5>
                <h5>8.33</h5>
              </div>
              <p className="italic text-gray-500">GOVT ITI Malampuzha, Kerala</p>
            </div>

            <div className="relative mb-10 pl-10">
              <div className="absolute left-0 top-0 h-full border-l-2 border-blue-500"></div>
              <div className="absolute left-0 top-0 bg-white border-2 border-blue-500 rounded-full w-4 h-4 -ml-2"></div>
              <h4 className="text-xl font-bold text-blue-600">12th, HSS</h4>
              <div className="flex justify-between items-center bg-gray-200 inline-block text-sm font-medium mt-1 mb-2 px-2 py-1 rounded-md">
                <h5>2017 - 2019</h5>
                <h5>70%</h5>
              </div>
              <p className="italic text-gray-500">SMHSS AYALUR Palakkad</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />

    <section id="projects" className="py-2 my-20">
  <div className="container  mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">Works</h2>
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      <div className="max-w-sm">
        <a href="https://ajith-balan.github.io/cj-attire/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ajith-balan.github.io/portfolio/assets/img/projects/Nike.png"
            alt="Project 1"
            className="w-full rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />
        </a>
      </div>
      <div className="max-w-sm">
        <a href="https://ajith-balan.github.io/odin-project1/" target="_blank" rel="noopener noreferrer">
          <img
            src="https://ajith-balan.github.io/portfolio/assets/img/projects/W3schools.png"
            alt="Project 2"
            className="w-full rounded-lg shadow-lg  hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />  
        </a>
      </div>

      <div className="max-w-sm ">
        <a href="https://ajith-balan.github.io/portfolio/" target="_blank" rel="noopener noreferrer">
          <img
            src="./assets/portfolioaji.PNG"
            alt="Project 2"
            className="w-full rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />  
        </a>
      </div>

    </div>
  </div>
</section>






    <section id="contact" className=" py-2">
      <div className="container mx-auto ">
        <h1 className="text-4xl text-center font-bold mt-2 mb-8">Contact Me</h1>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8">
          {/* Contact Information */}
          <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
            <div className="space-y-6">
            <div className="flex items-center">
            <div className=" mb-8">
  <div className="contact_head">
    <h3 className="text-3xl text-center font-semibold">Get in Touch</h3>
  </div>
  <div className="contact_cnt_para mt-4">
    <p className="text-lg leading-relaxed">
      Please feel free to reach out to me for any professional inquiries or collaboration opportunities. I'm readily available and eager to discuss how we can work together to achieve our goals. Looking forward to connecting!
    </p>
  </div>
</div>

              </div>
              <div className="flex text-start">
                <img src="./assets/phone.png" alt="Phone icon" className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-600">8129718562</p>
                </div>
              </div>

              <div className="flex text-start">
                <img src="./assets/email.png" alt="Email icon" className="w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg mr-20 font-medium">Email</h3>
                  <p className="text-gray-600">ajithaji9404@gmail.com</p>
                </div>
              </div>

              <div className="flex text-start">
                <img src="./assets/location.png" alt="Location icon" className="color-black w-6 h-6 mr-4" />
                <div>
                  <h3 className="text-lg font-medium">Location</h3>
                  <p className="text-gray-600">Palakkad, Kerala, India </p>
                </div>
              </div>
            </div>
          </div>

          {/* Send a Message */}
          <div className="w-full h-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-6">Send A Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Message"
                required
                className="w-full px-4 py-16 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-600"              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    <footer className="py-8 bg-blue-10 text-black">
  <div className="container mx-auto text-center">
    <h2> <b> AJITH B</b></h2>
    <br />
    <div className="flex justify-center space-x-6">
      <a href="https://github.com/Ajith-Balan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <img src="/assets/github.png" alt="GitHub" className="h-8 w-8 text-gray-400 hover:text-gray-300 transition-colors duration-300 hover:scale-105" />
      </a>
      <a href="mailto:ajithaji9404@gmail.com" target="_blank" aria-label="Email">
        <img src="/assets/email.png" alt="Email" className="h-8 w-8 text-blue-400 hover:text-blue-300 transition-colors duration-300 hover:scale-105" />
      </a>
      <a href="tel:8129718562" aria-label="Phone">
        <img src="/assets/phone.png" alt="Phone" className="h-8 w-8 text-red-500 hover:text-red-300 transition-colors duration-300 hover:scale-105" />
      </a>
    </div>
    <br />
    <p>Copyright ©<b>ajith</b> <br /> All Rights Reserved
    Designed by <b>Ajith-Balan</b>.</p>
  </div>
</footer>


    </div>
  );
}

export default App;
