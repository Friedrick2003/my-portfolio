import React, { useState } from 'react';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div 
                    className={`qualification__button ${activeTab === 'education' ? 'qualification__active' : ''}`}
                    onClick={() => setActiveTab('education')}
                >
                    <i className='bx bxs-graduation qualification__icon'></i> Education
                </div>
                <div 
                    className={`qualification__button ${activeTab === 'experience' ? 'qualification__active' : ''}`}
                    onClick={() => setActiveTab('experience')}
                >
                    <i className='bx bx-briefcase-alt qualification__icon'></i> Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} id="education">
                    
                    {/* Qual 1 */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">B.Tech in Computer Science and Engineering</h3>
                            <span className="qualification__subtitle">Indian Institute of Information Technology Bhagalpur (IIITBH)</span>
                            <div className="qualification__calendar">
                                <i className='bx bx-calendar'></i> 2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    
                    {/* Qual 2 */}
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Class 12th</h3>
                            <span className="qualification__subtitle">Govt High School Kohhanta Patori</span>
                            <div className="qualification__calendar">
                                <i className='bx bx-calendar'></i> 2021
                            </div>
                        </div>
                    </div>

                    {/* Qual 3 */}
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Class 10th</h3>
                            <span className="qualification__subtitle">Govt High School Kohhanta Patori</span>
                            <div className="qualification__calendar">
                                <i className='bx bx-calendar'></i> 2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            {/* no line */}
                        </div>
                    </div>

                </div>
                
                {activeTab === 'experience' && (
                  <div className="qualification__content qualification__active" id="experience">
                      <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Full Stack Web Developer</h3>
                            <span className="qualification__subtitle">Freelance</span>
                            <div className="qualification__calendar">
                                <i className='bx bx-calendar'></i> 2023 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                        </div>
                      </div>
                  </div>
                )}
            </div>
        </div>
    </section>
  );
};

export default Qualification;
