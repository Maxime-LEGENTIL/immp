import Head from 'next/head';

// Icônes
import BuildIcon from '@mui/icons-material/Build';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// Composants
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function GestionPompesEtDistributeurs() {
    return (
        <>
            <Head>
                <title>IMMP - Pompes et distributeurs à carburants</title>
                <meta name="description" content="Découvrez nos services de mise en place, maintenance et réparation des pompes et distributeurs à carburants. Assurez la performance de vos installations avec notre expertise." />
                <meta name="keywords" content="Pompes à carburant, Distributeurs automates, Maintenance pompes, Réparation distributeurs, IMMP" />
                <meta name="author" content="IMMP" />
                <meta property="og:title" content="IMMP - Pompes et Distributeurs à Carburants" />
                <meta property="og:description" content="Découvrez nos services de mise en place, maintenance et réparation des pompes et distributeurs à carburants. Assurez la performance de vos installations avec notre expertise." />
                <meta property="og:image" content="https://www.immp.fr/wp-content/uploads/2022/05/79372410_10219411810099041_8295041016470175744_n.jpg" />
                <meta property="og:url" content="https://www.immp.fr/pompes-et-distributeurs" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="IMMP - Pompes et Distributeurs à Carburants" />
                <meta name="twitter:description" content="Découvrez nos services de mise en place, maintenance et réparation des pompes et distributeurs à carburants. Assurez la performance de vos installations avec notre expertise." />
                <meta name="twitter:image" content="https://www.immp.fr/wp-content/uploads/2022/05/79372410_10219411810099041_8295041016470175744_n.jpg" />
            </Head>

            <Header />

            <div className="container text-center pt-5">
                <h1>Pompes et distributeurs à carburants</h1>
                <h4><WorkspacePremiumIcon style={{color: 'green'}} /> Mise en place, maintenance et réparation <WorkspacePremiumIcon style={{color: 'green'}} /></h4>
            </div>

            <div className="container pt-2" style={{fontSize: '14px'}}>
                <p><LocalGasStationIcon></LocalGasStationIcon> IMMP est spécialisé dans la mise en place, la maintenance et la réparation des distributeurs automates et pompes sur dépôts pétroliers, assurant la performance et la sécurité de vos installations.</p>

                <p>Nos services pour les pompes et distributeurs à carburants comprennent :</p>

                <h2 style={{fontSize: '19px'}}>Mise en place de distributeurs automates et pompes</h2>
                <ul>
                    <li><strong>Installation professionnelle :</strong> installation de distributeurs automates et pompes de marques reconnues comme XL Techniques et Petrotec.</li>
                    <li><strong>Paramétrage personnalisé :</strong> configuration des équipements pour répondre aux besoins spécifiques de votre dépôt pétrolier.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Maintenance préventive et corrective</h2>
                <ul>
                    <li><strong>Contrôles réguliers :</strong> inspections régulières pour détecter les signes d'usure et prévenir les pannes.</li>
                    <li><strong>Interventions rapides :</strong> service de maintenance réactive pour minimiser les interruptions de service.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Réparation et support technique</h2>
                <ul>
                    <li><strong>Réparations fiables :</strong> interventions de réparation effectuées par des techniciens qualifiés pour assurer la durabilité des équipements.</li>
                    <li><strong>Support technique :</strong> assistance technique disponible pour répondre à toutes vos questions et résoudre les problèmes rapidement.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Solutions écologiques et économiques</h2>
                <ul>
                    <li><strong>Technologie avancée :</strong> utilisation de technologies modernes pour améliorer l'efficacité énergétique et réduire l'empreinte carbone.</li>
                    <li><strong>Réduction des coûts :</strong> solutions économiques pour réduire les coûts de maintenance et d'exploitation à long terme.</li>
                </ul>

                <h2 style={{fontSize: '19px'}}>Pourquoi choisir IMMP ?</h2>
                <ul>
                    <li><strong>Expertise et expérience :</strong> des années d’expérience dans la mise en place et la maintenance des pompes et distributeurs à carburants, garantissant des services de haute qualité.</li>
                    <li><strong>Technologie avancée :</strong> utilisation des dernières technologies pour offrir des solutions innovantes et efficaces.</li>
                    <li><strong>Support client personnalisé :</strong> engagement à fournir un service client exceptionnel, adapté à vos besoins spécifiques.</li>
                </ul>
            </div>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://www.immp.fr/wp-content/uploads/2022/05/gir20_gca_dts_tip-fr.jpg" alt="Installation de Distributeurs Automates" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid rounded" src="https://www.immp.fr/wp-content/uploads/2022/05/gir20_gca_dts_tip-fr-2-724x1024.jpg" alt="Maintenance et Réparation de Pompes" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
