import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'


import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Pageinicial from "./pages/pageinicial/Pageinicial"
import About from "./pages/sobre/About";
import Experience from "./pages/experience/Experience";
import Formation from "./pages/fomation/Formation";
import Skills from "./pages/skils/Skills";
import Idioma from "./pages/idioma/Idioma";
import Resumo from "./pages/resumo/Resumo"
import SectionExtra from "./pages/sectionextra/SectionExtra"
import DownloadCV from "./pages/downloadcv/DowloadCv"



function App() {
  return (
    <div className="containerglobal">
       <Router  basename="/gerador-cv/">
          <Header/>
          <Routes>
            <Route path="/" element={<Pageinicial/>}  />
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/formation" element={<Formation/>}/>
            <Route path="/skills" element={<Skills/>} />
            <Route path="/idioma"  element={<Idioma/>} />
            <Route path="/resumo" element={<Resumo/>} />
            <Route path="/sectionextra" element={<SectionExtra/>} />
            <Route path="/download"  element={<DownloadCV/>} />
          </Routes>
          <Footer />
        </Router>
     
    </div>
  
  )
}

export default App
