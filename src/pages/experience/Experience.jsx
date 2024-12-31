import Styles from '../../components/styleform/StylesForm.module.css'
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"


import React, { useState } from "react";
import Flatpickr from "react-flatpickr"; // Componente React do Flatpickr
import "flatpickr/dist/flatpickr.min.css"; 
import { Portuguese } from "flatpickr/dist/l10n/pt"; //importa a linguagem br
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
    const [dateRange, setDateRange] = useState([]);
    
  return (
    <div className={Styles.containerComponents}>
      <DynamicComponent 
      title={"Experiência"} 
      text={"Comece pelo seu trabalho recente, Você também pode adicionar trabalho voluntário, estágios ou atividades extracurriculares."}/>

<form className={Styles.formcontain}>
            <div >
              <div className={Styles.inputGroup}>
                  <input  id="cargo" type="text" name='cargo' required />
                  <label htmlFor="cargo">Cargo</label>
              </div>
    
              <div className={Styles.inputGroup}>
                  <input id='empregador' type="text" name='empregador' required />
                  <label htmlFor="empregador">Empregador</label>
              </div>
    
              <div className={Styles.inputGroup} >
              <p>Selecione intervalos de datas</p>
                  <Flatpickr className={Styles.flatpickrcalendar}
                    options={{
                      locale: Portuguese, //Define a linguagem
                      mode: "range", // Define o modo de intervalo
                      dateFormat: "d-m-y", // Formato da data
                      
                    }}
                    value={dateRange} // Valor selecionado
                    onChange={(selectedDates) => setDateRange(selectedDates)} // Atualiza o estado
                 />
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
