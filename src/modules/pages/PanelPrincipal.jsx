import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/Panel.css";

export function PanelPrincipal() {
  return (
    <div className="app-container">
      <div className="apology-card">
        <h1>¡Perdón, Alessandra!</h1>
        <p>
          Sé que cometí un error, y quiero disculparme de todo corazón. Espero que
          puedas perdonarme. Eres muy importante para mí, y haré todo lo posible
          para arreglar las cosas.
        </p>
        <button className="forgive-button">¿Me perdonas?</button>
      </div>

      {/* Carrusel de fotos */}
      <div className="carousel-container">
        <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={`../img/imagen1.jpg`} alt="Imagen 1" />
          <p className="legend">Imagen 1</p>
        </div>
        <div>
          <img src={`../img/imagen2.jpg`} alt="Imagen 2" />
          <p className="legend">Imagen 2</p>
        </div>
        <div>
          <img src={`../img/imagen3.jpg`} alt="Imagen 3" />
          <p className="legend">Imagen 3</p>
        </div>
        <div>
          <img src={`../img/imagen4.jpg`} alt="Imagen 4" />
          <p className="legend">Imagen 4</p>
        </div>
        <div>
          <img src={`../img/imagen5.jpg`} alt="Imagen 5" />
          <p className="legend">Imagen 5</p>
        </div>
        <div>
          <img src={`../img/imagen6.jpg`} alt="Imagen 6" />
          <p className="legend">Imagen 6</p>
        </div>
        <div>
          <img src={`../img/imagen7.jpg`} alt="Imagen 7" />
          <p className="legend">Imagen 7</p>
        </div>
        </Carousel>
      </div>
    </div>
  );
}
