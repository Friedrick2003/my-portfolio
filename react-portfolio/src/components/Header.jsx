import React from 'react';

const Header = () => {
  return (
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav__logo">Himanshu Kumar</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                    <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                    <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                    <li className="nav__item"><a href="#qualification" className="nav__link">Qualification</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                    <li className="nav__item"><a href="assets/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav__link" style={{ fontWeight: 700, color: '#0C1252' }}>Resume <i className='bx bx-download'></i></a></li>
                </ul>
            </div>
        </nav>
    </header>
  );
};

export default Header;
