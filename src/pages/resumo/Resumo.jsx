import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons"
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent"
import { navigatetoPage, } from "../../utils"
import { useNavigate } from "react-router-dom"
import Styles from '../../components/styleform/StylesForm.module.css'

const Resumo = () => {
    const navigate = useNavigate()

  const handleNavigateToIdioma =()=>{
    navigatetoPage(navigate, '/idioma')
    }

    const handleNavigateToSectionExtra = ()=>{
        navigatetoPage(navigate, '/sectionextra')
    }

  return (
    <div className={Styles.containerComponents}>
        <DynamicComponent
        title={"Resumo profissional"}
        text={"Resuma sua experiência profissional ou objetivo em algumas frases"}
        />
        
        <form className={Styles.formcontain}>
           <div className={Styles.inputGroup}>
              <input
                type="text"
                name="idioma"
                required
                
                />
                <label>Idioma</label>
             </div >
          
            

        </form>


        <DynamicButtons 
        avancar={handleNavigateToSectionExtra}
        voltar={handleNavigateToIdioma}
        />

    </div>
  )
}

export default Resumo
