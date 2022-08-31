import React from 'react'
import Team from './Team';

function Gallery() {
    return (
        <div>
        <section className="gallery" id="gallery">
            <h2>OUR PRODUCTS</h2>
            <div className="gallery__content">
                <figure className="gallery__item gallery__g1">
                    <a href="../img/g1.jpg" data-lightbox="gallery">
                        <img src={require('../img/g1.jpg')} alt="gallery 1" />
                        <figcaption className="gallery__overlay">
                            <h3><span>OUR</span>GALLERY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </a>
                </figure>
                <figure className="gallery__item">
                    <a href="../img/g2.jpg" data-lightbox="gallery">
                        <img src={require('../img/g2.jpg')} alt="gallery 2" />
                        <figcaption className="gallery__overlay">
                            <h3><span>OUR</span>GALLERY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </a>
                </figure>
                <figure className="gallery__item">
                    <a href="../img/g3.jpg" data-lightbox="gallery">
                        <img src={require('../img/g3.jpg')} alt="gallery 3" />
                        <figcaption className="gallery__overlay">
                            <h3><span>OUR</span>GALLERY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </a>
                </figure>
                <figure className="gallery__item">
                    <a href="../img/g4.jpg" data-lightbox="gallery">
                        <img src={require('../img/g4.jpg')} alt="gallery 4" />
                        <figcaption className="gallery__overlay">
                            <h3><span>OUR</span>GALLERY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </a>
                </figure>
                <figure className="gallery__item">
                    <a href="../img/g5.jpg" data-lightbox="gallery">
                        <img src={require('../img/g5.jpg')} alt="gallery 5" />
                        <figcaption className="gallery__overlay">
                            <h3><span>OUR</span>GALLERY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </a>
                </figure>
                <figure className="gallery__item gallery__g6">
                    <a href="../img/g6.jpg" data-lightbox="gallery">
                        <img src={require('../img/g6.jpg')} alt="gallery 6" />
                        <figcaption className="gallery__overlay">
                            <h3><span>OUR</span>GALLERY</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </figcaption>
                    </a>
                </figure>
            </div>
        </section>
        <Team />
        </div>

    )
}

export default Gallery