import Styles from '../../components/styleform/StylesForm.module.css'
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import Buttonadd from '../../components/buttonadd/Buttonadd';
import Buttonremove from '../../components/buttonremove/Buttonremove';


import React, { useState } from "react";
import "flatpickr/dist/flatpickr.min.css"; 


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
   

    //function adiciona experiencia no estado e no array experiencia
    const addExpe = ()=>{
      if(dadosForm.experiencia.length  >= 5 ){
        alert('Você só pode adicionar no máximo 5 experiências.')
        return;
      }
      
      const newExp = () =>({
        id: Math.floor(Math.random() * 10000),
        cargo: '',
        empregador: '',
        inicioexp: '', 
        finalexp: '', 
        cidade: '', 
        estado: '', 
        trabalhoatual: '',
        descricaovaga: '',
      })
      setDadosForm((prev)=>({
        ...prev, 
        experiencia: [...prev.experiencia, newExp()],
      }))
    }


    // Pegar valores do formulario 
    const pegaValorInput = (e, id)=>{
      const {name, value, type, checked} = e.target
    
      setDadosForm((prev)=>({
        ...prev, 
        experiencia:prev.experiencia.map((exp)=>{
          if(exp.id === id){
            if(name ==="trabalhoatual"){
              return {...exp, [name]: checked, trabalhoatual : checked ? "Sim" : "Não"};
            }
             return {...exp, [name]: type === "checkbox" ? checked : value}
          }
          return exp ;
        })   
      }))
    }

    // remove formulário
    const removeExp = (id)=>{
      setDadosForm((prev)=>({
        ...prev, 
        experiencia: prev.experiencia.filter((exp)=> exp.id !== id)
      }))
    }

    
    
    
  return (
    <div className={`${Styles.containerComponents} ${dadosForm.experiencia.length > 0 ? Styles.autoheight : ''}`}>
      <DynamicComponent 
      title={"Experiência"} 
      text={"Comece pelo seu trabalho recente, Você também pode adicionar trabalho voluntário, estágios ou atividades extracurriculares."}/>


      {dadosForm.experiencia.map((exp, index)=>(
      <form key={exp.id} className={Styles.formcontain}>
          <h3 className={Styles.indextext}>Experiencia {index + 1} </h3>

          <div >
            <div className={Styles.inputGroup}>
                <input 
                  type="text"
                  name='cargo' 
                  value={exp.cargo}
                  required 
                  onChange={(e)=>pegaValorInput(e, exp.id)}
                />
                <label >Cargo</label>
            </div>

            <div className={Styles.inputGroup}>
                <input 
                 type="text"
                  name='empregador'
                  value={exp.empregador}
                   required 
                   onChange={(e)=>pegaValorInput(e, exp.id)}
                />
                <label>Empregador</label>
            </div>
            <p>inicio/Fim</p>
            <div className={Styles.date}>
              <div className={Styles.inputGroup} >
              <input
                   type="date"
                    name='inicioexp'
                    value={exp.inicioexp}
                     onChange={(e)=>pegaValorInput(e, exp.id)}
                />
              </div>
              <div className={Styles.inputGroup} >
              <input
                   type="date"
                    name='finalexp'
                    value={exp.finalexp}
                     
                     onChange={(e)=>pegaValorInput(e, exp.id)}
                />
              </div>
            </div>

          </div>

          <div>
            <div className={Styles.inputGroup}>
                <input
                
                 type="text" 
                 name='cidade'  
                 required 
                 value={exp.cidade}
                 onChange={(e)=>pegaValorInput(e, exp.id)}
                />
                <label >Cidade</label>
            </div>

            <div className={Styles.inputGroup}>
                <input
                 
                 type="text" 
                 name='estado' 
                  required 
                  value={exp.estado}
                  onChange={(e)=>pegaValorInput(e, exp.id)}
                 />
                <label >Estado</label>
            </div>

            <div  className={Styles.inputGroupckeckbox}>
              <input 
                type="checkbox"
                name='trabalhoatual'
               checked={exp.trabalhoatual}
               onChange={(e)=>pegaValorInput(e, exp.id)}
              />
              <label >Trabalho atualmente aqui</label>
            </div>
          </div>

          <div className={Styles.descricaovaga}>
            <div className={`${Styles.inputGroup} `}  >
              <input
                type="text"
                name="descricaovaga"
                required
                value={exp.descricaovaga}
                onChange={(e)=>pegaValorInput(e, exp.id)}
              />
              <label >Descrição da vaga</label>
            </div>
            <Buttonremove removeForm={()=>removeExp(exp.id)} />
          </div>
       
      </form>
      ))}

    <Buttonadd addNewForm={addExpe} />
      




      <DynamicButtons 
      voltar={handleNavigateToAbout}
      avancar={HanfleNavigateToFormation}
      />
    </div>
  )
}

export default Experience
