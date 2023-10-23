import "./Cv-Style.css"
import Madeira from "./fundodemadeira.jpeg"

const Cv = () => (
    <div className="Fundo">
        <div className="conteudo">
            <div className="cv_texto">
                <h3 className="h3_cv">BARBA, CABELO E BIGODE</h3>
                <p className="p_cv">Só na Factory você encontra especialistas em corte e tratamento de cabelo, barba e bigode,
                    além de um ambiente descontraído e produtos de alta qualidade. Claro, em meio a isso não
                    poderia faltar também o acompanhamento daquela cerveja gelada!</p>
            </div>
            <div className="cv_video">
                <iframe 
                className="vc_video_video"
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/hJMj-a-Jdcs?si=aMTgZ_5ViC3Q0UWS" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
                </iframe>
            </div>
        </div>
        <img className="img_madeira" src={Madeira} alt="Plano de fundo" />
    </div>
);

export default Cv;