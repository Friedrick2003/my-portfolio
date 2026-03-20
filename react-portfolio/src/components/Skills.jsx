import React from 'react';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
            
            {/* Frontend */}
            <div className="skills__content">
                <h3 className="skills__title">Frontend</h3>
                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-html5'></i>
                            <div>
                                <h3 className="skills__name">HTML</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-css3'></i>
                            <div>
                                <h3 className="skills__name">CSS</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-javascript'></i>
                            <div>
                                <h3 className="skills__name">JavaScript</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-bootstrap'></i>
                            <div>
                                <h3 className="skills__name">Bootstrap</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-git'></i>
                            <div>
                                <h3 className="skills__name">Git</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-react'></i>
                            <div>
                                <h3 className="skills__name">React</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Backend */}
            <div className="skills__content">
                <h3 className="skills__title">Backend</h3>
                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bx-badge-check'></i>
                            <div>
                                <h3 className="skills__name">Express</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-nodejs'></i>
                            <div>
                                <h3 className="skills__name">Node Js</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-typescript'></i>
                            <div>
                                <h3 className="skills__name">Typescript</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bxl-mongodb'></i>
                            <div>
                                <h3 className="skills__name">MongoDB</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bxl-postgresql'></i>
                            <div>
                                <h3 className="skills__name">MySQL</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-shield-quarter'></i>
                            <div>
                                <h3 className="skills__name">Passport.js</h3>
                                <span className="skills__level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* DSA */}
            <div className="skills__content dsa-content">
                <h3 className="skills__title">Data Structures and Algorithm</h3>
                <div className="skills__box">
                    <div className="skills__group" style={{ alignItems: 'center', justifyItems: 'center', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div className="skills__data">
                            <i className='bx bx-code-alt'></i>
                            <div>
                                <h3 className="skills__name">C++</h3>
                                <span className="skills__level">Advanced</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-code'></i>
                            <div>
                                <h3 className="skills__name">C</h3>
                                <span className="skills__level">Basic</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  );
};

export default Skills;
