const DownloadCV = ({ dadosForm }) => {
  if(!dadosForm){
    return <p>Dados não disponíveis</p>;
  }
  return (
    <div>
       <h1>Baixar CV</h1>
         <p>Nome: {dadosForm.nome || "N/A"}</p>
         <p>Sobrenome: {dadosForm.sobrenome || "N/A"}</p>
         <p>Cidade: {dadosForm.cidade || "N/A"}</p>
         <p>CEP: {dadosForm.cep || "N/A"}</p>
         <p>Telefone: {dadosForm.telefone || "N/A"}</p>
         <p>Cargo: {dadosForm.cargo || "N/A"}</p>
         <p>Empregador: {dadosForm.empregador || "N/A"}</p>
         <p>Inicio/Termino: {dadosForm.incioTermino || "N/A"}</p>
         <p>Cidade: {dadosForm.cidade || "N/A"}</p>
         <p>Estado: {dadosForm.estado || "N/A"}</p>
         <p>Trabalho atual: {dadosForm.trabalhoatual || "N/A"}</p>
         <p>Descrição da vaga: {dadosForm.descricaovaga || "N/A"}</p>
      
    </div>
  );
};

export default DownloadCV;
