import GeraPdf from "../../components/gerapdf/GeraPdf";
import Styles from "./DownloadCV.module.css";
import { useNavigate } from "react-router-dom"
import {navigatetoPage} from "..//../utils"
import DynamicButtonsStyles from '../../components/dinamicbuttons/DynamicButtons.module.css'
import { FaArrowLeftLong } from "react-icons/fa6";

const DownloadCV = ({ dadosForm }) => {
  const navigate = useNavigate()
  const hanldetosectionextra = ()=>{
    navigatetoPage(navigate, '/sectionextra')
  }
  return (
    <div className={Styles.curriculo}>
      <h3 className={Styles.titulo} >Obrigado por utilizar nosso gerador de currículos! Caso tenha dúvidas, entre em contato pelo WhatsApp ou através das nossas redes sociais. Estamos aqui para ajudar!</h3>

      <div className={Styles.containtextebutton}>
        <p className={Styles.titulo} >Baixe seu curriulo abaixo de graça!</p>
        <div className={Styles.containbutton}>
          <button onClick={() => GeraPdf(dadosForm)} className={Styles.button}>
            <span className={Styles.buttonlg}>
              <span className={Styles.buttonsl}></span>
              <span className={Styles.buttontext}>Baixar agora</span>
            </span>
          </button>
        </div>
      </div>
    
      <div className={DynamicButtonsStyles.ContainButtons}> 
        <button onClick={hanldetosectionextra} className={DynamicButtonsStyles.buttons}><FaArrowLeftLong />Voltar</button></div>
    </div>
  );
};

export default DownloadCV;
