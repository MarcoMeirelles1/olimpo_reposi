// src/components/ImageGallery.jsx
import React from 'react';
import foto1 from '../assets/images.png'

function ImageGallery() {
  return (
    <div className="image-gallery">
      <img src={foto1} alt="Imagem 1" />
      <img src="imagem2.jpg" alt="Imagem 2" />
      <img src="imagem3.jpg" alt="Imagem 3" />
    </div>
  );
}

export default ImageGallery;
