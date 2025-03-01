import React from 'react';
import './moreProjects.css'; // Ensure this file is linked

const MoreProjects = () => {
  return (
    <div className="more-projects-container">
      <div className="more-projects-content">
        <p className="more-projects-title">More Projects</p>
        <ul className="projects-list">
          <a href='https://medikit-247.web.app/' target='_blank'><li className="project-item" >MEDIKIT</li></a>
          <a href='https://drinks-unfinished.web.app/' target='_blank'><li className="project-item">DRINKS</li></a>
          <a href='' target='_blank'><li className="project-item">RAMAYANA</li></a>
          <a href='' target='_blank'><li className="project-item">MAHABHARAT</li></a>
        </ul>
      </div>
    </div>
  );
};

export default MoreProjects;
