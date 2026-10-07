# Especificação de Design: Migração do Portfólio para React (Vite SPA)

**Data:** 07/10/2026  
**Autor:** Antigravity (Pair Programming)  
**Projeto:** Portfólio Danilo Vinícius (Data Analyst & BI Specialist)

---

## 1. Visão Geral e Objetivos

O objetivo deste projeto é refatorar o portfólio pessoal atual (baseado em arquivos HTML estáticos múltiplos, CSS monolítico e scripts Vanilla JS imperativos) para uma aplicação web moderna em **React (Vite SPA)**.

### Benefícios da Migração:
- **Navegação SPA fluída**: Transições de tela instantâneas sem recarregamento da página (Framer Motion + React Router).
- **Componentização e Reutilização**: Navbar, Theme Toggle, Footer, Cards de Projeto e Tickers como componentes isolados e testáveis.
- **Estado Global Reativo**: Gerenciamento do tema (Light/Dark Mode) através do React Context API com persistência no `localStorage`.
- **Manutenibilidade Simplificada**: Separação dos dados dos projetos e trajetórias em arquivos de dados (`data/projects.js`, `data/experience.js`), facilitando atualizações futuras sem tocar na estrutura visual.
- **Deploy Automatizado**: Configuração de GitHub Actions para compilação Vite e deploy automático no GitHub Pages.

---

## 2. Arquitetura do Sistema e Stack Tecnológica

### Stack Selecionada:
- **Build Tool / Bundler**: Vite (React JS/JSX)
- **Roteamento**: `react-router-dom` (v6+)
- **Gerenciamento de Estado**: React Context API (`ThemeContext`)
- **Animações**: `framer-motion` (substituindo `ScrollReveal.js`)
- **Estilização**: CSS Modularizado / CSS Nativo refatorado do `styles.css` existente
- **Ícones & Fontes**: FontAwesome (`@fortawesome/react-fontawesome`) & Google Fonts (*Josefin Sans*)
- **Deploy**: GitHub Actions (`actions/deploy-pages`) em resposta a pushes na branch `main`.

---

## 3. Estrutura de Diretórios Proposta

```
danilo-vinicius/
├── public/
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── assets/               # Imagens locais (logos, banners, foto de perfil)
│   ├── components/           # Componentes funcionais reutilizáveis
│   │   ├── Navbar/           # Menu flutuante, logo fixa e detecção de scroll (Smart Hide)
│   │   ├── ThemeFloater/     # Botão flutuante para alternar tema Light/Dark
│   │   ├── Typewriter/       # Componente de efeito de digitação (substitui lógica manual)
│   │   ├── TechTicker/       # Faixa animada de tecnologias (Python, SQL, PowerBI, etc.)
│   │   ├── ProjectCard/      # Card individual de exibição de projeto
│   │   ├── ProjectFilter/    # Botões de filtragem por categoria (Todos, BI, Python, etc.)
│   │   ├── Pagination/       # Controles de paginação reativa de projetos
│   │   ├── Timeline/         # Linha do tempo de experiência profissional
│   │   ├── Carousel/         # Carrossel interativo de serviços / destaques
│   │   └── Footer/           # Rodapé da aplicação
│   ├── context/
│   │   └── ThemeContext.jsx  # Provê o tema (dark/light) e função toggleTheme()
│   ├── data/
│   │   ├── projectsData.js   # Lista de projetos com título, categoria, descrição, tags, links
│   │   ├── experienceData.js # Trajetória profissional e formação acadêmica
│   │   └── statsData.js      # Métricas e estatísticas do portfólio
│   ├── pages/                # Componentes que representam páginas/rotas
│   │   ├── Home.jsx          # Hero section, typewriter, badge gold e tech ticker
│   │   ├── Sobre.jsx         # História, estatísticas, trajetória e skills dock
│   │   ├── Projetos.jsx      # Vitrine de projetos com filtro e paginação
│   │   └── Contato.jsx       # Formulário e dados de contato
│   ├── styles/
│   │   ├── variables.css     # Variáveis CSS (Cores, fontes, sombras)
│   │   ├── global.css        # Resets globais e regras do body/theme
│   │   └── components/       # CSS relativo a componentes específicos
│   ├── App.jsx               # Rotas principais com React Router e Layout Wrapper
│   └── main.jsx              # Ponto de entrada do React
├── index.html                # Template HTML base do Vite
├── vite.config.js            # Configurações do Vite (base path para GitHub Pages)
├── package.json
└── .github/workflows/
    └── deploy.yml            # Workflow de Build & Deploy no GitHub Pages
```

