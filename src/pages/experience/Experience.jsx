import Styles from '../../components/styleform/StylesForm.module.css'
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import Buttonadd from '../../components/buttonadd/Buttonadd';
import Buttonremove from '../../components/buttonremove/Buttonremove';



 


import {navigatetoPage, formatDate} from "..//../utils"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';






const Experience = ({dadosForm, setDadosForm}) => {

;


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
        id: uuidv4(),
        cargo: '',
        empregador: '',
        inicioexp: '', 
        finalexp: '', 
        cidade: '', 
        estado: '', 
        trabalhoatual: false,
        descricaovaga: '',
      })
      setDadosForm((prev)=>({
        ...prev, 
        experiencia: [...prev.experiencia, newExp()],
      }))
    }


    // Pegar valores do formulario 
    const pegaValorInput = (e, id) => {
      const { name, value, type, checked } = e.target;
      let newValue = value;

      // Se for campo de data, aplique a formatação da função, se não for n precisa apricar
      if (name === "inicioexp" || name === "finalexp") {
        newValue = formatDate(value);
      }

      setDadosForm((prev) => ({
        ...prev,
        experiencia: prev.experiencia.map((exp) =>
          exp.id === id
            ? {
                ...exp,
                [name]: type === "checkbox" ? checked : newValue,
              }
            : exp
        ),
      }));
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
            <div className={Styles.date}>
              <div className={Styles.inputGroup} >
              <input
                  placeholder="Data inicial"
                  name='inicioexp'
                  value={exp.inicioexp}
                  required 
                  onChange={(e)=>pegaValorInput(e, exp.id)}
                />
              </div>
              <div className={Styles.inputGroup} >
              <input
                 placeholder="Data final"
                  name='finalexp'
                  value={exp.finalexp}
                  required 
                  onChange={(e)=>pegaValorInput(e, exp.id)}
                  disabled={exp.trabalhoatual}
                  style={
                    exp.trabalhoatual
                    ? { textDecoration: "line-through", color: "#999", backgroundColor: "#f5f5f5", pointerEvents: "none" }
                    : {}
                    }
                />
              </div>
            </div>

          </div>

          <div >
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
                 required 
                name='trabalhoatual'
               checked={exp.trabalhoatual}
               onChange={(e)=>pegaValorInput(e, exp.id)}
              />
              <label >Trabalho atual:</label>
              <p className={Styles.checkboxtruorfalse}> {exp.trabalhoatual ? 'Sim' : 'Não'} </p>
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

    <Buttonadd addNewForm={addExpe}/>
      




      <DynamicButtons 
      voltar={handleNavigateToAbout}
      avancar={HanfleNavigateToFormation}
      />
    </div>
  )
}

export default Experience
