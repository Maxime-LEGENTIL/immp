import Header from '@/app/components/Header';
import Head from 'next/head';

// Icônes
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import InventoryIcon from '@mui/icons-material/Inventory';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// Composants
import Footer from '@/app/components/Footer';

// CSS
import './assets/index.css';

export default function Index() {
    return (
        <>
            <Head>
                <title>IMMP - Installation, Maintenance et Matériels Pétroliers</title>
                <meta name="description" content="IMMP est spécialisée dans l’installation et la maintenance de stations-services privatives, cuves carburants, pompes, tuyauterie PEHD, logiciels de gestion des stocks et flottes de véhicules en Nouvelle Aquitaine." />
            </Head>

            <Header />
            
            <div className="container text-center pt-5">
                <h1>Installation Maintenance et Matériels Pétroliers</h1>
                <h4><WorkspacePremiumIcon style={{color: 'green'}} /> 10 ans d'expérience dans le domaine <WorkspacePremiumIcon style={{color: 'green'}} /></h4>
            </div>

            <section className="container pt-3 pb-3">
                <div className="row" style={{fontSize: '14px'}}>
                    <p><LocalShippingIcon></LocalShippingIcon> Nouvelle structure créée par des intervenants expérimentés en matériels pétroliers, <b>IMMP</b> est spécialisée dans l’installation et la maintenance de stations-services privatives, d’installation de cuves carburants, de pompes, automates et distributeurs de carburants, de tuyauterie PEHD, d’implantation de logiciels de gestions des stocks et de flottes de véhicules entreprise.</p>
                    <p><AddLocationIcon></AddLocationIcon> Implantée dans le <b>secteur de La Rochelle</b>, en Charente-Maritime, région Nouvelle Aquitaine, le rayon d’intervention est principalement le Sud-Ouest et le Grand Ouest de la France mais toutes les destinations sont envisageables.</p>
                </div>
            </section>

            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img className='h-100 w-100 rounded' src="https://www.immp.fr/wp-content/uploads/2022/05/242989096_10224634819631015_5049122919216413317_n-e1651675095449-1024x796.jpg" alt="Installation de cuve carburant IMMP" />
                    </div>
                    <div className="col-md-6">
                        <img className='h-100 w-100 rounded' src="https://www.immp.fr/wp-content/uploads/2022/04/20181121_172216-1024x768.jpg" alt="Installation de matériel IMMP" />
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-6">
                        <img className='h-100 w-100 rounded' src="https://www.immp.fr/wp-content/uploads/2023/01/messages_0.jpeg" alt="Installation de logiciel IMMP" />
                    </div>
                    <div className="col-md-6">
                        <img className='h-100 w-100 rounded' src="https://www.immp.fr/wp-content/uploads/2023/01/messages_06-1024x768.jpeg" alt="Installation de borne IMMP" />
                    </div>
                </div>
            </div>


            <section className="container text-center pt-5">
                <h2>Mes services</h2>
            
                <div className="row justify-content-center pt-3">
                    <div className="col-md-4 col-lg-4 d-flex mb-3 justify-content-center">
                        <div className="row bg-light rounded-3 shadow p-3 w-100 advantage-card">
                            <div className="col-3 icon-container">
                                <SupportAgentIcon style={{fontSize: '5rem'}} />
                            </div>
                            <div className="col-9 text-start content-container">
                                <div>
                                    <h5 className='fw-bold'>Professionnel réactif</h5>
                                    <p>Je suis réactif concernant vos demandes. Les devis sont réalisés en 24h, et les interventions peuvent se faire très rapidement.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 d-flex mb-3 justify-content-center">
                        <div className="row bg-light rounded-3 shadow p-3 w-100 advantage-card">
                            <div className="col-3 icon-container">
                                <SettingsIcon style={{fontSize: '5rem'}} />
                            </div>
                            <div className="col-9 text-start content-container">
                                <div>
                                    <h5 className='fw-bold'>Station service carburants</h5>
                                    <p>Installation et la maintenance des stations-services privatives. Mise en place des cuves carburants, des pompes, de la tuyauterie PEHD, installation et paramétrage du logiciel de gestion des stocks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 d-flex mb-3 justify-content-center">
                        <div className="row bg-light rounded-3 shadow p-3 w-100 advantage-card">
                            <div className="col-3 icon-container">
                                <InventoryIcon style={{fontSize: '5rem'}} />
                            </div>
                            <div className="col-9 text-start content-container">
                                <div>
                                    <h5 className='fw-bold'>Stockage cuves carburants</h5>
                                    <p>IMMP assure l’installation et la maintenance des cuves carburants gasoil, GNR, bio-carburants (B100, XTL, HVO, AD Blue).</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4 d-flex mb-3 justify-content-center">
                        <div className="row bg-light rounded-3 shadow p-3 w-100 advantage-card">
                            <div className="col-3 icon-container">
                                <LocalGasStationIcon style={{fontSize: '5rem'}} />
                            </div>
                            <div className="col-9 text-start content-container">
                                <div>
                                    <h5 className='fw-bold'>Pompes et distributeurs à carburants</h5>
                                    <p>Réalisation de la mise en place, la maintenance et la réparation des distributeurs automates et pompes sur dépôts pétroliers (XL Techniques, Petrotec etc.)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex mb-3 justify-content-center">
                        <div className="row bg-light rounded-3 shadow p-3 w-100 advantage-card">
                            <div className="col-3 icon-container">
                                <SettingsInputHdmiIcon style={{fontSize: '5rem'}} />
                            </div>
                            <div className="col-9 text-start content-container">
                                <div>
                                    <h5 className='fw-bold'>Gestion des carburants et flottes</h5>
                                    <p>Étude et mise en place de solutions de gestion des carburants. Gestion distributeurs de carburants automatisés et de l’optimisation de la gestion des carburants pour une flotte de véhicules.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 d-flex mb-3 justify-content-center">
                        <div className="row bg-light rounded-3 shadow p-3 w-100 advantage-card">
                            <div className="col-3 icon-container">
                                <SettingsInputCompositeIcon style={{fontSize: '5rem'}} />
                            </div>
                            <div className="col-9 text-start content-container">
                                <div>
                                    <h5 className='fw-bold'>Tuyauterie PEHD</h5>
                                    <p>IMMP effectue l’installation et le remplacement de tuyauterie carburant PEHD.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