---

## 4. Mapeamento de Funcionalidades & Componentes React

| Funcionalidade Atual (Vanilla JS/HTML) | Solução em React | Detalhes da Implementação |
| :--- | :--- | :--- |
| **Alternador de Tema (Dark/Light)** | `ThemeContext` + `ThemeFloater.jsx` | Armazena estado em `localStorage`, injeta classe `light-mode` no `document.body`. |
| **Typewriter Effect** | `Typewriter.jsx` (Custom Hook / `useEffect`) | Alterna as frases ("Ciência de Dados", "Power BI", etc.) de forma declarativa e limpa. |
| **Smart Hide Navbar** | `useScroll` Hook em `Navbar.jsx` | Monitora `window.scrollY` e movimento do mouse para ocultar/exibir navbars com transições CSS. |
| **Filtro de Projetos** | Estado `activeFilter` em `Projetos.jsx` | `projectsData.filter(p => activeFilter === 'all' \|\| p.category === activeFilter)`. |
| **Paginação de Projetos** | Estado `currentPage` + `cardsPerPage` (3) | Fatia o array filtrado com `.slice(start, end)` e renderiza botões de paginação. |
| **Carrossel Automático** | `Carousel.jsx` (`useEffect` com `setInterval`) | Troca de slides automática com pausa no `onMouseEnter` e retoque manual via dots. |
| **Animações ao Rolar (ScrollReveal)** | `framer-motion` (`motion.div` com `whileInView`) | Animações limpas e nativas de entrada (`opacity: 0 -> 1`, `y: 20 -> 0`). |

---

## 5. Estratégia de Migração em Etapas

### Fase 1: Setup & Infraestrutura Inicial
1. Inicialização do projeto Vite React no diretório de trabalho ou estruturação dos arquivos.
2. Instalação das dependências principais (`react-router-dom`, `framer-motion`, `@fortawesome/react-fontawesome`, etc.).
3. Configuração do `vite.config.js` com suporte a caminhos relativos/base para GitHub Pages.

### Fase 2: Configuração Global & Tema
1. Criação do `ThemeContext.jsx` para suportar alternância de tema Dark/Light.
2. Migração das variáveis de CSS e regras globais do `styles.css` original para `src/styles/variables.css` e `global.css`.

### Fase 3: Componentes de Layout Base
1. Implementação da `Navbar` (logo fixa + menu flutuante + smart hide on scroll).
2. Implementação do `ThemeFloater` e do `Footer`.
3. Configuração das rotas em `App.jsx` (`/`, `/sobre`, `/projetos`, `/contato`).

### Fase 4: Desenvolvimento das Páginas
1. **Home (`/`)**: Hero section, `Typewriter`, `TechTicker`, botões primários.
2. **Sobre (`/sobre`)**: Apresentação, barra de estatísticas, linha do tempo (`Timeline`), skills dock.
3. **Projetos (`/projetos`)**: Extração dos projetos para `data/projectsData.js`, implementação dos filtros e da paginação reativa.
4. **Contato (`/contato`)**: Informações de contato e formulário/links diretos.

### Fase 5: Animações & Polimento
1. Substituição do ScrollReveal por Framer Motion (`whileInView`, `viewport={{ once: true }}`).
2. Testes de responsividade mobile e alternância de temas em todas as telas.

### Fase 6: Automação & Deploy
1. Atualização do workflow do GitHub Actions em `.github/workflows/deploy.yml` para compilar o Vite e fazer deploy na branch `gh-pages` ou ambiente do GitHub Pages.

---

## 6. Verificação & Critérios de Aceite

- [ ] Todas as 4 rotas (`/`, `/sobre`, `/projetos`, `/contato`) funcionam perfeitamente no React Router.
- [ ] O tema Claro/Escuro (Light/Dark) persiste entre trocas de páginas e recarregamento da tela.
- [ ] O filtro de categoria e a paginação de projetos funcionam sem bugs visuais.
- [ ] O efeito de digitação e a barra deslizante de tecnologias (Tech Ticker) rolam suavemente.
- [ ] O design responsivo e todos os estilos originais foram 100% preservados.
- [ ] O build de produção (`npm run build`) executa sem erros e é publicado no GitHub Pages.
