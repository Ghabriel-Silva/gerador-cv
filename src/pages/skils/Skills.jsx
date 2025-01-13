import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import { navigatetoPage, deleimitaArray } from "../../utils"
import { useNavigate } from "react-router-dom"
import Styles from '../../components/styleform/StylesForm.module.css'
import { v4 as uuidv4 } from 'uuid';
import Buttonremove from "../../components/buttonremove/Buttonremove";
import Buttonadd from '../../components/buttonadd/Buttonadd';


const Skils = ({dadosForm, setDadosForm}) => {
    const navigate = useNavigate()

const handlenavigatetoFormation = ()=>{
    navigatetoPage(navigate, '/formation')
}

const handlenavigatetoidioma = ()=>{
  navigatetoPage(navigate, '/Idioma')
}

//function add quando clicado no botão um novo formulario ao array 

const addskills = ()=>{

 if (deleimitaArray(dadosForm, 'skilss', 10 , "Habilidades") !== true)  return;
 
  

  const newSkills  = ()=>({
    id: uuidv4(),
    habilidades:"", 
    nivelhabilidade:"",
  })
  setDadosForm((prev)=>({
    ...prev,  
    skilss: [...prev.skilss, newSkills()]
  }))
}

//captura esses evento de digitar e colocar no meu add skilss 

const recebevalorSkills = (e, id)=>{
    const {name, value} = e.target
    setDadosForm((prev)=>({
      ...prev, 
      skilss: prev.skilss.map((skill)=>(
        skill.id === id ? {...skill, [name]:value} : skill
      ))
    }))
}

//remove botão 

const removebutton = (id)=>{
  setDadosForm((prev)=>({
    ...prev, 
    skilss: prev.skilss.filter((obj)=> obj.id !== id)
  }))
}

  return (
    <div className={`${Styles.containerComponents} ${dadosForm.skilss.length > 0 ? Styles.autoheight : "" }`}>
        <DynamicComponent 
        title={"Habilidades"} 
        text={"Acrescente suas Habilidades como comunicação, proatividade, dinamisco, oratória entre outros."} />
        {dadosForm.skilss.map((habili,index)=>(

              <form key={habili.id} className={Styles.formcontain}>
                <h3 className={Styles.indextext}> Habilidade {index+1} </h3>
              <div>
                <div className={Styles.inputGroup}>
                  <input
                  type="text"
                  name="habilidades"
                  required
                  value={habili.habilidades}
                  onChange={(e)=>recebevalorSkills(e, habili.id)}
                  />
                  <label>Habilidade</label>
                </div >
                <div className={Styles.contianerselec}>
                  <div  className={Styles.inputdropdown}>
                    <select name='nivelhabilidade' value={habili.nivelhabilidade} onChange={(e)=> recebevalorSkills(e, habili.id)}>
                      <option hidden value='opcao1'>Nivel Habilidade</option>
                      <option value="iniciante">Iniciante</option>
                      <option value="Intermediário">Intermediário</option>
                      <option value="Especialista">Especialista</option>
                    </select>
                  </div>
                </div>
                <div className={Styles.descricaovaga}>
                <Buttonremove removeForm={(e)=>removebutton(habili.id)} />
              </div>
              </div>

              
            </form>
        ))}
      

        <Buttonadd addNewForm={addskills} name={"Habilidades"} />
        <DynamicButtons 
        avancar={handlenavigatetoidioma}
        voltar={handlenavigatetoFormation} />
      
    </div>
  )
}

export default Skils
