import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import { navigatetoPage, } from "../../utils"
import { useNavigate } from "react-router-dom"
import Styles from './Skills.module.css'

const Skils = () => {
    const navigate = useNavigate()

const handlenavigatetoFormation = ()=>{
    navigatetoPage(navigate, '/formation')
}

const handlenavigatetoidioma = ()=>{
  navigatetoPage(navigate, '/Idioma')
}

  return (
    <div  className={Styles.containerskiils}>
        <DynamicComponent 
        title={"Habilidades"} 
        text={"Acrescente suas Habilidades como comunicação, proatividade entre outros."} />
        <DynamicButtons 
        avancar={handlenavigatetoidioma}
        voltar={handlenavigatetoFormation} />
      
    </div>
  )
}

export default Skils
