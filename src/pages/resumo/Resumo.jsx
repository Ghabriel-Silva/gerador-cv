import React, { useEffect } from "react";
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons";
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent";
import { navigatetoPage } from "../../utils";
import { useNavigate } from "react-router-dom";
import Styles from "../../components/styleform/StylesForm.module.css";

const Resumo = ({ dadosForm, setDadosForm }) => {
  const navigate = useNavigate();

  const handleNavigateToIdioma = () => {
    navigatetoPage(navigate, "/idioma");
  };

  const handleNavigateToSectionExtra = () => {
    navigatetoPage(navigate, "/sectionextra");
  };

  const recebeDadosResumo = (e) => {
    const { name, value } = e.target;
    setDadosForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    const textarea = document.querySelector("textarea[name='resumo']");
    if (textarea) {
      textarea.style.height = "auto"; 
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [dadosForm.resumo]); // Executa sempre que o conteúdo do resumo mudar

  return (
    <div className={`${Styles.containerComponents}`}>
      <DynamicComponent
        title={"Resumo profissional"}
        text={"Resuma sua experiência profissional ou objetivo em algumas frases"}
      />

      <form className={Styles.formcontain}>
        <div className={`${Styles.inputGroup} ${Styles.resumo}`}>
          <textarea
            name="resumo"
            value={dadosForm.resumo}
            required
            onChange={recebeDadosResumo}
            rows="auto"
            onInput={(e) => {
              e.target.style.height = "auto"; // Reseta altura para recalcular
              e.target.style.height = `${e.target.scrollHeight}px`; // Ajusta altura
            }}
            style={{
              resize: "none", // Impede redimensionamento manual
              width: "100%",
              boxSizing: "border-box",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "12px",
              border: "1px solid #ccc",
            }}
          ></textarea>
          <label>Resumo</label>
        </div>
      </form>

      <DynamicButtons
        avancar={handleNavigateToSectionExtra}
        voltar={handleNavigateToIdioma}
      />
    </div>
  );
};

export default Resumo;
