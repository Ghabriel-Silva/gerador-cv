import GeraPdf from "../../components/gerapdf/GeraPdf";
import Styles from "./DownloadCV.module.css";
import { useNavigate } from "react-router-dom"
import {navigatetoPage} from "..//../utils"
import DynamicButtonsStyles from '../../components/dinamicbuttons/DynamicButtons.module.css'

const DownloadCV = ({ dadosForm }) => {
  const navigate = useNavigate()
  const hanldetosectionextra = ()=>{
    navigatetoPage(navigate, '/sectionextra')
  }
  return (
    <div className={Styles.curriculo}>
      <div className={Styles.containtextebutton}>
        <p>Baixe seu curriulo abaixo de graça!</p>
        <div className={Styles.containbutton}>
          <button onClick={() => GeraPdf(dadosForm)} className={Styles.button}>
            <span className={Styles.buttonlg}>
              <span className={Styles.buttonsl}></span>
              <span className={Styles.buttontext}>Baixar agora</span>
            </span>
          </button>
        </div>
      </div>
      
      
      <div className={Styles.donationSection}>
      </div>
      <div className={DynamicButtonsStyles.ContainButtons}> 
        <button onClick={hanldetosectionextra} className={DynamicButtonsStyles.buttons}>voltar</button></div>
    </div>
  );
};

export default DownloadCV;
