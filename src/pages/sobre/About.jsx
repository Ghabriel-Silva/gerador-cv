import Styles from '../../components/styleform/StylesForm.module.css'
import { useNavigate } from 'react-router-dom'
import { navigatetoPage } from "../../utils";


import DynamicButtons from '../../components/dinamicbuttons/DynamicButtons';
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent";


const About = ({dadosForm, setDadosForm}) => {

  // Function que trabalha com rota
    const navigate = useNavigate()

    const handleNavigateToHome = ()=>{
        navigatetoPage(navigate, '/')
    }

    const handleNavigatetoExperience = ()=>{
      navigatetoPage(navigate, '/experience')
    }


      // fucntion que armazena valores do input esse valor  por porps para o component principal 

    //atualiza o estado do usestate quando preenchego algo no formulário
    const handleToformAbout = (e)=>{
      const {name, value}= e.target
      setDadosForm((prev)=>({
        ...prev, [name] : value
      }))
    
    }

  return (
    <div className={Styles.formcontain}>
      <DynamicComponent 
      title={"Dados pessoais"} 
      text={"Eles permitem que os empregadores vejam como podem entrar em contato com você."}
      />

      <form className={Styles.formcontain}>
        <div >
          <div className={Styles.inputGroup}>
              <input  
                id="name" 
                type="text" 
                name='nome'
                value={dadosForm.nome}
                required 
                autoComplete="name" 
                onChange={handleToformAbout}

              />
              <label htmlFor="name">Nome</label>
          </div>

          <div className={Styles.inputGroup}>
              <input 
                id='sobrenome' 
                type="text" 
                name='sobrenome' 
                value={dadosForm.sobrenome}
                required autoComplete="family-name"       
                onChange={handleToformAbout}
              />
              <label htmlFor="sobrenome">Sobrenome</label>
          </div>

          <div className={Styles.inputGroup}>
              <input 
                id='telefone' 
                type="tel" 
                name='telefone'  
                value={dadosForm.telefone}
                required 
                autoComplete="tel"
                onChange={handleToformAbout}
              />
              <label htmlFor="telefone">Telefone</label>
          </div>
        </div>

        <div>
          <div className={Styles.inputGroup}>
              <input 
                id='cidade'
                type="text" 
                name='cidade'  
                value={dadosForm.cidade}
                required 
                autoComplete="address-level2 "
                onChange={handleToformAbout}
               />
              <label htmlFor="cidade">Cidade</label>
          </div>

          <div className={Styles.inputGroup}>
              <input 
                id='cep' 
                type="text" 
                name='cep'  
                value={dadosForm.cep}
                required autoComplete="postal-code"
                maxLength={9}
                onChange={handleToformAbout}
                />
              <label htmlFor="cep">Cep</label>
          </div>

          <div className={Styles.inputGroup}>
              <input 
                id='email'
                type="email"
                name='email'  
                value={dadosForm.email}
                required 
                autoComplete="email"
                onChange={handleToformAbout}
              />
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
