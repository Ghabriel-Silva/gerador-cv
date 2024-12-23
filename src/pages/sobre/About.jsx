import Styles from '../sobre/About.module.css'
import { useNavigate } from 'react-router-dom'
import { navigatetoPage } from "../../utils";

import DynamicButtons from '../../components/dinamicbuttons/DynamicButtons';
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent";


const About = () => {
    const navigate = useNavigate()

    const handleNavigateToHome = ()=>{
        navigatetoPage(navigate, '/')
    }

    const handleNavigatetoExperience = ()=>{
      navigatetoPage(navigate, '/experience')
    }
  return (
    <div className={Styles.containerabout}>
      <DynamicComponent 
      title={"Dados pessoais"} 
      text={"Eles permitem que os empregadores vejam como podem entrar em contato com você."}
      />
      < DynamicButtons 
      avancar={ handleNavigatetoExperience} 
      voltar={ handleNavigateToHome}/>

    </div>
  )
}

export default About
