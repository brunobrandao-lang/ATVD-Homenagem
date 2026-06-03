import './style.css';

    export default function Header() {
    return (
        <header className="header">
        <div className="header-logo">❤️ Nossa Família</div>
        <nav className="header-nav">
            <a href="#mae">Mãe</a>
            <a href="#pai">Pai</a>
            <a href="#galeria">Memórias</a>
            <a href="#video">Dedicatória</a>
        </nav>
        </header>
    );
    }