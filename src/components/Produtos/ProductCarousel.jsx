// produtos/ProductCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductCarousel.css';

const ProductCarousel = ({ products, initialIndex }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="product-carousel" id='produtos'>
      <Slider {...settings}>
        {/* Mapeia os produtos e renderiza cada produto como um slide */}
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            {/* Imagem do produto */}
            <div className='div-centra-img'>
              <img src={product.image} alt={product.name} className="product-image" />
            </div>

            {/* Detalhes do produto */}
            <div className="product-details">
              <h3 className='nome-produto'>{product.name}</h3>
              <p>${product.price}</p>
              <a href="https://api.whatsapp.com/send?phone=21976806547" target="_blank">
                <button class="glow-on-hover" type="button">Comprar</button>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
