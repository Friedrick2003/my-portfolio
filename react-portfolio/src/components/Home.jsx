import React from 'react';

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <div className="home__social">
                    <a href="https://github.com/Friedrick2003" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="https://www.linkedin.com/in/himanshu-kumar-2280ab258/" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="home__social-icon">
                        <i className='bx bx-laptop'></i>
                    </a>
                </div>

                <div className="home__data" style={{ position: 'relative', zIndex: 10 }}>
                    <h1 className="home__title text-gradient">Himanshu <br /> Kumar <span className="hand">👋</span></h1>
                    <h3 className="home__subtitle text-light">Full Stack Developer</h3>
                    <p className="home__description text-light">
                        A passionate Full Stack Developer with strong interest in building scalable web
                        applications. Always eager to learn new technologies and solve real-world problems.
                    </p>
                    <a href="#contact" className="button">Say Hi <i className='bx bx-send'></i></a>

                    <div className="home__scroll">
                        <a href="#about" className="home__scroll-button">
                            <i className='bx bx-mouse home__scroll-mouse text-light'></i>
                            <span className="home__scroll-name text-light">Scroll Down &darr;</span>
                        </a>
                    </div>
                </div>

                <div className="home__img-wrapper">
                    <div className="home__img">
                        <img src="https://avatars.githubusercontent.com/u/141486256?v=4" alt="Himanshu's Photo" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Home;
