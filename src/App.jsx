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
import { useState } from "react";



function App() {
const [dadosForm, setDadosForm] = useState({
  nome: "",
  sobrenome: "",
  cidade: "",
  cep: "",
  telefone: "",
  email: "",
  cargo:"",
  empregador:"", 
  incioTermino:"", 
  cidade:"",
  estado:"", 
  trabalhoatual:"", 
  descricaovaga:"", 


})

  return (
    <div className="containerglobal">
       <Router  basename="/gerador-cv/">
          <Header/>
          <Routes>
            <Route path="/" element={<Pageinicial/>}  />
            <Route path="/about" element={<About  dadosForm={dadosForm}  setDadosForm={setDadosForm}/>} />
            <Route path="/experience" element={<Experience  dadosForm={dadosForm}  setDadosForm={setDadosForm}/>}/>
            <Route path="/formation" element={<Formation/>}/>
            <Route path="/skills" element={<Skills/>} />
            <Route path="/idioma"  element={<Idioma/>} />
            <Route path="/resumo" element={<Resumo/>} />
            <Route path="/sectionextra" element={<SectionExtra/>} />
            <Route path="/download"  element={<DownloadCV  dadosForm={dadosForm}/> } />
          </Routes>
          <Footer />
        </Router>
     
    </div>
  
  )
}

export default App
