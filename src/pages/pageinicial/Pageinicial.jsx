import Styles from './Pageinicial.module.css';
import { useNavigate } from 'react-router-dom';
import { navigatetoPage } from '../../utils';

function Pageinicial() {
  const navigate = useNavigate();

  const handleNavigateToAbout = () => {
    navigatetoPage(navigate, '/about');
  };

  return (
    <div className={Styles.containerpage}>
      <div className={Styles.containelemntespages}>
        <div className={Styles.containtextopageinicial}>
          <h1 className={Styles.textopage}>
            <span className={Styles.bluetext}>Rápido</span> e <span className={Styles.yellowtext}>fácil</span> tenha seu currículo pronto em <span className={Styles.bluetext}>5 minutos</span> o melhor do mercado totalmente
            <span className={Styles.yellowtext}> gratuito</span>
          </h1>
          <p className={Styles.paragrafopageinicial}>Crie seu currículo agora, sem enrolação, e conquiste o emprego dos seus sonhos com rapidez e profissionalismo!</p>
        </div>
        <button className={Styles.buttonpageinicial} onClick={handleNavigateToAbout}>Criar meu currículo</button>
        <img className={Styles.imgpageinicial} src="./images/image-curriculo.png" alt="imagem de curriculo exemplo" />
      </div>
    </div>
  );
}

export default Pageinicial;
