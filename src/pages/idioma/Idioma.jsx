import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import { navigatetoPage, } from "../../utils"
import { useNavigate } from "react-router-dom"
import Styles from './Idioma.module.css'

const Idioma = () => {
 const navigate = useNavigate()

const handlenavigatetoSkills = ()=>{
    navigatetoPage(navigate, '/skills')
}
const handleNavigateToResumo = ()=>{
  navigatetoPage(navigate, '/resumo')
}

  return (
    <div className={Styles.contenidioma}>
      <DynamicComponent title={"Idiomas"} text={"Acrescente suas Habilidades e competências como idiomas."} />
      < DynamicButtons voltar={handlenavigatetoSkills} avancar={handleNavigateToResumo} />
    </div>
  )
}

export default Idioma
