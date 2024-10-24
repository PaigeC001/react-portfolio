import React from "react";
import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <img 
        src={profileImage} 
        alt="Profile" 
        className="profile-image" 
      />
      <p>
        Hi there! I'm Paige, a dedicated and curious developer with a passion for crafting clean, responsive, and user-centric applications. 
        I enjoy the challenge of turning ideas into reality through code and continually strive to improve my skills in both front-end and back-end development.
      </p>
      <p>
        My expertise includes working with technologies such as JavaScript, React, Node.js, and PostgreSQL. I have a strong focus on creating seamless user experiences 
        while also ensuring efficient back-end performance. Whether it’s building sleek interfaces or developing secure APIs, I love solving problems and learning new tools along the way.
      </p>
      <p>
        Outside of programming, you can usually find me reading, walking my dogs or experimenting with new recipes. 
        I thrive on collaborating with others and enjoy learning from every project I take on.
      </p>
      <p>
        Feel free to check out my portfolio to see what I’ve been working on, and don’t hesitate to connect with me if you’d like to collaborate or just chat!
      </p>
    </section>
  );
}