    import './style.css';

    import bgHero from '../../background.jpg';
import foto1 from '../../foto1.jpg';
import foto2 from '../../foto2.jpg';
import foto3 from '../../foto3.png';
import foto4 from '../../foto4.png';

    export default function Home() {
    return (
        <div className="home-container">
        
        <section className="hero-section" style={{ backgroundImage: `url(${bgHero})` }}>
            <div className="hero-overlay">
            <h1 className="fade-in">Uma Homenagem a Quem Me Deu a Vida</h1>
            <p className="fade-in-delay">Obrigado por me ensinarem tudo.</p>
            </div>
        </section>

        <section id="mae" className="content-section section-mae">
            <div className="section-content">
            <h2>À Minha Mãe</h2>
            <p>
                Mãe, seu colo sempre foi o meu melhor refúgio e suas palavras a minha melhor direção. Obrigado por cada sacrifício silencioso, por celebrar minhas vitórias e por me ensinar o verdadeiro significado de resiliência e afeto. Tudo o que eu conquistar na vida terá sempre a sua marca.
            </p>
            </div>
        </section>

        <section id="pai" className="content-section section-pai">
            <div className="section-content">
            <h2>Ao Meu Pai</h2>
            <p>
                Pai, seu exemplo de trabalho duro e honestidade traçou o caminho que hoje eu busco seguir. Obrigado por me acolher nos momentos difíceis, por incentivar meus sonhos e por ser essa base sólida na minha vida. Tudo o que sou e tudo o que ainda vou alcançar tem um pedaço de você.
            </p>
            </div>
        </section>

        <section id="galeria" className="gallery-section">
            <h2>Nossas Memórias</h2>
            <div className="gallery-grid">
            
            <div className="memory-card">
                <img
                src={foto1}
                alt="Momento Especial 1"
                className="card-img"
                />
                <div className="card-info">
                <h3>Momentos Preciosos</h3>
                <p>Celebrando instantes simples que se tornaram memórias eternas.</p>
                </div>
            </div>

            <div className="memory-card">
                <img
                src={foto2}
                alt="Momento Especial 2"
                className="card-img"
                />
                <div className="card-info">
                <h3>Nossa História</h3>
                <p>Cada sorriso compartilhado carrega uma lição de amor e união.</p>
                </div>
            </div>

            <div className="memory-card">
                <img
                src={foto3}
                alt="Momento Especial 3"
                className="card-img"
                />
                <div className="card-info">
                <h3>Exemplo de Vida</h3>
                <p>O reflexo de um cuidado que me molda e guia todos os dias.</p>
                </div>
            </div>

            <div className="memory-card">
                <img
                src={foto4}
                alt="Momento Especial 4"
                className="card-img"
                />
                <div className="card-info">
                <h3>Gratidão Eterna</h3>
                <p>Obrigado pelo apoio incondicional em cada etapa da minha jornada.</p>
                </div>
            </div>

            </div>
        </section>

        <section id="video" className="video-section">
            <h2>Uma Mensagem em Vídeo</h2>
            <p>Aperte o play para ver uma pequena surpresa que preparei com todo o carinho.</p>
            <div className="video-container">
            <iframe
                width="100%"
                height="450"
                src="https://drive.google.com/file/d/185km-OJGF_80oFEKsRWiFzBMuqfRCsI2/preview" 
                title="Homenagem"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            ></iframe>
            </div>
        </section>

        </div>
    );
    }