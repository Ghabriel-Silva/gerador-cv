import Styles from '../../components/styleform/StylesForm.module.css'
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import { CiCirclePlus } from "react-icons/ci";


import React, { useState } from "react";
import Flatpickr from "react-flatpickr"; // Componente React do Flatpickr
import "flatpickr/dist/flatpickr.min.css"; 
import { Portuguese } from "flatpickr/dist/l10n/pt"; //importa a linguagem br

import {navigatetoPage} from "..//../utils"
import { useNavigate } from "react-router-dom"


const Experience = ({dadosForm, setDadosForm}) => {
    const navigate = useNavigate()

    const handleNavigateToAbout = ()=>{
       navigatetoPage(navigate, '/about')
    }

    const HanfleNavigateToFormation = ()=>{
      navigatetoPage(navigate, "/formation")
    }
    const [dateRange, setDateRange] = useState([]);


    const handleToformAbout = (e)=>{
      const {name, value}= e.target
      setDadosForm((prev)=>({
        ...prev, [name] : value
      }))
    
    }
    
    
    
  return (
    <div className={Styles.containerComponents}>
      <DynamicComponent 
      title={"Experiência"} 
      text={"Comece pelo seu trabalho recente, Você também pode adicionar trabalho voluntário, estágios ou atividades extracurriculares."}/>

      <form className={Styles.formcontain}>
          <div >
            <div className={Styles.inputGroup}>
                <input 
                 id="cargo"
                  type="text"
                  name='cargo' 
                  value={dadosForm.cargo}
                  required 
                  onChange={handleToformAbout}
                />
                <label htmlFor="cargo">Cargo</label>
            </div>

            <div className={Styles.inputGroup}>
                <input 
                id='empregador'
                 type="text"
                  name='empregador'
                  value={dadosForm.empregador}
                   required 
                   onChange={handleToformAbout}
                />
                <label htmlFor="empregador">Empregador</label>
            </div>

            <div className={Styles.inputGroup} >
            <p className={Styles.inputparagafo}>Incio/Término</p>
                <Flatpickr  
                className={Styles.customFlatpickr} 
                  options={{
                    locale: Portuguese, //Define a linguagem
                    mode: "range", // Define o modo de intervalo
                    dateFormat: "d-m-y", // Formato da data
                  }}
                  name='experiencidate'
                  value={dateRange} // Valor selecionado
                  onChange={(selectedDates) => setDateRange(selectedDates)} // Atualiza o estado
                />
            </div>

          </div>

          <div>
            <div className={Styles.inputGroup}>
                <input
                 id='cidade' 
                 type="text" 
                 name='cidade'  
                 required 
                 value={dadosForm.cidade}
                 onChange={handleToformAbout}
                />
                <label htmlFor="experienciacidade">Cidade</label>
            </div>

            <div className={Styles.inputGroup}>
                <input
                 id='experienciaestado' 
                 type="text" 
                 name='estado' 
                  required 
                  value={dadosForm.estado}
                 onChange={handleToformAbout}
                 />
                <label htmlFor="experienciaestado">Estado</label>
            </div>

            <div  className={Styles.inputGroupckeckbox}>
              <input 
                type="checkbox"
                id='trabalhoatual'
                name='Experienciaatual'
                value={dadosForm.trabalhoatual}
                onChange={handleToformAbout}
              />
              <label htmlFor="experienciaatual">Trabalho atualmente aqui</label>
            </div>
          </div>
            <div className={`${Styles.inputGroup}`}  >
            <input 
              id='experienciadescricao' 
              type="tel"
              name="descricaovaga"
              required 
              value={dadosForm. descricaovaga}
                onChange={handleToformAbout}
            />
            <label htmlFor="experienciadescricao">Descrição da vaga</label>
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
