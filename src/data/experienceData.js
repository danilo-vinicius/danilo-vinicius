export const experienceData = [
  {
    id: 'brasfort-analista',
    role: 'Analista de Sistemas',
    company: 'Brasfort (Setor de Processos e Performance - Dir. de Inovação e Processos)',
    period: 'Ago 2026 - Atual',
    responsibilities: [
      'Criação de dashboards executivos e operacionais para análises técnicas e estratégicas.',
      'Revisão, mapeamento e construção de processos corporativos de performance.',
      'Desenvolvimento de automações de dados e otimização de rotinas de trabalho.'
    ]
  },
  {
    id: 'brasfort-tecnico',
    role: 'Técnico de Suporte & Dados',
    company: 'Brasfort (Segurança Eletrônica)',
    period: 'Mar 2025 - Ago 2026',
    responsibilities: [
      'Desenvolvimento de painéis executivos em Power BI para segurança eletrônica.',
      'Mapeamento de fluxos (BPMN) e estudos de integração via API.',
      'Desenvolvimento de Apps corporativos via Google AppSheet.'
    ]
  },
  {
    id: 'presidencia',
    role: 'Estagiário de Power BI',
    company: 'Presidência da República',
    period: 'Jan 2024 - Mar 2025',
    responsibilities: [
      'Refinamento de dashboards governamentais para visualização de dados críticos.',
      'Automação de fluxos de trabalho com Power Automate.'
    ]
  },
  {
    id: 'ebserh',
    role: 'Estagiário de TI',
    company: 'EBSERH',
    period: 'Jul 2022 - Jul 2024',
    responsibilities: [
      'Análise de dados educacionais e KPIs de desempenho de alunos.',
      'Relatórios gerenciais avançados em Excel para suporte à decisão.'
    ]
  }
];

export const educationData = [
  {
    id: 'pos-eng-dados-ia',
    degree: 'Pós-Graduação em Eng. de Dados e IA',
    subtitle: 'Engenharia de Dados e Inteligência Artificial',
    institution: 'Estácio',
    period: 'Ago/2026 - Ago/2027',
    status: 'Em Andamento',
    icon: 'fas fa-brain',
    isCurrent: true
  },
  {
    id: 'pos-data-science',
    degree: 'Pós-Graduação em Data Science',
    subtitle: 'Ciência de Dados e Big Data Analytics',
    institution: 'Estácio',
    period: 'Concluído em Jun/2026',
    status: 'Concluído',
    icon: 'fas fa-chart-line',
    isCurrent: false
  },
  {
    id: 'grad-ads',
    degree: 'Graduação em ADS',
    subtitle: 'Análise e Desenvolvimento de Sistemas',
    institution: 'UCB - Católica',
    period: 'Jun/2025',
    status: 'Concluído',
    icon: 'fas fa-laptop-code',
    isCurrent: false
  }
];

export const specialtiesData = [
  {
    id: 'engenharia-dados',
    icon: 'fas fa-database',
    title: 'Engenharia & Modelagem de Dados',
    badge: 'Pipelines & ETL',
    description:
      'Construção e sustentação de pipelines de dados eficientes. Extração, limpeza e modelagem dimensional para alimentar análises e relatórios com dados confiáveis e escaláveis.',
    skills: [
      { name: 'Python', role: 'Pandas, automação e scripts de tratamento' },
      { name: 'SQL Analítico', role: 'Queries avançadas, Views e joins complexos' },
      { name: 'Modelagem de Dados', role: 'Estruturação relacional e Star Schema' },
      { name: 'Git & Versionamento', role: 'Controle de versão e boas práticas' }
    ]
  },
  {
    id: 'bi-analytics',
    icon: 'fas fa-chart-bar',
    title: 'BI & Data Analytics',
    badge: 'Estratégia & Decisão',
    description:
      'Desenvolvimento de painéis executivos e gerenciais de alto impacto. Tradução de grandes volumes de informação em narrativas visuais orientadas à tomada de decisão ágil.',
    skills: [
      { name: 'Power BI', role: 'DAX avançado, modelagem e relatórios dinâmicos' },
      { name: 'Data Storytelling', role: 'UX/UI voltado à experiência analítica' },
      { name: 'Excel Avançado', role: 'Power Query, fórmulas complexas e modelos' },
      { name: 'KPIs Executivos', role: 'Gestão de indicadores e metas operacionais' }
    ]
  },
  {
    id: 'automacao-processos',
    icon: 'fas fa-robot',
    title: 'Automação & Processos',
    badge: 'Inovação & Eficiência',
    description:
      'Mapeamento de fluxos corporativos e eliminação de tarefas manuais repetitivas por meio de fluxos automatizados em nuvem e desenvolvimento de soluções integradas.',
    skills: [
      { name: 'Power Automate', role: 'Fluxos em nuvem e automação de rotinas' },
      { name: 'Mapeamento de Processos', role: 'Notação BPMN e melhoria contínua' },
      { name: 'Google AppSheet', role: 'Aplicações corporativas ágeis' },
      { name: 'Integrações de Dados', role: 'Conexão entre bases e APIs' }
    ]
  }
];

export const skillsData = [
  {
    name: 'Python',
    detail: 'Pandas & Auto',
    icon: 'fab fa-python',
    color: '#ffe873'
  },
  {
    name: 'SQL',
    detail: 'Queries & Views',
    icon: 'fas fa-database',
    color: '#0077b5'
  },
  {
    name: 'Power BI',
    detail: 'DAX & Storytelling',
    icon: 'fas fa-chart-bar',
    color: '#f2c811'
  },
  {
    name: 'Excel',
    detail: 'VBA & Power Query',
    icon: 'fas fa-file-excel',
    color: '#217346'
  },
  {
    name: 'Power Automate',
    detail: 'Fluxos Cloud',
    icon: 'fas fa-robot',
    color: '#38BDF8'
  },
  {
    name: 'Git',
    detail: 'Versionamento',
    icon: 'fab fa-git-alt',
    color: '#f14e32'
  }
];

