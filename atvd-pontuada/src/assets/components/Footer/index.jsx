import './style.css';

export default function Footer() {
    return (
        <footer className="footer">
        <p className="footer-phrase">"O amor de pais é o combustível que permite ao ser humano comum fazer o impossível."</p>
        <p className="footer-credits">Desenvolvido com amor por [Bruno Machado Brandão] | &copy; {new Date().getFullYear()} Todos os direitos reservados</p>
        </footer>
    );
}