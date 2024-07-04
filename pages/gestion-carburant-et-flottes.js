import Head from 'next/head';

// Icônes
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

// Composants
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function GestionCarburantEtFlottes() {
    return (
        <>
            <Head>
                <title>IMMP - Gestion carburant et flottes</title>
                <meta name="description" content="Découvrez nos services de gestion de carburant et de flottes. Optimisez la gestion de votre carburant et bénéficiez de notre expertise pour une performance améliorée de vos véhicules." />
                <meta name="keywords" content="Gestion carburant, Gestion flottes, Optimisation carburant, Maintenance flottes, IMMP" />
                <meta name="author" content="IMMP" />
                <meta property="og:title" content="IMMP - Gestion carburant et flottes" />
                <meta property="og:description" content="Découvrez nos services de gestion de carburant et de flottes. Optimisez la gestion de votre carburant et bénéficiez de notre expertise pour une performance améliorée de vos véhicules." />
                <meta property="og:image" content="https://www.immp.fr/wp-content/uploads/2022/05/79372410_10219411810099041_8295041016470175744_n.jpg" />
                <meta property="og:url" content="https://www.immp.fr/gestion-carburant-flottes" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IMMP - Gestion carburant et flottes" />
                <meta name="twitter:description" content="Découvrez nos services de gestion de carburant et de flottes. Optimisez la gestion de votre carburant et bénéficiez de notre expertise pour une performance améliorée de vos véhicules." />
                <meta name="twitter:image" content="https://www.immp.fr/wp-content/uploads/2022/05/79372410_10219411810099041_8295041016470175744_n.jpg" />
            </Head>

            <Header />

            <div className="container text-center pt-5">
                <h1>Gestion carburant et flottes</h1>
                <h4><WorkspacePremiumIcon style={{color: 'green'}} /> Optimisation et maintenance <WorkspacePremiumIcon style={{color: 'green'}} /></h4>
            </div>

            <div className="container pt-2" style={{fontSize: '14px'}}>
                <p><LocalShippingIcon></LocalShippingIcon> IMMP est spécialisé dans la gestion de carburant et de flottes, offrant des solutions complètes pour optimiser l'efficacité de vos opérations de transport.</p>

                <p>Nos services de gestion de carburant et de flottes comprennent :</p>

                <h2 style={{fontSize: '19px'}}>Optimisation de la consommation de carburant</h2>
                <ul>
                    <li><strong>Surveillance en temps réel :</strong> Suivi en temps réel de la consommation de carburant pour détecter les inefficacités et optimiser les trajets.</li>
                    <li><strong>Rapports personnalisés :</strong> Accès à des rapports détaillés pour analyser les tendances de consommation et prendre des décisions éclairées.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Gestion des distributeurs automatisés</h2>
                <ul>
                    <li><strong>Installation et maintenance :</strong> Mise en place et entretien des distributeurs automatiques pour garantir un approvisionnement continu et sécurisé.</li>
                    <li><strong>Paramétrage du logiciel :</strong> Configuration de logiciels de gestion pour un suivi précis des stocks et des consommations.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Maintenance et support des flottes</h2>
                <ul>
                    <li><strong>Service de maintenance préventive :</strong> Inspections régulières et maintenance préventive pour minimiser les temps d'arrêt.</li>
                    <li><strong>Réparations rapides :</strong> Interventions rapides et efficaces en cas de panne pour assurer la disponibilité maximale de votre flotte.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Solutions écologiques et économiques</h2>
                <ul>
                    <li><strong>Carburants alternatifs :</strong> Utilisation de carburants alternatifs comme le bio-carburant pour réduire l'empreinte carbone.</li>
                    <li><strong>Coût efficace :</strong> Solutions économiques pour réduire les coûts opérationnels à long terme.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Pourquoi choisir IMMP ?</h2>
                <ul>
                    <li><strong>Expertise et expérience :</strong> Des années d’expérience dans la gestion de carburant et de flottes, garantissant des services de qualité supérieure.</li>
                    <li><strong>Technologie avancée :</strong> Utilisation des dernières technologies pour offrir des solutions innovantes et efficaces.</li>
                    <li><strong>Support client personnalisé :</strong> Engagement à fournir un service client exceptionnel, adapté à vos besoins spécifiques.</li>
                </ul>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://www.immp.fr/wp-content/uploads/2022/05/gir20_gca_dts_tip-fr.jpg" alt="Gestion Carburant 1" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://www.immp.fr/wp-content/uploads/2022/05/gir20_gca_dts_tip-fr-2-724x1024.jpg" alt="Gestion Flottes 2" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
