import React from 'react'

function Feedback() {
    return (
        <section className="feedback" id="feedback">
            <h2>TESTIMONIALS</h2>
            <div className="feedback__content">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <p><i className="fa fa-quote-left" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus, quis blanditiis! Similique soluta repellendus recusandae omnis eius! Explicabo,
                            aliquid recusandae. <i className="fa fa-quote-right" /></p>
                        <p className="feedback__name">MARK</p>
                    </div>
                    <div className="item">
                        <p><i className="fa fa-quote-left" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus, quis blanditiis! Similique soluta repellendus recusandae omnis eius! Explicabo,
                            aliquid recusandae. <i className="fa fa-quote-right" /></p>
                        <p className="feedback__name">ALLY</p>
                    </div>
                    <div className="item">
                        <p><i className="fa fa-quote-left" /> Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                            Doloribus, quis blanditiis! Similique soluta repellendus recusandae omnis eius! Explicabo,
                            aliquid recusandae. <i className="fa fa-quote-right" /></p>
                        <p className="feedback__name">WILLSON</p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Feedback