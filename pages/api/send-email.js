import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Configuration de Nodemailer
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: '"Nom de votre site" <votre.email@gmail.com>',
                to: 'maxime.legentil17@gmail.com',
                subject: `Nouveau message de ${name}`,
                html: `<p>Vous avez reçu un nouveau message de votre formulaire de contact</p>
                    <p><strong>Nom: </strong> ${name}</p>
                    <p><strong>Email: </strong> ${email}</p>
                    <p><strong>Message: </strong> ${message}</p>`,
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de l\'envoi de l\'email' });
        }
    } else {
        res.status(405).json({ message: 'Méthode non autorisée' });
    }
}
