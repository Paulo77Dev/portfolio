import './App.css';
import Home from './Home.js';
import About from "./About.js";
import Service from "./Service.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import Footer from "./Footer.js";
import Vlibras from "@djpfs/react-vlibras"

function App() {
  return (
  
    <div className="App">
        <Home />
        <About/>
        <Project/>
       <Service/>
        <Vlibras />  
       <Contact />
       <Footer/>
    </div>
  );
}

export default App;
