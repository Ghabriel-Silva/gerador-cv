import Styles from './Pageinicial.module.css';
import { useNavigate } from 'react-router-dom';
import { navigatetoPage } from '../../utils';

function Pageinicial() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigatetoPage(navigate, '/about');
  };

  return (
      <div className={Styles.containelemntespages}>
        <div className={Styles.containtextopageinicial}>
          <h1 className={Styles.textopage}>
            <span className={Styles.bluetext}>Rápido</span> e <span className={Styles.yellowtext}>fácil</span> tenha seu currículo pronto em <span className={Styles.bluetext}>5 minutos</span> o melhor do mercado totalmente
            <span className={Styles.yellowtext}> gratuito</span>
          </h1>
          <p className={Styles.paragrafopageinicial}>Crie seu currículo profissional em poucos minutos e destaque-se no mercado de trabalho. Alcance o emprego dos seus sonhos de forma rápida e eficiente!</p>
        </div>
        <button className={Styles.buttonpageinicial} onClick={handleNavigateToAbout}>Criar meu currículo</button>
        <img className={Styles.imgpageinicial} src="./images/image-curriculo.png" alt="imagem de curriculo exemplo" />
      </div>
  );
}

export default Pageinicial;
