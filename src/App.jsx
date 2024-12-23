import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";

import Footer from "./components/footer/Footer";
import Pageinicial from "./pages/pageinicial/Pageinicial"
import About from "./pages/sobre/About";
import './App.css'
import Experience from "./pages/experience/Experience";

function App() {
  return (
    <div className="containerglobal">
       <Router  basename="/gerador-cv/">
          <Header/>
          <Routes>
            <Route path="/" element={<Pageinicial/>}  />
            <Route path="/about" element={<About/>}/>
            <Route path="/experience" element={<Experience/>}/>
          </Routes>
          <Footer />
        </Router>
     
    </div>
  
  )
}

export default App
