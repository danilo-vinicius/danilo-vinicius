import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faBolt,
  faDatabase,
  faCheckCircle,
  faArrowTrendUp
} from '@fortawesome/free-solid-svg-icons';
import './DashboardMockup.css';

export const DashboardMockup = () => {
  return (
    <div className="dashboard-mockup-wrapper">
      {/* Card Flutuante Superior (Badge de Notificação / Insight) */}
      <motion.div
        className="floating-badge-card top-float"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="float-badge-icon">
          <FontAwesomeIcon icon={faBolt} />
        </div>
        <div className="float-badge-info">
          <span className="float-badge-label">Rotina Automatizada</span>
          <strong className="float-badge-val">-320h / mês em tarefas manuais</strong>
        </div>
      </motion.div>

      {/* Painel Principal do Dashboard */}
      <div className="dashboard-main-frame">
        {/* Barra de Janela Superior */}
        <div className="dashboard-window-header">
          <div className="window-dots">
            <span className="dot dot-close" />
            <span className="dot dot-minimize" />
            <span className="dot dot-maximize" />
          </div>
          <div className="window-title">
            <span>analytics-governance.bi</span>
          </div>
          <div className="window-status">
            <span className="status-ping" />
            <span className="status-text">Live Sync</span>
          </div>
        </div>

        {/* Grade de KPIs Superiores */}
        <div className="mockup-kpis-grid">
          <div className="mockup-kpi-card">
            <div className="kpi-header">
              <span className="kpi-label">Eficiência Operacional</span>
              <span className="kpi-trend">
                <FontAwesomeIcon icon={faArrowTrendUp} /> +18.4%
              </span>
            </div>
            <div className="kpi-value">+94.2%</div>
            <div className="kpi-progress-bar">
              <div className="kpi-progress-fill" style={{ width: '94%' }} />
            </div>
          </div>

          <div className="mockup-kpi-card">
            <div className="kpi-header">
              <span className="kpi-label">Processos Ativos</span>
              <span className="kpi-tag">ETL & RPA</span>
            </div>
            <div className="kpi-value">1,420+</div>
            <span className="kpi-subtext">100% fluxos automatizados</span>
          </div>

          <div className="mockup-kpi-card">
            <div className="kpi-header">
              <span className="kpi-label">Volume Processado</span>
              <span className="kpi-tag highlight">SQL / BI</span>
            </div>
            <div className="kpi-value">4.8 TB</div>
            <span className="kpi-subtext">Bases integradas</span>
          </div>
        </div>

        {/* Visualização de Gráfico de Linha & Área */}
        <div className="mockup-chart-card">
          <div className="chart-card-header">
            <div>
              <h4 className="chart-title">Curva de Desempenho &amp; Redução de Esforço</h4>
              <p className="chart-subtitle">Economia acumulada de tempo operacional por ciclo</p>
            </div>
            <div className="chart-legend">
              <span className="legend-item">
                <span className="legend-dot current" /> Otimização Real
              </span>
              <span className="legend-item">
                <span className="legend-dot baseline" /> Base Manual
              </span>
            </div>
          </div>

          <div className="chart-svg-container">
            <svg viewBox="0 0 540 180" className="chart-svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--accent-primary)" stopOpacity="0.38" />
                  <stop offset="90%" stopColor="var(--accent-primary)" stopOpacity="0.01" />
                </linearGradient>
              </defs>

              {/* Linhas de Grade de Fundo Sutis */}
              <line x1="0" y1="40" x2="540" y2="40" className="chart-grid-line" />
              <line x1="0" y1="85" x2="540" y2="85" className="chart-grid-line" />
              <line x1="0" y1="130" x2="540" y2="130" className="chart-grid-line" />

              {/* Linha Tracejada Base Manual */}
              <path
                d="M 10 120 Q 140 115, 270 125 T 530 118"
                fill="none"
                stroke="var(--text-secondary)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                opacity="0.5"
              />

              {/* Área Sombreada Gradiente */}
              <path
                d="M 10 135 C 70 110, 140 120, 200 80 C 260 40, 320 65, 380 32 C 440 15, 480 25, 530 15 L 530 170 L 10 170 Z"
                fill="url(#areaGradient)"
              />

              {/* Linha Curva Principal */}
              <path
                d="M 10 135 C 70 110, 140 120, 200 80 C 260 40, 320 65, 380 32 C 440 15, 480 25, 530 15"
                fill="none"
                stroke="var(--accent-primary)"
                strokeWidth="3.2"
                strokeLinecap="round"
              />

              {/* Pontos de Destaque */}
              <circle cx="200" cy="80" r="4" fill="var(--accent-primary)" className="chart-point" />
              <circle cx="380" cy="32" r="5" fill="#FFFFFF" stroke="var(--accent-primary)" strokeWidth="3" className="chart-point active" />
              <circle cx="530" cy="15" r="4.5" fill="var(--accent-primary)" className="chart-point" />
            </svg>

            {/* Tooltip Flutuante no Ponto Alto */}
            <div className="chart-tooltip-pin">
              <span className="tooltip-tag">+94% Eficiência</span>
            </div>
          </div>

          <div className="chart-x-labels">
            <span>Jan</span>
            <span>Mar</span>
            <span>Mai</span>
            <span>Jul</span>
            <span>Set</span>
            <span>Nov</span>
          </div>
        </div>

        {/* Mini Seção de Barras Modulares */}
        <div className="mockup-bottom-row">
          <div className="mini-bars-block">
            <span className="mini-block-title">Aderência por Diretoria</span>
            <div className="bar-row">
              <span className="bar-label">Processos &amp; Inovação</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '96%' }} />
              </div>
              <span className="bar-num">96%</span>
            </div>
            <div className="bar-row">
              <span className="bar-label">Controladoria &amp; BI</span>
              <div className="bar-track">
                <div className="bar-fill" style={{ width: '89%' }} />
              </div>
              <span className="bar-num">89%</span>
            </div>
          </div>

          <div className="mini-audit-block">
            <div className="audit-icon">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div className="audit-text">
              <strong>Qualidade Assegurada</strong>
              <p>Validação contínua com regras de negócio e governança.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Card Flutuante Inferior (Status de Pipeline) */}
      <motion.div
        className="floating-badge-card bottom-float"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
      >
        <div className="float-badge-icon database-icon">
          <FontAwesomeIcon icon={faDatabase} />
        </div>
        <div className="float-badge-info">
          <span className="float-badge-label">Pipeline de Dados</span>
          <strong className="float-badge-val">Atualização Automática • 100% OK</strong>
        </div>
      </motion.div>
    </div>
  );
};

export default DashboardMockup;
