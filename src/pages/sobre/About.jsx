import Styles from '../sobre/About.module.css'
import { useNavigate } from 'react-router-dom'
import { navigatetoPage } from "../../utils";

import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent";


const About = () => {
    const navigate = useNavigate()

    const handleNavigateToHome = ()=>{
        navigatetoPage(navigate, '/')
    }
  return (
    <div className={Styles.containerabout}>
      <DynamicComponent 
      title={"Dados pessoais"} 
      text={"Eles permitem que os empregadores vejam como podem entrar em contato com você."}
      />

      <button onClick={handleNavigateToHome}>voltar</button>
      <button>Avançar</button>
      
    </div>
  )
}

export default About
