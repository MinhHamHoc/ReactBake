import React from 'react'

function Service() {
    return (
        <section className="services" id="services">
            <h2>OUR SERVICES</h2>
            <div className="services__content">
                <div className="services__item">
                    <i className="fa fa-adjust" />
                    <h3>Tasty Cakes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Learn more</button>
                </div>
                <div className="services__item">
                    <i className="fa fa-snowflake" />
                    <h3>Creativity</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Learn more</button>
                </div>
                <div className="services__item">
                    <i className="fa fa-chart-pie" />
                    <h3>Tradition</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Learn more</button>
                </div>
                <div className="services__item">
                    <i className="fab fa-slideshare" />
                    <h3>Quality</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button>Learn more</button>
                </div>
            </div>
        </section>

    )
}

export default Service