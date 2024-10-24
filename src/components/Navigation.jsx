import { useState } from 'react';

const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

function Navigation() {
  const [activeSection, setActiveSection] = useState('About Me');

  return (
    <nav>
      <ul>
        {sections.map((section) => (
          <li
            key={section}
            className={activeSection === section ? 'active' : ''}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;