import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"

import {navigatetoPage} from "..//../utils"
import { useNavigate } from "react-router-dom"

import Styles from './Formation.module.css'


const Formation = () => {
const navigate = useNavigate()

 const handleNavigateToExperience = ()=>{
    navigatetoPage(navigate, '/experience')
 }

 const handleNavigateToskills = ()=>{
  navigatetoPage(navigate, '/skills')
}
 
  return (
    <div className={Styles.containformation}>
      <DynamicComponent 
      title={'Formação'} 
      text={'Informe todas qualificações ou diplomas que você obteve, pu que estão em andamento.'} />

      <DynamicButtons
       voltar={handleNavigateToExperience}
       avancar={handleNavigateToskills}
     />
    </div>
  )
}

export default Formation
