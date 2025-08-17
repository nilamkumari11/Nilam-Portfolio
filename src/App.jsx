import React from "react";
import Background from "./components/Background";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative">
      <Background />
        <div className="relative noto-sans-regular font-mono ">
          <Navbar></Navbar>
          <Home id="home"></Home>
          <About id="about"></About>  
          <Skills id="skills"></Skills>
          <Education id="education"></Education>
          <Projects id="projects"></Projects>
          <Contact id="contact"></Contact>
          <Footer></Footer>
        </div>      
          
     
    </div>
  );
}

export default App;
