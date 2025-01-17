async function GeraPdf(dadosForm) {
  try {
    // Dados simulados para não precisar preencher o formulário
    /*const mockData = {
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
          finalexp: "12/2022",
          cidade: "São Paulo",
          estado: "SP",
          trabalhoatual: false,
          descricaovaga: "Desenvolvimento de interfaces responsivas, implementações com React e manutenção de sites.",
        },
        {
          cargo: "Auxiliar de TI",
          empregador: "Empresa XYZ",
          inicioexp: "01/2018",
          finalexp: "12/2019",
          cidade: "Rio de Janeiro",
          estado: "RJ",
          trabalhoatual: false,
          descricaovaga: "Manutenção de computadores, suporte técnico e configuração de redes.",
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
          formationcidade: "Campinas CampinasCampinasCampinasCampinasCampinasCampinasCampinas",
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
          Idioma: "Inglês",
          nivelidioma: "Avançado",
        },
        {
          Idioma: "Espanhol",
          nivelidioma: "Intermediário",
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
        text: `${dadosForm.nome} ${dadosForm.sobrenome}`,
        fontSize: 22,
        bold: true,
        background:'#ADD8E6', 
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
  ...dadosForm.experiencia.filter((exp) => exp.cargo && exp.empregador).map((exp) => {
    const finalExp = exp.trabalhoatual ? "Trabalho Atual" : exp.finalexp;

    // Começamos a construir o texto
    const textContent = [];

    // Adiciona o cargo e empregador, se estiverem preenchidos
    if (exp.cargo && exp.empregador) {
      textContent.push(`${exp.cargo} - ${exp.empregador} - (${exp.inicioexp} - ${finalExp})\n`);
    }

    // Adiciona "Cidade" se o campo estiver preenchido
    if (exp.cidade) {
      textContent.push({ text: "Cidade: ", style: "boldtext" }, exp.cidade);
    }

    // Adiciona "Estado" se o campo estiver preenchido
    if (exp.estado) {
      textContent.push({ text: "Estado: ", style: "boldtext" }, exp.estado);
    }

    // Adiciona "Descrição da vaga" se o campo estiver preenchido
    if (exp.descricaovaga) {
      textContent.push({ text: "Descrição da vaga: ", style: "boldtext" }, exp.descricaovaga);
    }

    // Verifica se há algum texto para exibir
    if (textContent.length > 0) {
      return {
        text: textContent,
        margin: [0, 0, 0, 10],
      };
    }

    // Retorna null se não houver dados para exibir
    return null;
  }).filter(Boolean), // Remove itens null ou undefined
] : [];


// Formação
const formationSection = dadosForm.formation && dadosForm.formation.length > 0 ? [
  { text: "Formação Acadêmica", style: "sectionHeader" },
  ...dadosForm.formation.map((form) => {
    // Iniciar a construção do texto
    const textContent = [];

    // Adiciona o nome do curso e instituição, se estiverem preenchidos
    if (form.cursoname && form.instituicao) {
      textContent.push(`${form.cursoname} - ${form.instituicao} - (${form.incialfomation} - ${form.finalfomation})\n`);
    }

    // Adiciona "Cidade" se o campo estiver preenchido
    if (form.formationcidade) {
      textContent.push({ text: "Cidade: ", style: "boldtext" }, form.formationcidade);
    }

    // Adiciona "Graduação" se o campo estiver preenchido
    if (form.tituloGraduacao) {
      textContent.push({ text: "Graduação: ", style: "boldtext" }, form.tituloGraduacao);
    }

    // Adiciona "Status" se o campo estiver preenchido
    if (form.Statusformation) {
      textContent.push({ text: "Status: ", style: "boldtext" }, form.Statusformation);
    }

    // Verifica se há algum texto para exibir
    if (textContent.length > 0) {
      return {
        text: textContent,
        margin: [0, 0, 0, 10],
      };
    }

    // Retorna null se não houver dados para exibir
    return null;
  }).filter(Boolean), // Remove itens null ou undefined
] : null;


// Habilidades
const skillsSection = dadosForm.skilss && dadosForm.skilss.length > 0 ? [
  { text: "Habilidades Técnicas", style: "sectionHeader" },
  {
    ul: dadosForm.skilss.map((skill) => `${skill.habilidades} - ${skill.nivelhabilidade}`),
    margin: [0, 0, 0, 5],
  },
] : null;

// Idiomas

const idiomasSection = dadosForm.idioma && dadosForm.idioma.length > 0 ? [
  { text: "Idiomas", style: "sectionHeader" },
  {
    ul: dadosForm.idioma.map((idioma) => {
      // Verifique se as chaves existem
      console.log(idioma); // Verifique o conteúdo do objeto
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
