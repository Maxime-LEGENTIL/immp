import Head from 'next/head';

// Icônes
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';

// Composants
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function Galerie() {
    return (
        <>
            <Head>
                <title>IMMP - Galerie photos</title>
                <meta name="description" content="Découvrez notre galerie de photos présentant nos réalisations et nos projets en tuyauterie, gestion de carburant et flottes, stockage de cuves et plus encore." />
                <meta name="keywords" content="Galerie photos, Réalisations IMMP, Projets IMMP, Tuyauterie, Gestion carburant, Stockage cuves" />
                <meta name="author" content="IMMP" />
                <meta property="og:title" content="IMMP - Galerie photos" />
                <meta property="og:description" content="Découvrez notre galerie de photos présentant nos réalisations et nos projets en tuyauterie, gestion de carburant et flottes, stockage de cuves et plus encore." />
                <meta property="og:image" content="https://www.immp.fr/wp-content/uploads/2022/05/gallery-placeholder.jpg" />
                <meta property="og:url" content="https://www.immp.fr/galerie" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IMMP - Galerie photos" />
                <meta name="twitter:description" content="Découvrez notre galerie de photos présentant nos réalisations et nos projets en tuyauterie, gestion de carburant et flottes, stockage de cuves et plus encore." />
                <meta name="twitter:image" content="https://www.immp.fr/wp-content/uploads/2022/05/gallery-placeholder.jpg" />
            </Head>

            <Header />
      
            <div className="container text-center pt-5">
                <h1>Galerie photos</h1>
                <h4><PhotoLibraryIcon style={{color: 'green'}} /> Nos réalisations et projets <PhotoLibraryIcon style={{color: 'green'}} /></h4>
            </div>

            <div className="container pt-2" style={{fontSize: '14px'}}>
                <p><PhotoLibraryIcon></PhotoLibraryIcon> Découvrez notre galerie de photos présentant nos réalisations et nos projets dans divers domaines :</p>

                <h2 style={{fontSize: '19px'}}>Tuyauterie industrielle</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2023/01/messages_06-1024x768.jpeg" alt="Tuyauterie 1" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2023/01/messages_04.jpeg" alt="Tuyauterie 2" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2023/01/messages_03.jpeg" alt="Tuyauterie 3" />
                    </div>
                </div>

                <h2 style={{fontSize: '19px'}}>Gestion de carburant et flottes</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20210217_170257-2048x1536.jpg" alt="Gestion Carburant 1" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20210224_123212-2048x1536.jpg" alt="Gestion Carburant 2" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20210720_145422-2048x1536.jpg" alt="Gestion Carburant 3" />
                    </div>
                </div>

                <h2 style={{fontSize: '19px'}}>Stockage cuves carburants</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20220202_104052-2048x1536.jpg" alt="Cuves Carburant 1" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20220329_172906-2048x1536.jpg" alt="Cuves Carburant 2" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/05/84407092_10219762628909292_2861541610435379200_n.jpg" alt="Cuves Carburant 3" />
                    </div>
                </div>

                <h2 style={{fontSize: '19px'}}>Autres réalisations</h2>
                <div className="row">
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20210419_151725-2048x1536.jpg" alt="Réalisation 1" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20220223_151748-2048x1536.jpg" alt="Réalisation 2" />
                    </div>
                    <div className="col-md-4">
                        <img className="img-fluid rounded mb-3" src="https://www.immp.fr/wp-content/uploads/2022/06/20220411_171548-2048x1536.jpg" alt="Réalisation 3" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
