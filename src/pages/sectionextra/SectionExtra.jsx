import React from "react";
import DynamicButtons from "../../components/dinamicbuttons/DynamicButtons";
import DynamicComponent from "../../components/dynamiccomponent/DynamicComponent";
import { navigatetoPage } from "../../utils";
import { useNavigate } from "react-router-dom";
import Styles from '../../components/styleform/StylesForm.module.css'


const SectionExtra = ({ dadosForm, setDadosForm }) => {
  const navigate = useNavigate();

  const handleNavigateToResumo = () => {
    navigatetoPage(navigate, "/resumo");
  };

  const handleNavigateToDownload = () => {
    navigatetoPage(navigate, "/download");
  };

  const pegaValorDadosExtra = (e) => {
    const { name, value } = e.target;
    setDadosForm((prev) => ({
      ...prev, [name] : value
    }));
  };

  return (
    <div className={Styles.formcontain}>
      <DynamicComponent
        title={"Dados Extras"}
        text={"Opcional: Insira informações adicionais para complementar os dados fornecidos."}
      />

      <form className={`${Styles.formcontain} ${Styles.formcotandow}`}>
            <div>
              <div className={Styles.inputGroup}>
                <input
                  type="text"
                  name="instagran"
                  value={dadosForm.instagran}
                  required
                  onChange={pegaValorDadosExtra}
                />
                <label>@Instagram</label>
              </div>
              <div className={Styles.inputGroup}>
                <input
                  type="text"
                  name="linkedin"
                  value={dadosForm.linkedin}
                  required
                  onChange={pegaValorDadosExtra}
                />
                <label>LinkedIn</label>
              </div>
              <div className={Styles.inputGroup}>
                <input
                  type="text"
                  name="facebook"
                  value={dadosForm.facebook}
                  required
                  onChange={pegaValorDadosExtra}
                />
                <label>Facebook</label>
              </div>
            </div>

              <div>
                <div className={Styles.inputdropdown}>
                  <label className={Styles.inpudowlabel}>Selecione a categoria da CNH:</label>
                  <select
                    name="carteiramotorista"
                    onChange={pegaValorDadosExtra} 
                    value={dadosForm.carteiramotorista}
                  >
                    <option value="" hidden></option>
                    <option value="A">A</option>
                    <option value="A-B">A-B</option>
                    <option value="A-B-C">A-B-C</option>
                    <option value="A-B-C-D">A-B-C-D</option>
                    <option value="A-B-C-D-E">A-B-C-D-E</option>
                  </select>
                </div>

                <div className={Styles.inputdropdown}>
                  <label  className={Styles.inpudowlabel}>Disponibilidadeviagem:</label>
                  <select
                    name="disponibilidadeviajem"
                    onChange={pegaValorDadosExtra} 
                    value={dadosForm.disponibilidadeviajem}
                  >
                    <option value="" hidden></option>
                    <option value="Sim">Sim</option>
                    <option value="Nao">Não</option>
                    <option value="Negociável">Negociável</option>
                  </select>
                </div>

                <div className={Styles.inputdropdown}>
                  <label   className={Styles.inpudowlabel}>Pretensão Salarial:</label>
                  <select
                    name="pretencãosalarial"
                    onChange={pegaValorDadosExtra} 
                    value={dadosForm.pretencãosalarial}
                  >
                    <option value="" hidden></option>
                    <option value=">Até 1.000 R$">Até 1.000 R$</option>
                    <option value="1.000 a 1.500 R$">1.000 a 1.500 R$</option>
                    <option value="1.500 a 2.000 R$">1.500 a 2.000 R$</option>
                    <option value="2.000 a 2.500 R$">2.000 a 2.500 R$</option>
                    <option value="Mais que 3.000 R$">Mais que 3.000 R$</option>
                  </select>
                </div>
              </div>
      </form>

      <DynamicButtons
        avancar={handleNavigateToDownload}
        voltar={handleNavigateToResumo}
      />
    </div>
  );
};

export default SectionExtra;
