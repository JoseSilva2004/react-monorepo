import React from 'react';
import './Footer.scss'; 

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()}Sistema de Ventas. Todos los derechos reservados.</p>
                <p>
                    <a href="#privacy-policy">Política de Privacidad</a> | <a href="#terms-of-service">Términos de Servicio</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
