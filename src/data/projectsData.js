export const projectsData = [
  {
    id: 'seia-rag',
    title: 'SEIA: Assistente Técnico com RAG',
    category: 'python',
    projectCat: 'GenAI & Engenharia de Dados',
    description:
      'Aplicação Full-stack que utiliza LLMs (Gemini) para ler OSs da API e manuais técnicos para responder dúvidas de campo.',
    tags: ['Python', 'Streamlit', 'Gemini API', 'RAG'],
    githubUrl: 'https://github.com/danilo-vinicius/ChatBot_SE.git',
    demoUrl: 'https://chatbotse.streamlit.app/',
    image: null,
    icon: 'fas fa-robot',
    bgClass: 'ai-bg'
  },
  {
    id: 'automacao-relatorios',
    title: 'Automação de Relatórios Corporativos',
    category: 'python',
    projectCat: 'Automação & RPA',
    description:
      'Eliminação de tarefas manuais repetitivas. Script que orquestra a coleta de arquivos em rede, valida dados e realiza disparos via SMTP com logs de auditoria.',
    tags: ['Python', 'Schedule', 'SMTP'],
    githubUrl: 'https://github.com/danilo-vinicius/Envio_de_email_automatico',
    demoUrl: null,
    image: null,
    icon: 'fab fa-python',
    bgClass: 'python-bg'
  },
  {
    id: 'gestao-os',
    title: 'Gestão de Ordens de Serviço',
    category: 'powerbi',
    projectCat: 'Business Intelligence',
    description:
      'Painel tático para acompanhamento de chamados técnicos e SLA. Migrado para arquitetura local para demonstração pública, mantendo toda a lógica de negócio e DAX.',
    tags: ['Power BI', 'Excel', 'DAX'],
    githubUrl: 'https://github.com/danilo-vinicius/Painel_Ordens-de-Servico.git',
    demoUrl: 'https://github.com/danilo-vinicius/Painel_Ordens-de-Servico.git',
    image: 'https://github.com/user-attachments/assets/ffacfaf7-3083-4558-b0c2-6c21d36bd29d',
    icon: null,
    bgClass: null
  },
  {
    id: 'previsao-churn',
    title: 'Previsão de Churn (Cancelamento)',
    category: 'python',
    projectCat: 'Machine Learning & Data Science',
    description:
      'Aplicação web que utiliza Inteligência Artificial (Random Forest) para calcular a probabilidade de um cliente cancelar o serviço. Treinado com mais de 7.000 registros reais.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit'],
    githubUrl: 'https://github.com/danilo-vinicius/churn-prediction-app.git',
    demoUrl: 'https://churn-app-dv.streamlit.app/',
    image: null,
    icon: 'fas fa-brain',
    bgClass: 'ml-bg'
  },
  {
    id: 'people-analytics',
    title: 'People Analytics: Retenção de Talentos',
    category: 'powerbi',
    projectCat: 'Business Intelligence & Analytics',
    description:
      'Dashboard estratégico para análise de Turnover (Rotatividade). Cruzamento de dados de salário, tempo de casa e performance para identificar perfis de risco e apoiar o RH na retenção.',
    tags: ['Power BI', 'DAX', 'Star Schema'],
    githubUrl: 'https://github.com/danilo-vinicius/people-analytics-dashboard.git',
    demoUrl: null,
    image: 'https://github.com/user-attachments/assets/354ced18-9cd5-430d-aeac-d0b53d18daef',
    icon: null,
    bgClass: null
  }
];

export const servicesData = [
  {
    id: 'de',
    title: 'Engenharia de Dados',
    description:
      'Construção de pipelines (ETL/ELT) robustos e escaláveis. Garanto que o dado saia da fonte bruta e chegue ao consumo analítico limpo, estruturado e confiável.',
    icon: 'fas fa-database',
    tags: ['SQL', 'ETL/ELT', 'Modelagem']
  },
  {
    id: 'bi',
    title: 'Business Intelligence',
    description:
      'Transformação de grandes volumes em painéis interativos de alto impacto. Foco em storytelling de dados e métricas operacionais para a tomada de decisão.',
    icon: 'fas fa-chart-pie',
    tags: ['Power BI', 'DAX', 'Storytelling']
  },
  {
    id: 'rpa',
    title: 'Automações & IA',
    description:
      'Eliminação de tarefas manuais repetitivas com scripts inteligentes e robôs. Integração de processos corporativos, automação de rotinas e soluções analíticas.',
    icon: 'fas fa-robot',
    tags: ['Python', 'Selenium', 'Power Automate']
  }
];

export const workProcessData = [
  {
    step: 1,
    title: 'Estratégia',
    subtitle: 'Business Understanding',
    description:
      'Mapeamento da dor do negócio. Defino quais perguntas precisam ser respondidas e quais KPIs indicam sucesso antes de escrever uma linha de código.',
    icon: 'fas fa-bullseye'
  },
  {
    step: 2,
    title: 'Engenharia',
    subtitle: 'ETL & Data Prep',
    description:
      'Extração de múltiplas fontes (API, SQL, Excel), limpeza e tratamento dos dados. Garanto a integridade e a arquitetura para performance.',
    icon: 'fas fa-cogs'
  },
  {
    step: 3,
    title: 'Inteligência',
    subtitle: 'Analysis & Modeling',
    description:
      'Aplicação de regras de negócio, estatística descritiva e algoritmos (Python/DAX) para descobrir padrões ocultos e tendências.',
    icon: 'fas fa-brain'
  },
  {
    step: 4,
    title: 'Entrega',
    subtitle: 'Actionable Insights',
    description:
      'Criação de dashboards intuitivos e storytelling. O foco não é o gráfico, mas a decisão que o gestor tomará ao olhar para ele.',
    icon: 'fas fa-rocket'
  }
];
