import { useState } from "react";
import Head from "next/head";
import axios from "axios"; // Importez Axios

// Composants
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Icônes
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

// Resend
import { Resend } from 'resend';

export default function Contact() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Utilisation d'Axios pour envoyer les données à l'API
            /*const response = await axios.post('http://localhost:3000/api/send-email', {
                name: `${firstname} ${lastname}`,
                email,
                object,
                message
            });*/


            const resend = new Resend('re_VFNXN9bx_LoFjGxj9bVX4W4vtcZMQDwpv');

            resend.emails.send({
                from: 'maxime.legentil17@gmail.com',
                to: 'maxime.legentil17@gmail.com',
                subject: 'Hello World',
                html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
            });

            //console.log('Réponse de l\'API:', response.data);
            // Réinitialisation des champs après envoi
            setFirstname('');
            setLastname('');
            setEmail('');
            setObject('');
            setMessage('');
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire:', error);
        }
    };

    return (
        <>
            <Head>
                <title>IMMP - Contact</title>
                <meta name="description" content="Description de la page Tuyauterie PhD" />
            </Head>

            <Header />

            <div className="container text-center pt-5">
                <h1>Un renseignement ? Un devis ?</h1>
                <div className="fw-semibold pt-3">N'hésitez pas, formulez-moi votre demande et je vous recontacte dans les 24h qui suivent ! Car votre projet a de l'importance pour moi.</div>
            </div>

            <section className="container pt-5">
                <div className="row text-center">
                    <div className="col-md-4">
                        <LocalPhoneIcon style={{fontSize: '3rem'}}></LocalPhoneIcon>
                        <div className="pt-1">06.00.00.00.00</div>
                    </div>
                    <div className="col-md-4">
                        <MailIcon style={{fontSize: '3rem'}}></MailIcon>
                        <div className="pt-1">contact@immp.fr</div>
                    </div>
                    <div className="col-md-4">
                        <HomeIcon style={{fontSize: '3rem'}}></HomeIcon>
                        <div className="pt-1">11 rue des passereaux, 17290 Le Thou</div>
                    </div>
                </div>
            </section>

            <section className="container mt-4">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label className="form-label">Prénom <span>*</span></label>
                            <input type="text" className="form-control" value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="lastname" className="form-label">Nom <span>*</span></label>
                            <input type="text" className="form-control" value={lastname} onChange={(e) => setLastname(e.target.value)} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="email" className="form-label">Votre adresse email <span>*</span></label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label className="form-label">Objet de la demande <span>*</span></label>
                            <input type="text" className="form-control" value={object} onChange={(e) => setObject(e.target.value)} required />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12 mb-3">
                            <label htmlFor="message" className="form-label">Message <span>*</span></label>
                            <textarea className="form-control" rows="5" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Envoyer</button>
                </form>
            </section>

            <Footer />
        </>
    );
}