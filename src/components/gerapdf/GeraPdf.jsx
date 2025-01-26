async function GeraPdf(dadosForm) {
  try {
    /*
    const dadosForm = {
      nome: "Gabriel",
      sobrenome: "Silva",
      cidade: "São Paulo",
      cep: "12345-678",
      telefone: "(11) 98765-4321",
      email: "gabriel.silva@example.com",

    


      experiencia: [
        {
          cargo: "Desenvolvedor Front-End",
          empregador: "Tech Solutions",
          inicioexp: "01/2020",
          finalexp: "",
          cidade: "São Paulo",
          estado: "SP",
          trabalhoatual: false,
          descricaovaga: "Desenvolvimento de interfaces responsivas, implementações com React e manutenção de sites.",
        },
        {
          cargo: "Auxiliar de TI",
          empregador: "Empresa XYZ",
          inicioexp: "",
          finalexp: "12/2019",
          cidade: "Rio de Janeiro",
          estado: "",
          trabalhoatual: true,
          descricaovaga: "Manutenção de computadores,  Manutenção de computadores, suporte técnico e configuração de redes.Manutenção de computadores, suporte técnico e configuração de redes.suporte técnico e configuração de redes.",
        },
      ],
      formation: [
        {
          instituicao: "Universidade de São Paulo",
          cursoname: "Engenharia de Software",
          incialfomation: "01/2019",
          finalfomation: "12/2023",
          formationcidade: "São Paulo",
          tituloGraduacao: "Bacharel",
          Statusformation: "Concluído",
        },
        {
          instituicao: "Instituto Técnico de Tecnologia",
          cursoname: "Desenvolvimento Web",
          incialfomation: "01/2017",
          finalfomation: "12/2018",
          formationcidade: "Campinas",
          tituloGraduacao: "Certificado",
          Statusformation: "Concluído",
        },
      ],
      skilss: [
        {
          habilidades: "JavaScript",
          nivelhabilidade: "Avançado",
        },
        {
          habilidades: "CSS",
          nivelhabilidade: "Intermediário",
        },
        {
          habilidades: "HTML",
          nivelhabilidade: "Avançado",
        },
      ],
      idioma: [
        {
          idioma: "",
          nivelidioma: "Avançado",
        },
        {
          idioma: "",
          nivelidioma: "",
        },
      ],
      resumo:
        "Sou um profissional apaixonado por tecnologia, com experiência em desenvolvimento web e foco em criar soluções eficientes e inovadoras.",
      instagran: "@gabrielsilva",
      linkedin: "linkedin.com/in/gabrielsilva",
      Facebook: "facebook.com/gabrielsilva",
      carteiramotorista: "Categoria B",
      disponibilidadeviajem: "Disponível para viagens",
      pretencãosalarial: "R$ 5.000,00",
    };
    */



    // Importando pdfmake e vfs_fonts
    const pdfMake = (await import("pdfmake/build/pdfmake")).default;
    const pdfFonts = (await import("pdfmake/build/vfs_fonts")).default;

    // Configurando o vfs
    pdfMake.vfs = pdfFonts.vfs;

    // Título e informações básicas no cabeçalho
    const reportTitle = [
      
      dadosForm.nome && dadosForm.sobrenome ? {
        
        text: ` Curriculo ${dadosForm.nome} ${dadosForm.sobrenome}`,
        fontSize: 22,
        bold: true, 
        alignment: 'center', // Alinha o texto à esquerda
        margin: [0, 20, 0, 20],
      }: null,
    ];

   

const infoheader =  [
  dadosForm.cidade ? {
    text:[
      {text:"Cidade: ", bold:true, fontSize: 13}, 
      dadosForm.cidade
    ],
    fontSize: 12,
    alignment: "center",
  }: null,
  
   dadosForm.telefone ? {
    text: [
      {text:"Telefone ", bold: true, fontSize: 13}, 
      dadosForm.telefone
    ],
    fontSize: 12,
    alignment: "center",
  }:null,
  dadosForm.cep ? {
    text: [
      {text:"Cep: " , bold: true, fontSize: 13}, 
      dadosForm.cep
    ] ,
    fontSize: 12,
    alignment: "center"
  }: null,
  dadosForm.email ? {
    text: [
      { text: "Email: ", bold: true, fontSize: 13}, 
      dadosForm.email, 
    ],
    fontSize: 12,
    alignment: "center",
  }: null,
  
];

// Resumo
const resumoSection = [
  dadosForm.resumo ? { text: "Resumo Profissional", style: "sectionHeader" } : null,
  { text: dadosForm.resumo, margin: [0, 0, 0, 10] },
];


const experienciaSection = dadosForm.experiencia && dadosForm.experiencia.length > 0 ? [
  { text: "Experiência Profissional", style: "sectionHeader" },
  ...dadosForm.experiencia.filter((exp) => exp.cargo || exp.empregador).map((exp) => {
    const finalExp = exp.trabalhoatual ? "Trabalho Atual" : exp.finalexp;

    const content = [];

    if (exp.cargo || exp.empregador) {
      const columns = [];
      
      if (exp.cargo ) {
        columns.push({ text: [{ text: "Cargo: ", style: "boldtext" }, exp.cargo], width: '50%' });
      }
      
      if (exp.empregador )  {
        columns.push({ text: [{ text: "Empregador: ", style: "boldtext" }, exp.empregador], width: '50%' });
      }
      
      // Adicionando a coluna, mesmo que um dos campos esteja vazio
      if (columns.length > 0) {
        content.push({
          columns,
          columnGap: 10, // Espaçamento entre as colunas
        });
      }
    }
    

    if (exp.inicioexp || exp.finalexp) {
      const columns = []
      if(exp.inicioexp){
        columns.push({ text: [{ text: "Data inicial: ", style: "boldtext" }, exp.inicioexp], width: '50%' })
      }
      if(exp.finalexp){
        columns.push( { text: [{ text: "Data final: ", style: "boldtext" }, finalExp], width: '50%' })
      }
      content.push({
        columns, 
        columnGap: 10,
      });
    }



    if (exp.cidade || exp.estado) {
      const columns = [];
    
      if (exp.cidade) {
        columns.push({ text: [{ text: "Cidade: ", style: "boldtext" }, exp.cidade], width: '50%' });
      }
    
      if (exp.estado) {
        columns.push({ text: [{ text: "Estado: ", style: "boldtext" }, exp.estado], width: '50%' });
      }
    
      content.push({
        columns,
        columnGap: 10,
      });
    }
    
    if (exp.descricaovaga) {
      content.push({ text: [{ text: "Descrição da vaga: ", style: "boldtext" }, exp.descricaovaga] });
    }

    return {
      stack: content, // Usando stack para organizar cada seção em uma linha
      margin: [0, 0, 0, 10], // Margem inferior entre as experiências
    };
  }).filter(Boolean),
] : [];


// Formação
const formationSection = dadosForm.formation && dadosForm.formation.length > 0 ? [
  { text: "Formação Acadêmica", style: "sectionHeader" },
  ...dadosForm.formation.filter((form) => form.cursoname || form.instituicao).map((form) => {
    const content = [];

    if (form.cursoname || form.instituicao) {
      content.push({
        columns: [
          { text: [{ text: "Curso: ", style: "boldtext" }, form.cursoname], width: '50%' },
          { text: [{ text: "Instituição: ", style: "boldtext" }, form.instituicao], width: '50%' },
        ],
        columnGap: 10, // Espaçamento entre as colunas
      });
    }

    if (form.incialfomation || form.finalfomation) {
      const columns = [];
      if (form.incialfomation) {
        columns.push({ text: [{ text: "Data inicial: ", style: "boldtext" }, form.incialfomation], width: '50%' });
      }
      if (form.finalfomation) {
        columns.push({ text: [{ text: "Data final: ", style: "boldtext" }, form.finalfomation], width: '50%' });
      }
      content.push({
        columns,
        columnGap: 10,
      });
    }

    if (form.tituloGraduacao || form.Statusformation ) {
      const columns = []
      if(form.tituloGraduacao){
        columns.push({ text: [{ text: "Graduação: ", style: "boldtext" }, form.tituloGraduacao],  width: '50%'})
      }
       
      if(form.Statusformation){
        columns.push({ text: [{ text: "Status: ", style: "boldtext" }, form.Statusformation],  width: '50%' })
      }
      content.push({
        columns,
        columnGap: 10,
      });
    }


    if (form.formationcidade) {
      content.push({ text: [{ text: "Cidade: ", style: "boldtext" }, form.formationcidade] });
    }
    return {
      stack: content, // Usando stack para organizar cada seção em uma linha
      margin: [0, 0, 0, 10], // Margem inferior entre as formações
    };
  }).filter(Boolean),
] : [];


// Habilidades
const skillsSection = 
  Array.isArray(dadosForm.skilss) && 
  dadosForm.skilss.length > 0 && 
  dadosForm.skilss.some(skill => skill.habilidades) // Garante que há conteúdo válido no array
    ? [
        { text: "Habilidades Técnicas", style: "sectionHeader" },
        {
          ul: dadosForm.skilss
            .filter(skill => skill.habilidades) // Filtra itens inválidos
            .map(skill => `${skill.habilidades}`),
          margin: [0, 0, 0, 5],
        },
      ]
    : null;


// Idiomas

const idiomasSection = dadosForm.idioma && dadosForm.idioma.length > 0 ? [
  { text: "Idiomas", style: "sectionHeader" },
  {
    ul: dadosForm.idioma.map((idioma) => {
      // Verifique se as chaves existem
      return `${idioma.idioma || 'Idioma não especificado'} - ${idioma.nivelidioma || 'Nível não especificado'}`;
    }),
    margin: [0, 0, 0, 5],
  },
] : null;




const dadosextra =  [
  ...(dadosForm.linkedin || dadosForm.instagran || dadosForm.Facebook || dadosForm.carteiramotorista || dadosForm.disponibilidadeviajem || dadosForm.pretencãosalarial ? [
    {
      text: "Informações adicionais", style: "sectionHeader",
    }
  ] : []),
  // Verificação para LinkedIn e Instagram
  ...(dadosForm.linkedin || dadosForm.instagran ? [
    {
      text: [
        dadosForm.linkedin ? { text: "Linkedin: ", style: "boldtext" } : null,
        dadosForm.linkedin,
        dadosForm.instagran ? { text: "           Instagram: ", style: "boldtext" } : null,
        dadosForm.instagran
      ].filter(Boolean), // Remove valores null ou undefined
      margin: [0, 0, 0, 5],
    }
  ] : []),

  // Verificação para Facebook e Carteira de Motorista
  ...(dadosForm.Facebook || dadosForm.carteiramotorista ? [
    {
      text: [
        dadosForm.Facebook ? { text: "Facebook: ", style: "boldtext" } : null,
        dadosForm.Facebook,
        dadosForm.carteiramotorista ? { text: "           Carteira de motorista: ", style: "boldtext" } : null,
        dadosForm.carteiramotorista
      ].filter(Boolean), // Remove valores null ou undefined
      margin: [0, 0, 0, 5],
    }
  ] : []),

  // Verificação para Disponibilidade para viagem e Pretensão salarial
  ...(dadosForm.disponibilidadeviajem || dadosForm.pretencãosalarial ? [
    {
      text: [
        dadosForm.disponibilidadeviajem ? { text: "Disponibilidade para viagem: ", style: "boldtext" } : null,
        dadosForm.disponibilidadeviajem,
        dadosForm.pretencãosalarial ? { text: "           Pretensão salarial: ", style: "boldtext" } : null,
        dadosForm.pretencãosalarial
      ].filter(Boolean), // Remove valores null ou undefined
      margin: [0, 0, 0, 5],
    }
  ] : []),
];

// Rodapé
const Rodape = (currentPage, pageCount) => {
  return {
    text: `Página ${currentPage} de ${pageCount}`,
    alignment: "center",
    fontSize: 9,
    margin: [0, 10, 0, 0],
  };
};

// Configuração do documento
const docDefinitios = {
  pageSize: "A4",
  pageMargins: [40, 60, 40, 40],
  header: [reportTitle],
  content: [
    infoheader, 
    resumoSection,
    experienciaSection,
    formationSection,
    skillsSection,
    idiomasSection,
    dadosextra,
  ],
  footer: Rodape,
  styles: {
    sectionHeader: {
      fontSize: 14,
      bold: true,
      margin: [0, 10, 0, 10],
    },
    boldtext:{
      bold: true,
    }
  },
};

    // Gerando e fazendo download do PDF
    pdfMake.createPdf(docDefinitios).download("curriculo.pdf");
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
  }
}

export default GeraPdf;