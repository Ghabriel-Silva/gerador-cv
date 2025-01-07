const DownloadCV = ({ dadosForm }) => {
  if(!dadosForm){
    return <p>Dados não disponíveis</p>;
  }
  return (
    <div>
       <h1>Baixar CV</h1>
         <div>
           <p>Nome: {dadosForm.nome || "N/A"}</p>
           <p>Sobrenome: {dadosForm.sobrenome || "N/A"}</p>
           <p>Cidade: {dadosForm.cidade || "N/A"}</p>
           <p>CEP: {dadosForm.cep || "N/A"}</p>
           <p>Telefone: {dadosForm.telefone || "N/A"}</p>
         </div>
        
        <div>
          {dadosForm.experiencia.map((exp)=>(
            <div key={exp.id}> 
              <p>Cargo: {exp.cargo || "N/A"}</p>
              <p>Empregador: {exp.empregador|| "N/A"}</p>
              <p>Inicio: {exp.inicioexp || "N/A"}</p>
              {!exp.trabalhoatual && exp.finalexp && <p> Final: {exp.finalexp} </p> }
              <p>Cidade: {exp.cidade || "N/A"}</p>
              <p>Estado: {exp.estado || "N/A"}</p>
              <p>Trabalho atual: {exp.trabalhoatual ? 'Sim' : 'Não'}</p>
              <p>Descrição da vaga: {exp.descricaovaga || "N/A"}</p>
            </div>
          ))}
        </div>

      
    </div>
  );
};

export default DownloadCV;
