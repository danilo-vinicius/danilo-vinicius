import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faBuilding, faCalendarAlt, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "../timeline-01.css";

export function Timeline({ items = [] }) {
  return (
    <ol className="tl01-list">
      {items.map((item, index) => (
        <li
          key={item.id || index}
          className={`tl01-item ${index % 2 === 0 ? "tl01-left" : "tl01-right"}`}
        >
          <span className="tl01-node" aria-hidden="true">
            <FontAwesomeIcon icon={faBriefcase} />
          </span>

          <article className="tl01-card">
            <span className="tl01-date">
              <FontAwesomeIcon icon={faCalendarAlt} />
              {item.date || item.period}
            </span>

            <h3 className="tl01-title">{item.title || item.role}</h3>

            {item.company && (
              <p className="tl01-company">
                <FontAwesomeIcon icon={faBuilding} />
                {item.company}
              </p>
            )}

            {item.description && <p className="tl01-desc">{item.description}</p>}

            {item.responsibilities && item.responsibilities.length > 0 && (
              <ul className="tl01-resp">
                {item.responsibilities.map((resp, idx) => (
                  <li key={idx}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            )}

            {item.image && (
              <div className="tl01-image">
                <img src={item.image} alt={item.title || item.role} />
              </div>
            )}
          </article>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
