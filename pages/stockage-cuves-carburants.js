import Head from 'next/head';

// Icônes
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// Composants
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function StockageCuvesCarburants() {
    return (
        <>
            <Head>
                <title>IMMP - Stockage cuves carburants</title>
                <meta name="description" content="Découvrez nos services d'installation et de maintenance des cuves de carburants. Assurez le stockage sécurisé et efficace de vos carburants avec notre expertise." />
                <meta name="keywords" content="Stockage cuves carburants, Installation cuves, Maintenance cuves, Carburants GNR, Bio-carburants, IMMP" />
                <meta name="author" content="IMMP" />
                <meta property="og:title" content="IMMP - Stockage cuves carburants" />
                <meta property="og:description" content="Découvrez nos services d'installation et de maintenance des cuves de carburants. Assurez le stockage sécurisé et efficace de vos carburants avec notre expertise." />
                <meta property="og:image" content="https://www.immp.fr/wp-content/uploads/2022/05/64627079_10217806402644858_33372699048804352_n.jpg" />
                <meta property="og:url" content="https://www.immp.fr/stockage-cuves-carburants" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IMMP - Stockage cuves carburants" />
                <meta name="twitter:description" content="Découvrez nos services d'installation et de maintenance des cuves de carburants. Assurez le stockage sécurisé et efficace de vos carburants avec notre expertise." />
                <meta name="twitter:image" content="https://www.immp.fr/wp-content/uploads/2022/05/64627079_10217806402644858_33372699048804352_n.jpg" />
            </Head>

            <Header />
      
            <div className="container text-center pt-5">
                <h1>Stockage cuves carburants</h1>
                <h4><WorkspacePremiumIcon style={{color: 'green'}} /> Installation et maintenance <WorkspacePremiumIcon style={{color: 'green'}} /></h4>
            </div>

            <div className="container pt-2" style={{fontSize: '14px'}}>
                <p><StorageIcon></StorageIcon> IMMP assure l’installation et la maintenance des cuves carburants gasoil, GNR, bio-carburants (B100, XTL, HVO, AD Blue).</p>

                <p>Nos services de stockage de cuves carburants comprennent :</p>

                <h2 style={{fontSize: '19px'}}>Installation de cuves de carburants</h2>
                <ul>
                    <li><strong>Cuves enterrées et aériennes :</strong> installation de cuves adaptées à vos besoins spécifiques, qu'elles soient enterrées ou aériennes.</li>
                    <li><strong>Remplacement de tuyauteries :</strong> mise en place ou remplacement de tuyauteries PEHD pour assurer une connexion fiable et durable.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Maintenance des cuves de carburants</h2>
                <ul>
                    <li><strong>Inspection régulière :</strong> vérification régulière de l'état des cuves pour prévenir les fuites et garantir la sécurité.</li>
                    <li><strong>Maintenance préventive :</strong> interventions préventives pour assurer le bon fonctionnement des cuves et prolonger leur durée de vie.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Solutions pour différents types de carburants</h2>
                <ul>
                    <li><strong>Gasoil et GNR :</strong> solutions de stockage pour gasoil et gazole non routier (GNR).</li>
                    <li><strong>Bio-carburants :</strong> expertise dans la gestion des bio-carburants tels que B100, XTL, HVO et AD Blue.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Pourquoi choisir IMMP ?</h2>
                <ul>
                    <li><strong>Expertise et expérience :</strong> des années d’expérience dans l'installation et la maintenance des cuves de carburants, garantissant des services de haute qualité.</li>
                    <li><strong>Technologie avancée :</strong> utilisation des dernières technologies pour offrir des solutions innovantes et efficaces.</li>
                    <li><strong>Support client personnalisé :</strong> engagement à fournir un service client exceptionnel, adapté à vos besoins spécifiques.</li>
                </ul>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://www.immp.fr/wp-content/uploads/2022/05/64627079_10217806402644858_33372699048804352_n.jpg" alt="Installation de cuves carburants" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://www.immp.fr/wp-content/uploads/2022/05/64627079_10217806402644858_33372699048804352_n.jpg" alt="Maintenance de cuves carburants" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
