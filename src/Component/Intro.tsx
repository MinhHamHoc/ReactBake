import React from 'react'
import Number from './Number'
function Intro() {
    return (
        <div>
        <section className="intro" id="intro">
            <div className="intro__item intro__text">
                <div>
                    <h3>Tradition</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                </div>
            </div>
            <div className="intro__item intro__ab1">
                <img src={require('../img/ab1.jpg')} alt="intro 1" />
            </div>
            <div className="intro__item intro__text">
                <div>
                    <h3>Creativity</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                </div>
            </div>
            <div className="intro__item intro__bake intro__text">
                <div>
                    <h3>What We Bake Best For You</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolorL orem
                        ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                </div>
            </div>
            <div className="intro__item">
                <img src={require('../img/ab2.jpg')} alt="intro 2" />
            </div>
            <div className="intro__item intro__text">
                <div>
                    <h3>Quality</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                </div>
            </div>
            <div className="intro__item">
                <img src={require('../img/ab3.jpg')} alt="intro 3" />
            </div>
            <div className="intro__item intro__text">
                <div>
                    <h3>Tasty Cakes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor</p>
                </div>
            </div>
            <div className="intro__item intro__ab4">
                <img src={require('../img/ab4.jpg')} alt="intro 4" />
            </div>

            
        </section>
        <Number />
        </div>
    )
}

export default Intro