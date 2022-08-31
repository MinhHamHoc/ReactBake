import React from 'react'

function Contact() {
    return (
        <div>
            <section className="contact" id="contact">
                <h2>CONTACT</h2>
                <div className="contact__form">
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone" />
                        <textarea cols={30} rows={10} placeholder="Message" defaultValue={""} />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="contact__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.78329521218!2d105.78558301391479!3d21.04135519272644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad4bc986a865%3A0x71c82ef319714206!2zQ8O0bmcgdHkgVE5ISCBE4buLY2ggduG7pSBNaSBHcm91cA!5e0!3m2!1svi!2s!4v1661927073880!5m2!1svi!2s" width={600} height={450} frameBorder={0} style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex={0}></iframe>
                </div>
                <div className="contact__info">
                    <div className="contact__item">
                        <i className="fa fa-home" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="contact__item">
                        <i className="fa fa-phone" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div className="contact__item">
                        <i className="fa fa-envelope-open" />
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </section>
            
        </div>

    )
}

export default Contact