import Styles from "./DownloadCV.module.css";

const DownloadCV = ({ dadosForm }) => {
  if (!dadosForm) {
    return <p className={Styles.dadosNaoDisponiveis}>Dados não disponíveis</p>;
  }
  return (
    <div className={Styles.curriculo}>
      {/* Cabeçalho */}
      <div className={Styles.header}>
        <h1 className={Styles.nome}>
          {dadosForm.nome} {dadosForm.sobrenome}
        </h1>
        <p className={Styles.contato}>
          Telefone: {dadosForm.telefone || "N/A"} | E-mail: {dadosForm.email || "N/A"}
        </p>
        <p className={Styles.contato}>Cidade: {dadosForm.cidade || "N/A"}</p>
      </div>

      {/* Resumo */}
      {dadosForm.resumo && (
        <section className={Styles.secaoResumo}>
          <h2>Resumo Profissional</h2>
          <p>{dadosForm.resumo}</p>
        </section>
      )}

      {/* Experiência Profissional */}
      <section className={Styles.secaoExperiencia}>
        <h2>Experiência Profissional</h2>
        {dadosForm.experiencia.map((exp) => (
          <div key={exp.id} className={Styles.experienciaItem}>
            <p>Cargo: {exp.cargo || "N/A"}</p>
            <p>Empregador: {exp.empregador || "N/A"}</p>
            <p>Início: {exp.inicioexp || "N/A"}</p>
            {!exp.trabalhoatual && exp.finalexp && <p>Final: {exp.finalexp}</p>}
            <p>Cidade: {exp.cidade || "N/A"}</p>
            <p>Estado: {exp.estado || "N/A"}</p>
            <p>Descrição: {exp.descricaovaga || "N/A"}</p>
          </div>
        ))}
      </section>

      {/* Formação Acadêmica */}
      <section className={Styles.secaoFormacao}>
        <h2>Formação Acadêmica</h2>
        {dadosForm.formation.map((forma) => (
          <div key={forma.id} className={Styles.formacaoItem}>
            <p>Instituição: {forma.instituicao}</p>
            <p>Curso: {forma.cursoname}</p>
            <p>Início: {forma.incialfomation}</p>
            <p>Término: {forma.finalfomation}</p>
            <p>Cidade: {forma.formationcidade}</p>
            <p>Nível: {forma.tituloGraduacao}</p>
            <p>Status: {forma.Statusformation}</p>
          </div>
        ))}
      </section>

      {/* Habilidades */}
      <section className={Styles.secaoHabilidades}>
        {dadosForm.skilss && (
          <>
            <h2>Habilidades</h2>
            <ul>
              {dadosForm.skilss.map((habil) => (
                <li key={habil.id}>
                  {habil.habilidades || "Habilidade não informada"} -{" "}
                  {habil.nivelhabilidade || "Nível não informado"}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Idiomas */}
      <section className={Styles.secaoIdiomas}>
        {dadosForm.idioma && (
          <>
            <h2>Idiomas</h2>
            <ul>
              {dadosForm.idioma.map((idio) => (
                <li key={idio.id}>
                  {idio.idioma || "Idioma não informado"} -{" "}
                  {idio.nivelidioma || "Nível não informado"}
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Informações adicionais */}
      <section className={Styles.secaoExtra}>
        <h2>Informações Adicionais</h2>
        {dadosForm.instagran && <p>Instagram: {dadosForm.instagran}</p>}
        {dadosForm.linkedin && <p>LinkedIn: {dadosForm.linkedin}</p>}
        {dadosForm.Facebook && <p>Facebook: {dadosForm.Facebook}</p>}
        {dadosForm.carteiramotorista && (
          <p>Carteira de Motorista: {dadosForm.carteiramotorista}</p>
        )}
        {dadosForm.disponibilidadeviajem && (
          <p>Disponibilidade para Viagem: {dadosForm.disponibilidadeviajem}</p>
        )}
        {dadosForm.pretencãosalarial && (
          <p>Pretensão Salarial: {dadosForm.pretencãosalarial}</p>
        )}
      </section>
    </div>
  );
};

export default DownloadCV;
