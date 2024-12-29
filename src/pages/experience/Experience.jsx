import Styles from '../../components/styleform/StylesForm.module.css'
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"

import {navigatetoPage} from "..//../utils"
import { useNavigate } from "react-router-dom"

const Experience = () => {
    const navigate = useNavigate()

    const handleNavigateToAbout = ()=>{
       navigatetoPage(navigate, '/about')
    }

    const HanfleNavigateToFormation = ()=>{
      navigatetoPage(navigate, "/formation")
    }
    
  return (
    <div className={Styles.containerComponents}>
      <DynamicComponent 
      title={"Experiência"} 
      text={"Comece pelo seu trabalho recente, Você também pode adicionar trabalho voluntário, estágios ou atividades extracurriculares."}/>

<form className={Styles.formcontain}>
            <div >
              <div className={Styles.inputGroup}>
                  <input  id="" type="text" name='' required />
                  <label htmlFor=""></label>
              </div>
    
              <div className={Styles.inputGroup}>
                  <input id='' type="text" name='' required />
                  <label htmlFor=""></label>
              </div>
    
              <div className={Styles.inputGroup}>
                  <input id='' type="tel" name=''  required />
                  <label htmlFor=""></label>
              </div>
            </div>
    
            <div>
              <div className={Styles.inputGroup}>
                  <input id='' type="text" name=''  required />
                  <label htmlFor=""></label>
              </div>
    
              <div className={Styles.inputGroup}>
                  <input id='' type="text" name=''  required  />
                  <label htmlFor="">Cep</label>
              </div>
    
              <div className={Styles.inputGroup}>
                  <input id='' type="email" name=''  required />
                  <label htmlFor="">E-mail</label>
              </div>
            </div>
          </form>

      <DynamicButtons 
      voltar={handleNavigateToAbout}
      avancar={HanfleNavigateToFormation}
      />
    </div>
  )
}

export default Experience
