import "./Burguer-Style.css"
import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class Burger extends React.Component {
    showSettings(event) {
      event.preventDefault();
      // Lógica para mostrar as configurações
    }
  
    render() {
      return (
        <div className="bubu">
        <Menu>
          <a id="home" className="bm-item-list" href="#sobre">
            QUEM SOMOS
          </a>
          <a id="about" className="bm-item-list" href="#banner">
            AGENDE AGORA
          </a>
          <a id="contact" className="bm-item-list" href="#produtos">
            PRODUTOS
          </a>
          <a className="bm-item-list" href="#cortes">
            CORTES
          </a>
        </Menu>
        </div>
      );
    }
  }
  
  export default Burger;