import Logo from '../Assets/A2ORU_Logo.png';
import "../CSS/Footer.css";

function Footer () {
    return (
        <footer className="footer">
            <div className="container">
                <p className="copyrightText text-center">© {new Date().getFullYear()} <a href='https://www.aithent.com' target='_blank'>Aithent Inc.</a> All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;