import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const defaultPhrases = [
  'Ciência de Dados',
  'Business Intelligence',
  'Engenharia de Dados (ETL)',
  'Automação com Python',
  'Análise Preditiva',
  'Dashboards Estratégicos'
];

export const Typewriter = ({ phrases = defaultPhrases }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const currentPhrase = phrases[phraseIndex];
    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
      speed = 2000;
    } else if (isDeleting && charIndex === 0) {
      speed = 500;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        if (charIndex > 0) {
          setText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      } else {
        if (charIndex < currentPhrase.length) {
          setText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        } else {
          setIsDeleting(true);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <div className="typing-container">
      <span
        className="typewriter-text"
        aria-live="polite"
        aria-label={`Texto digitado: ${text}`}
      >
        {"Especialista em " + text}
      </span>
      <span className="cursor" aria-hidden="true">
        |
      </span>
    </div>
  );
};

export default Typewriter;
