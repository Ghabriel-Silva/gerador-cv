import Styles  from "./Header.module.css"
function Header () {

  
  const likedinNome = "ghabrielribeiro"
  const linkedinNome = `https://www.linkedin.com/in/${likedinNome}`
  

  const whatsappNumber = "45991223366"; // Coloque o número no formato internacional
  const message = "Olá, gostaria de saber mais sobre o gerador de curriculo!";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const email = "designgappelt@gmail.com"
  const subject =  "Quero saber mais sobre o gerador de cv"
  const body = "Olá gostaria de saber mais sobre os seus serviços"

  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  return (
      <div className={Styles.containerheader} >
        <header className={Styles.containerheder}>
            <img className={Styles.logoimg} src="./images/gappelt-log.png" alt="Imagem da logo do linkedin" />
            <div className={Styles.navlogos}>
              <a href={linkedinNome} target="_blank"  rel="noopener noreferrer">
                <img  
                className={Styles.socialmedia}
                src="./images/linkedin.png" 
                alt="Imagem da logo do linkedin"/>
              </a>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <img
                  className={Styles.socialmedia}
                  src="./images/whatsapp.png"
                  alt="Imagem da logo do whatsapp"
                />
              </a>
              <a href={mailtoLink}  target="_blank"  rel="noopener noreferrer">
                <img className={Styles.socialmedia}
                src="./images/gmail.png" 
                alt="Imagem da logo do E-mail" />
              </a>
          </div>
        </header>
      </div>
  
  )
}

export default Header
