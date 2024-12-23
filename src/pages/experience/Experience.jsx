import Styles from "./Experience.module.css"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"

import {navigatetoPage} from "..//../utils"
import { useNavigate } from "react-router-dom"

const Experience = () => {
    const navigate = useNavigate()

    const handleNavigateToAbout = ()=>{
       navigatetoPage(navigate, '/about')
    }

    
  return (
    <div className={Styles.Experiencecontain}>
      <DynamicComponent title={"Experiência"} text={"Comece pelo seu trabalho recente, Você também pode adicionar trabalho voluntário, estágios ou atividades extracurriculares."}/>
      <DynamicButtons 
      voltar={handleNavigateToAbout}
      />
    </div>
  )
}

export default Experience
