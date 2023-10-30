import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Produtos-Style.css'; // Crie um arquivo CSS para personalizar o estilo do seu carrossel

import Corte from './caveira-barber.jpg'

function MeuCarrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
        
            <div className='produto_slider container'>
            <h3>Slide 1</h3>
                <img src={Corte} alt="" />
            </div>
            <div className='produto_slider container'>
                <h3>Slide 2</h3>
                <img src={Corte} alt="" />
            </div>
            <div className='produto_slider container'>
                <h3>Slide 3</h3>
                <img src={Corte} alt="" />
            </div>
            <div  className='produto_slider container'>
                <h3>Slide 4</h3>
                <img src={Corte} alt="" />
            </div>
            
    </Slider>
  );
}

export default MeuCarrossel;
