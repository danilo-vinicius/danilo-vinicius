import React from "react";
import Timeline from "./timeline-01-utils/timeline";
import { experienceData } from "../../data/experienceData";
import "./timeline-01.css";

const TimelineBlock01 = ({ items = experienceData }) => {
  return (
    <section className="tl01-section">
      <div className="tl01-wrapper">
        <header className="tl01-header">
          <span className="tl01-badge">Trajetória Profissional</span>
          <h2>Evolução &amp; Impacto em Dados</h2>
          <p>
            Uma jornada dedicada à transformação de dados em inteligência estratégica, construindo desde automações e painéis gerenciais até a liderança em análises e revisão de processos corporativos.
          </p>
        </header>

        <div className="tl01-body">
          <Timeline items={items} />
        </div>
      </div>
    </section>
  );
};

export default TimelineBlock01;
