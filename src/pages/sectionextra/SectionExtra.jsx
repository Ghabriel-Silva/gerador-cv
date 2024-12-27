import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import { navigatetoPage, } from "../../utils"
import { useNavigate } from "react-router-dom"
import Styles from './SectionExtra.module.css'

const SectionExtra = () => {
    const navigate = useNavigate()

    const handleNavigateToResumo=()=>{
      navigatetoPage(navigate, '/resumo')
      }
  
      const handleNavigateToDownload = ()=>{
          navigatetoPage(navigate, '/download')
      }


  return (
    <div className={Styles.containsectionextra}>

<DynamicComponent
      title={"Dados extra"}
      text={"Opcional adicionar esse dados"}
      />
      <DynamicButtons 
      avancar={handleNavigateToDownload}
      voltar={handleNavigateToResumo}
      />
      
    </div>
  )
}

export default SectionExtra
