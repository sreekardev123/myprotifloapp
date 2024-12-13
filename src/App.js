import React ,{useEffect} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skill from './components/Skills';
import Projects from './components/project';
import Contacts from './components/contact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Aos from "aos"
import "aos/dist/aos.css"



const App =() =>{
  useEffect(() => {
    Aos.init()
  
  
  }, [])
  
  return(
    <>
     <Navbar />
    <Home />
    <About />
    <Skill />
    <Projects />
    <Contacts />
    </>
  )
}

export default App