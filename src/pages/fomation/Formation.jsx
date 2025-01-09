import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"


import {navigatetoPage} from "..//../utils"
import { useNavigate } from "react-router-dom"


import Styles from '../../components/styleform/StylesForm.module.css'

import Buttonremove from "../../components/buttonremove/Buttonremove";


const Formation = () => {


const navigate = useNavigate()

 const handleNavigateToExperience = ()=>{
    navigatetoPage(navigate, '/experience')
 }

 const handleNavigateToskills = ()=>{
  navigatetoPage(navigate, '/skills')
}
 
  return (
    <div className={Styles.containerComponents}  >
      <DynamicComponent 
      title={'Formação'} 
      text={'Informe todas qualificações ou diplomas que você obteve, pu que estão em andamento.'} />

      <form action="" className={Styles.formcontain}>
        <div >
            <div className={Styles.inputGroup}>
                <input 
                  type="text"
                  name='instituicao' 
                  
                  required 
                  
                />
                <label >instituição</label>
            </div>

            <div className={Styles.inputGroup}>
                <input 
                  type="text"
                  name='cursoname'
                  
                    required 
                  
                />
                <label>Nome do Curso</label>
            </div>
            <div className={Styles.date}>
                <div className={Styles.inputGroup} >
                   <input
                  
                   name="incialfomation"
                  
                   placeholder="Data inicial"
                  required
                   />
                </div>

                <div className={Styles.inputGroup} >
                    <input
                      name="finalfomation"
                      placeholder="Data Final"
                      required
                      />
                </div>
            </div>
        
        </div>

        <div>
          <div className={Styles.inputGroup}>
                  <input 
                    type="text"
                    name='formationcidade'
                    
                      required 
                    
                  />
                  <label>Cidade</label>
           </div>

           <div className={Styles.inputdropdown}>
                <select  defaultValue={"option1"} name="tituloGraduacao" >
                  <option value="option1"  hidden>Nível de formação</option>
                  <option value="diploma_ensino_medio">Diploma de Ensino Médio</option>
                  <option value="certificado">Certificado</option>
                  <option value="licenciatura">Licenciatura</option>
                  <option value="graduacao">Graduação</option>
                  <option value="pos_graduacao">Pós-graduação</option>
                  <option value="diploma_tecnico">Diploma Técnico</option>
                  <option value="graduacao_incompleta">Graduação Incompleta</option>
                  <option value="bacharelado">Bacharelado</option>
                </select>
           </div>

           <div className={Styles.inputdropdown}>
            <select  defaultValue={'option1'} name="Statusformation">
              <option value={'option1'} hidden>Status</option>
              <option value="concluido">Concluido</option>
              <option value="cursando">Cursando</option>
              <option value="trancado">Trancado</option>
              <option value="nehuma das opções">Nehuma das opçõe</option>
            </select>


           </div>

        </div>
        

       

      </form>

      

      <DynamicButtons
       voltar={handleNavigateToExperience}
       avancar={handleNavigateToskills}
     />
    </div>
  )
}

export default Formation
