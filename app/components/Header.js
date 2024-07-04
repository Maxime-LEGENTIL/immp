import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import Link from 'next/link';

// Icônes
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Header() {

    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return <>
        <div className="container-fluid text-center text-white p-2" style={{ backgroundColor: "#ec6726" }}>
            Je suis joignable du lundi au vendredi pour toute intervention de 8h30 à 18h00 au 06.00.00.00.00
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded" aria-label="Thirteenth navbar example" style={{backgroundColor: "#172f3e"}}>
            <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                <Link href="/" className="navbar-brand col-lg-2 me-0">IMMP.fr</Link>
                <ul className="navbar-nav col-lg-8 justify-content-lg-center">
                <li className="nav-item">
                    <Link href="/" className="nav-link">Accueil</Link>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Station service carburants
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link href="/stockage-cuves-carburants" className="dropdown-item">Stockage cuves carburants</Link></li>
                    <li><Link href="/pompes-et-distributeurs-a-carburant" className="dropdown-item">Pompes et distributeurs à carburant</Link></li>
                    <li><Link href="/gestion-carburant-et-flottes" className="dropdown-item">Gestion carburant et flottes</Link></li>
                    <li><Link href="/tuyauterie-pehd" className="dropdown-item">Tuyauterie PEHD</Link></li>
                    </ul>
                </li>
                <li className="nav-item">
                <Link href="/galerie" className="nav-link">Galerie</Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact" className="nav-link">Contact</Link>
                </li>
                </ul>
                <div className="d-lg-flex col-lg-2 justify-content-lg-end" id="fblink">
                    <a target="_blank" href="https://www.facebook.com/profile.php?id=100083454664075" rel="noopener noreferrer">
                        <FacebookIcon style={{fontSize: '2rem'}}></FacebookIcon>
                    </a>
                </div>
            </div>
            </div>
        </nav>
    </>
}
