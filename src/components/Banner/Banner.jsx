import './Banner-Style.css'
import Fundo from './barber.jpg'

const Banner = () => (
        <div className='banner'>
            <div className='banner2'>
                <p className='banner_nome'>França's Barber</p>
                <p className='banner_texto_p banner_texto1'>MAIS DO QUE UMA BARBEARIA, UMA VERDADEIRA EXPERIÊNCIA OLD SCHOOL.</p>
                <div className='banner_texto2'>
                    <div><p className='banner_texto_p'><strong className='banner_texto_strong'>Bônus exclusivo:</strong> Agende online seu primeiro corte ou barba e ganhe um produto Urban Men.</p></div>
                </div>
                <button className='banner_texto_button'>QUERO AGENDAR AGORA</button>
            </div>
            <img className='banner_imagem' src={Fundo} alt="imagem" />
        </div>
);

export default Banner;