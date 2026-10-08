import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuilding, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export function Timeline({ items = [] }) {
  return (
    <div className="relative border-l-2 border-border/70 ml-4 md:ml-8 my-8 space-y-12">
      {items.map((item, index) => (
        <div key={item.id || index} className="relative pl-6 md:pl-10 group">
          {/* Timeline Node Point */}
          <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-background border-2 border-amber-500/80 flex items-center justify-center text-amber-500 shadow-md group-hover:scale-110 group-hover:border-amber-400 transition-all duration-300">
            <FontAwesomeIcon icon={faBriefcase} className="text-xs" />
          </div>

          <div className="bg-card/40 border border-border/60 rounded-xl p-6 shadow-sm hover:shadow-md hover:border-amber-500/40 transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-[10px]" />
                {item.date || item.period}
              </span>

              {item.company && (
                <span className="text-xs text-muted-foreground font-medium flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faBuilding} className="text-xs text-amber-500/70" />
                  {item.company}
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-amber-500 transition-colors">
              {item.title || item.role}
            </h3>

            {item.description && (
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>
            )}

            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="mt-4 space-y-2 border-t border-border/40 pt-4">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-xs md:text-sm text-muted-foreground flex items-start gap-2">
                    <FontAwesomeIcon icon={faCheckCircle} className="text-amber-500 text-xs mt-1 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.image && (
              <div className="mt-4 rounded-lg overflow-hidden border border-border/50 max-h-48">
                <img
                  src={item.image}
                  alt={item.title || item.role}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Timeline;
