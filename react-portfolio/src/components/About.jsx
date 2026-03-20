import React from 'react';

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img 
                src="https://avatars.githubusercontent.com/u/141486256?v=4" 
                alt="Himanshu Kumar" 
                className="about__img" 
                style={{
                  borderRadius: '50%', 
                  width: '350px', 
                  height: '350px', 
                  objectFit: 'cover', 
                  border: '4px solid var(--container-color)', 
                  boxShadow: '0 4px 12px rgba(12, 18, 82, 0.1)'
                }} 
            />

            <div className="about__data">
                <div className="about__info grid">
                    <div className="about__box">
                        <i className='bx bx-award about__icon'></i>
                        <h3 className="about__title">Experience</h3>
                        <span className="about__subtitle">Open to work</span>
                    </div>
                    <div className="about__box">
                        <i className='bx bx-briefcase-alt about__icon'></i>
                        <h3 className="about__title">Completed</h3>
                        <span className="about__subtitle">8+ Projects</span>
                    </div>
                    <div className="about__box">
                        <i className='bx bx-support about__icon'></i>
                        <h3 className="about__title">Support</h3>
                        <span className="about__subtitle">Online 24/7</span>
                    </div>
                </div>

                <p className="about__description">
                    Hi, I’m Himanshu Kumar! I have worked on projects like Doctor Appointment System and E-commerce
                    Website, focusing on clean code, performance, and user experience. Currently improving my skills
                    in DSA, system design, and backend development. Feel free to explore my repositories and connect
                    with me!
                </p>

                <a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="button">
                  View Resume <i className='bx bx-file-blank'></i>
                </a>
            </div>
        </div>
    </section>
  );
};

export default About;
