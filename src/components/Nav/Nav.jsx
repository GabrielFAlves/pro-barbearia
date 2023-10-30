import "./Nav-Style.css"

const Nav = () => (
        <div className="barra_nav">
            <ul className="barra_nav_lista">
                <li className="barra_nav_item"><a href="#sobre">Quem somos</a></li>
                <li className="barra_nav_item"><a href="#banner">Agende agora</a></li>
                <li className="barra_nav_item" id="franca">França's Barber</li>
                <li className="barra_nav_item">Produtos</li>                
                <li className="barra_nav_item"><a href="#cortes">Cortes masculinos</a></li>                
            </ul>
        </div>
);
  
export default Nav;