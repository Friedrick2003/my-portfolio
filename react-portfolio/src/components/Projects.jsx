import React from 'react';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
        <h2 className="section__title">Projects</h2>
        
        <div className="projects__container container grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {/* Project 1 */}
            <div className="projects__card">
                <i className='bx bx-cart projects__icon'></i>
                <h3 className="projects__title">Electronics Shop<br/>E-Commerce</h3>
                <a href="https://github.com/Friedrick2003/electronics-shop" target="_blank" rel="noopener noreferrer"
                    className="projects__button">
                    View Repo <i className='bx bx-right-arrow-alt projects__button-icon'></i>
                </a>
            </div>

            {/* Project 2 */}
            <div className="projects__card">
                <i className='bx bx-shield-quarter projects__icon'></i>
                <h3 className="projects__title">Vulnerability<br/>Scanner</h3>
                <a href="https://github.com/Friedrick2003/vulnuerability-scanner" target="_blank" rel="noopener noreferrer"
                    className="projects__button">
                    View Repo <i className='bx bx-right-arrow-alt projects__button-icon'></i>
                </a>
            </div>

            {/* Project 3 */}
            <div className="projects__card">
                <i className='bx bx-building-house projects__icon'></i>
                <h3 className="projects__title">Nexus Web<br/>Banking System</h3>
                <a href="https://github.com/Friedrick2003/nexus-web" target="_blank" rel="noopener noreferrer" className="projects__button">
                    View Repo <i className='bx bx-right-arrow-alt projects__button-icon'></i>
                </a>
            </div>

            {/* Project 4 */}
            <div className="projects__card">
                <i className='bx bx-plus-medical projects__icon'></i>
                <h3 className="projects__title">Doctor Appointment<br/>System</h3>
                <a href="https://github.com/Friedrick2003" target="_blank" rel="noopener noreferrer" className="projects__button">
                    View Repo <i className='bx bx-right-arrow-alt projects__button-icon'></i>
                </a>
            </div>
        </div>
    </section>
  );
};

export default Projects;
