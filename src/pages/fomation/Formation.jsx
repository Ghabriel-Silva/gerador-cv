import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"


import {navigatetoPage} from "..//../utils"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';



import Styles from '../../components/styleform/StylesForm.module.css'

import Buttonremove from "../../components/buttonremove/Buttonremove";
import Buttonadd from '../../components/buttonadd/Buttonadd';


const Formation = ({dadosForm, setDadosForm}) => {


const navigate = useNavigate()

 const handleNavigateToExperience = ()=>{
    navigatetoPage(navigate, '/experience')
 }

 const handleNavigateToskills = ()=>{
  navigatetoPage(navigate, '/skills')
}

// function add novaexperiencia ao clicar no botão

const addFormation  = ()=>{
  if(dadosForm.formation.length >= 5){
    alert('Você só pode adicionar no máximo 5 Formação.')
    return;
  }
  const newFormation = () => ({
    id: uuidv4(), //Usando UUIDv4 para gerar um ID único, valores unicos e escalveis 
    instituicao: "", 
    cursoname: "",
    incialfomation: "",
    finalfomation: "",
    formationcidade: "", 
    tituloGraduacao: "", 
    Statusformation: "", 
  });



  setDadosForm((prev)=>({
    ...prev, 
    formation: [...prev.formation , newFormation()]
  }))
  
}


// pegar valores do formulário
const pegaValorInputFormation = (e, id)=>{


const {name, value} = e.target
setDadosForm((prev)=>({
  ...prev, 
  formation: prev.formation.map((forma)=>
  forma.id === id 
  ? {...forma, [name]: value} : forma

  )
}))
}

//remove valores

const removefomation = (id)=>{
  setDadosForm((prev)=>({
    ...prev, 
    formation: prev.formation.filter((forma)=>forma.id !== id)
  }))
}


  return (
    <div className={`${Styles.containerComponents} ${dadosForm.formation.length > 0 ? Styles.autoheight : ''}`}  >
        <DynamicComponent 
        title={'Formação'} 
        text={'Informe todas qualificações ou diplomas que você obteve, pu que estão em andamento.'} />

        {dadosForm.formation.map((forma, index)=>(

        <form key={forma.id} className={Styles.formcontain}>
            <h3 className={Styles.indextext}>Formação: {index + 1} </h3>

            <div >
              <div className={Styles.inputGroup}>
                  <input 
                    value={forma.instituicao}
                    type="text"
                    name='instituicao' 
                    required 
                    onChange={(e)=>pegaValorInputFormation(e, forma.id)}
                    
                  />
                  <label >instituição</label>
              </div>

              <div className={Styles.inputGroup}>
                  <input 
                    type="text"
                    name='cursoname'
                    value={forma.cursoname}
                    required 
                    onChange={(e)=>pegaValorInputFormation(e, forma.id)}
                  />
                  <label>Nome do Curso</label>
              </div>

              <div className={Styles.date}>
                <div className={Styles.inputGroup} >
                  <input
                    value={forma.incialfomation}
                    name="incialfomation"
                    placeholder="Data inicial"
                    required
                    onChange={(e)=>pegaValorInputFormation(e, forma.id)}
                  />
                </div>

                <div className={Styles.inputGroup} >
                  <input
                    value={forma.finalfomation}
                    name="finalfomation"
                    placeholder="Data Final"
                    required
                    onChange={(e)=>pegaValorInputFormation(e, forma.id)}
                    />
                </div>
              </div>

            </div>

          <div>
            <div className={Styles.inputGroup}>
              <input 
                value={forma.formationcidade}
                type="text"
                name='formationcidade'
                onChange={(e)=>pegaValorInputFormation(e, forma.id)}
                required 
                
              />
                <label>Cidade</label>
            </div>

            <div className={Styles.inputdropdown}>
                <select   name="Statusformation" onChange={(e)=>pegaValorInputFormation(e, forma.id)}  value={forma.Statusformation}>
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

            <div className={Styles.inputdropdown}  onChange={(e)=>pegaValorInputFormation(e, forma.id)} value={forma.Statusformation}>
                <select  name="Statusformation">
                    <option value={'option1'} hidden>Status</option>
                    <option value="concluido">Concluido</option>
                    <option value="cursando">Cursando</option>
                    <option value="trancado">Trancado</option>
                    <option value="nehuma das opções">Nehuma das opçõe</option>
                </select>
            </div>

          </div>

          <div className={Styles.inputDelete}>
            <Buttonremove removeForm={(e)=>removefomation(forma.id)} />
          </div>

        </form>


      ))}



        <Buttonadd addNewForm={addFormation}/>
      
        <DynamicButtons
        voltar={handleNavigateToExperience}
        avancar={handleNavigateToskills}
        />
    </div>
  )
}

export default Formation
