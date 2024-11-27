// src/components/Section.jsx
import React from 'react';

function Section({ title, content, children }) {
  return (
    <section className="section">
      {title && <h2>{title}</h2>}
      {content && <p>{content}</p>}
      {children}
    </section>
  );
}

export default Section;
