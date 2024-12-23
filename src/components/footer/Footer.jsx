import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={Styles.footerContainer}>
      <p className={Styles.footerText}>© 2024 Gappelt. Todos os direitos reservados.</p>
    </div>
  );
};

export default Footer;
