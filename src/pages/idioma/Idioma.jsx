import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import { navigatetoPage, deleimitaArray } from "../../utils"
import { useNavigate } from "react-router-dom"
import Styles from '../../components/styleform/StylesForm.module.css'
import { v4 as uuidv4 } from 'uuid';
import Buttonremove from "../../components/buttonremove/Buttonremove";
import Buttonadd from '../../components/buttonadd/Buttonadd';


const Idioma = ({dadosForm, setDadosForm}) => {
 const navigate = useNavigate()

const handlenavigatetoSkills = ()=>{
    navigatetoPage(navigate, '/skills')
}
const handleNavigateToResumo = ()=>{
  navigatetoPage(navigate, '/resumo')
}


const addidioma = ()=>{

 if (deleimitaArray(dadosForm, 'idioma', 10 , "Idioma") !== true)  return;
 
  

  const newSkills  = ()=>({
    id: uuidv4(),
    Idioma:"", 
    nivelidioma:"",
  })
  setDadosForm((prev)=>({
    ...prev,  
    idioma: [...prev.idioma, newSkills()]
  }))
}

//captura esses evento de digitar e colocar no meu add skilss 

const recebevaloridioma = (e, id)=>{
    const {name, value} = e.target
    setDadosForm((prev)=>({
      ...prev, 
      idioma: prev.idioma.map((idio)=>(
        idio.id === id ? {...idio, [name]:value} : idio
      ))
    }))
}

//remove botão 

const removebutton = (id)=>{
  setDadosForm((prev)=>({
    ...prev, 
    idioma: prev.idioma.filter((obj)=> obj.id !== id)
  }))
}


return (
  <div className={`${Styles.containerComponents} ${dadosForm.idioma.length > 0 ? Styles.autoheight : "" }`}>
      <DynamicComponent 
      title={"Idioma"} 
      text={"Acrescente seus idiomas complementares."} />
      {dadosForm.idioma.map((idio,index)=>(

            <form key={idio.id} className={Styles.formcontain}>
              <h3 className={Styles.indextext}> Idioma {index+1} </h3>
            <div>
              <div className={Styles.inputGroup}>
                <input
                type="text"
                name="idioma"
                required
                value={idio.idioma}
                onChange={(e)=>recebevaloridioma(e, idio.id)}
                />
                <label>Idioma</label>
              </div >
              <div className={Styles.contianerselec}>
                <div  className={Styles.inputdropdown}  >
                  <select name='nivelidioma'
                   value={idio.nivelidioma}
                    onChange={(e)=> recebevaloridioma(e, idio.id)}
                   >
                    <option hidden value='opcao1'>Nivel Idioma</option>
                    <option value="iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                    <option value="fluente">Fluente</option>
                  </select>
                </div>
              </div>
              <div className={Styles.descricaovaga}>
                <Buttonremove removeForm={(e)=>removebutton(idio.id)} />
              </div>
            </div>

            
          </form>
      ))}
    

      <Buttonadd addNewForm={addidioma} name={"Idiomas"} />
      <DynamicButtons 
      avancar={handleNavigateToResumo}
      voltar={handlenavigatetoSkills} />
    
  </div>
)
}

export default Idioma
