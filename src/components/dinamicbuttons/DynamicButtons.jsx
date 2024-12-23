import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


import Styles from './DynamicButtons.module.css'

const DynamicButtons = ({voltar, avancar}) => {
  return (
    <div className={Styles.ContainButtons}>
        <button  onClick={voltar} className={Styles.buttons}><FaArrowLeftLong /> Voltar</button>
        <button onClick={avancar} className={Styles.buttons} >Avançar<FaArrowRightLong /></button>
    </div>
  )
}

export default DynamicButtons
