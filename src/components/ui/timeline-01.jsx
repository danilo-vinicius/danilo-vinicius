import React from "react";
import Timeline from "./timeline-01-utils/timeline";
import { Badge } from "./badge";
import { experienceData } from "../../data/experienceData";

const TimelineBlock01 = ({ items = experienceData }) => {
  return (
    <section className="overflow-hidden py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="border border-border/60 rounded-2xl bg-card/30 backdrop-blur-sm px-6 py-8 md:px-10 md:py-12 lg:px-12 lg:py-14 mb-8">
          <div className="max-w-2xl space-y-4">
            <Badge
              variant="outline"
              className="rounded-full px-3 py-1 font-normal border-amber-500/40 text-amber-500 bg-amber-500/10"
            >
              Trajetória Profissional
            </Badge>
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-foreground">
                Evolução & Impacto em Dados
              </h2>
              <p className="md:text-lg text-base text-muted-foreground leading-relaxed">
                Uma jornada dedicada à transformação de dados em inteligência estratégica, construindo desde automações e painéis gerenciais até a liderança em análises e revisão de processos corporativos.
              </p>
            </div>
          </div>
        </div>
        <div className="md:border-x border-r border-border/60 px-2 md:px-6">
          <Timeline items={items} />
        </div>
        <div className="border-x border-t border-border/60 h-12 md:h-16" />
      </div>
    </section>
  );
};

export default TimelineBlock01;
