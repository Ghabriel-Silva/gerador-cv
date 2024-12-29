import Styles from '../../components/styleform/StylesForm.module.css'
import { useNavigate } from 'react-router-dom'
import { navigatetoPage } from "../../utils";

import DynamicButtons from '../../components/dinamicbuttons/DynamicButtons';
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent";


const About = () => {
    const navigate = useNavigate()

    const handleNavigateToHome = ()=>{
        navigatetoPage(navigate, '/')
    }

    const handleNavigatetoExperience = ()=>{
      navigatetoPage(navigate, '/experience')
    }
  return (
    <div className={Styles.containerComponents}>
      <DynamicComponent 
      title={"Dados pessoais"} 
      text={"Eles permitem que os empregadores vejam como podem entrar em contato com você."}
      />

      <form className={Styles.formcontain}>
        <div >
          <div className={Styles.inputGroup}>
              <input  id="name" type="text" name='nome' required autocomplete="name"/>
              <label htmlFor="name">Nome</label>
          </div>

          <div className={Styles.inputGroup}>
              <input id='sobrenome' type="text" name='sobrenome' required autocomplete="family-name"/>
              <label htmlFor="sobrenome">Sobrenome</label>
          </div>

          <div className={Styles.inputGroup}>
              <input id='telefone' type="tel" name='telefone'  required autocomplete="tel"/>
              <label htmlFor="telefone">Telefone</label>
          </div>
        </div>

        <div>
          <div className={Styles.inputGroup}>
              <input id='cidade' type="text" name='cidade'  required autocomplete="address-level2 "/>
              <label htmlFor="cidade">Cidade</label>
          </div>

          <div className={Styles.inputGroup}>
              <input id='cep' type="text" name='cep'  required autocomplete="postal-code" maxLength={9}/>
              <label htmlFor="cep">Cep</label>
          </div>

          <div className={Styles.inputGroup}>
              <input id='email' type="email" name='email'  required autocomplete="email"/>
              <label htmlFor="email">E-mail</label>
          </div>
        </div>
      </form>

      < DynamicButtons 
      avancar={ handleNavigatetoExperience} 
      voltar={ handleNavigateToHome}/>

    </div>
  )
}

export default About
