import './Footer-Style.css';

import zap from "./whatsapp.png"
import email from "./email.png"

const Footer = () => (
    <div className="container-footer" id="fale">
        <div className="container-conteudo">
        <div className="container-menu">
            <h2 className="h2-footer">Menu</h2>
            <a href="#sobre" className="ancora-footer">QUEM SOMOS</a>
            <a href="#banner" className="ancora-footer">AGENDE AGORA</a>
            <a href="#cortes" className="ancora-footer">CORTES MASCULINOS</a>
        </div>
        <div className="container-infos">
            <h2 className="h2-footer">Contato</h2>
            <div className="contato-footer">
                <img src={zap} width="35px"/>
                <p className="p-footer">&nbsp;(21)97680-6547</p>
            </div>
            <div className="contato-footer">
                <img src={email} width="35px"/>
                <p className="p-footer">&nbsp;gabrielfirmamento3@icloud.com</p>
            </div>
        </div>
        </div>
    </div>
);

export default Footer;