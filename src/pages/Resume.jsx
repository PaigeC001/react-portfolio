import React from "react";

export default function Resume() {
  return (
    <section style={{ padding: '20px', maxWidth: '800px', margin: 'auto' }}>
      <h2>Resume</h2>
      <a href="/assets/myresume.pdf" download style={{ display: 'block', marginBottom: '20px' }}>
        Download Resume
      </a>
      <div>
        <h3>Front-end Proficiencies</h3>
        <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Bootstrap</li>
          <li>Responsive Design</li>
        </ul>
      </div>
      <div style={{ marginTop: '20px' }}>
        <h3>Back-end Proficiencies</h3>
        <ul style={{ listStyleType: 'square', marginLeft: '20px' }}>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>RESTful APIs</li>
          <li>MySQL & Sequelize</li>
          <li>MongoDB & Mongoose</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}
