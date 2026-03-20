import React from 'react';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className='bx bx-mail-send contact__card-icon'></i>
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">himanshukumar151821@gmail.com</span>
                        <a href="mailto:himanshukumar151821@gmail.com" className="contact__button">
                            Write me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>

                    <div className="contact__card">
                        <i className='bx bx-phone-call contact__card-icon'></i>
                        <h3 className="contact__card-title">Phone</h3>
                        <span className="contact__card-data">6206895260</span>
                        <a href="tel:6206895260" className="contact__button">
                            Call me <i className='bx bx-right-arrow-alt contact__button-icon'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;
