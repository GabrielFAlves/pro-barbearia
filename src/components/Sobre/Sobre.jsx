import './Sobre-Style.css'
import Corte from './barbearia_corte.png'

const Sobre = () => (
    <div className='sobre_fundo'>

            <div className='sobre_fundo_texto'>
                <p className='sobre_fundo_texto_p1'>A melhor barbearia da Barra da Tijuca</p>
                <p className='sobre_fundo_texto_p2'>Não é exagero dizer que Barbearia Factory é a melhor barbearia da Barra da Tijuca, 
                    oferencendo um verdadeira experiência old school com excelente estrutura e atendimento 
                    de primeira qualidade para você se sentir literalmente em casa, relaxando com os nossos serviços.
                </p>
            </div>
            <div>
                <img className='sobre_imagem' src={Corte} alt="Corte" />
            </div>

    </div>
);

export default Sobre;