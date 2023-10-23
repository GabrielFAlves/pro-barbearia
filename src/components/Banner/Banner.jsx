import './Banner-Style.css'

const Banner = () => (
    
        <div className='super_container_banner'>
            <div className='container_banner_texto'>
                <p className='container_banner_nome'>França's Barber</p>
                <p className='container_banner_texto1'>MAIS DO QUE UMA BARBEARIA, UMA VERDADEIRA EXPERIÊNCIA OLD SCHOOL.</p>
                <div className='container_banner2'>
                    <div><p className='banner2_texto'><strong className='banner2_texto_strong'>Bônus exclusivo:</strong> Agende online seu primeiro corte ou barba e ganhe um produto Urban Men.</p></div>
                </div>
                <button className='banner2_texto_button'>QUERO AGENDAR AGORA</button>
            </div>
        </div>
    
);

// tentar colocar uma div fora da
export default Banner;