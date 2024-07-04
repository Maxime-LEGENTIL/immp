import Head from 'next/head';

// Composants
import Footer from '@/app/components/Footer';
import Header from '@/app/components/Header';

export default function MentionsLegales() {
    return (
    <>
        <Head>
            <title>IMMP - Mentions légales</title>
            <meta name="description" content="Description de la page Tuyauterie PhD" />
        </Head>

        <Header />
      
        <div className="container text-center pt-5">
            <h1>Mentions légales</h1>
        </div>

        <section class="container">
            <h2>1. Présentation du site :</h2>
            <p>Conformément aux dispositions des articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous informons les utilisateurs et visiteurs du site : [Nom du site] les informations suivantes :</p>
        </section>
        
        <section class="container">
            <h2>Éditeur du site :</h2>
            <p>
                Nom de l'entreprise : IMMP - Installation, Maintenance et Matériels Pétroliers
                Responsable de la publication : [Nom du responsable]
                Adresse : [Adresse postale de l'entreprise]
                Téléphone : [Numéro de téléphone]
                Email : [Adresse email]
                N° de SIRET : [Numéro de SIRET]
            </p>
        </section>

        <section class="container">
            <h2>Hébergement :</h2>
            <p>
                Le site est hébergé par :
                Nom de l'hébergeur : [Nom de l'hébergeur]
                Adresse de l'hébergeur : [Adresse postale de l'hébergeur]
                Téléphone : [Numéro de téléphone de l'hébergeur]
            </p>
        </section>
        
        <section class="container">
            <h2>2. Conditions générales d’utilisation du site et des services proposés :</h2>
            <p>
                L’utilisation du site [Nom du site] implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées à tout moment, les utilisateurs du site [Nom du site] sont donc invités à les consulter de manière régulière.
            </p>
            <p>
                Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour raison de maintenance technique peut être toutefois décidée par [Nom du responsable], qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates et heures de l’intervention.
            </p>
            <p>
                Le site [Nom du site] est mis à jour régulièrement par [Nom du responsable]. De la même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin d’en prendre connaissance.
            </p>
        </section>
        
        <section class="container">
            <h2>3. Description des services fournis :</h2>
            <p>
                Le site [Nom du site] a pour objet de fournir une information concernant l’ensemble des activités de la société.
            </p>
            <p>
                [Nom du responsable] s’efforce de fournir sur le site [Nom du site] des informations aussi précises que possible. Toutefois, il ne pourra être tenu responsable des oublis, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
            <p>
                Toutes les informations indiquées sur le site [Nom du site] sont données à titre indicatif, et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site [Nom du site] ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
            </p>
        </section>

        <section class="container">
            <h2>4. Limitations contractuelles sur les données techniques :</h2>
            <p>
                Le site utilise la technologie JavaScript.
            </p>
            <p>
                Le site Internet ne pourra être tenu responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération mis-à-jour.
            </p>
        </section>
        
        <section class="container">
            <h2>5. Propriété intellectuelle et contrefaçons :</h2>
            <p>
                [Nom de l'entreprise] est propriétaire des droits de propriété intellectuelle ou détient les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes, images, graphismes, logo, icônes, sons, logiciels...
            </p>
            <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable de : [Nom de l'entreprise].
            </p>
            <p>
                Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>
        </section>
        
        <section class="container">
            <h2>6. Limitations de responsabilité :</h2>
            <p>
                [Nom de l'entreprise] ne pourra être tenue responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès au site [Nom du site], et résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
            </p>
            <p>
                [Nom de l'entreprise] ne pourra également être tenue responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à l’utilisation du site [Nom du site].
            </p>
            <p>
                Des espaces interactifs (possibilité de poser des questions dans l’espace contact) sont à la disposition des utilisateurs. [Nom de l'entreprise] se réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives à la protection des données. Le cas échéant, [Nom de l'entreprise] se réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou pornographique, quel que soit le support utilisé (texte, photographie...).
            </p>
        </section>
        
        <section class="container">
            <h2>7. Gestion des données personnelles :</h2>
            <p>
                En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre 1995.
            </p>
            <p>
                A l'occasion de l'utilisation du site [Nom du site], peuvent êtres recueillies : l'URL des liens par l'intermédiaire desquels l'utilisateur a accédé au site [Nom du site], le fournisseur d'accès de l'utilisateur, l'adresse de protocole Internet (IP) de l'utilisateur.
            </p>
            <p>
                En tout état de cause [Nom de l'entreprise] ne collecte des informations personnelles relatives à l'utilisateur que pour le besoin de certains services proposés par le site [Nom du site]. L'utilisateur fournit ces informations en toute connaissance de cause, notamment lorsqu'il procède par lui-même à leur saisie. Il est alors précisé à l'utilisateur du site [Nom du site] l’obligation ou non de fournir ces informations.
            </p>
            <p>
                Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant l’adresse à laquelle la réponse doit être envoyée.
            </p>
            <p>
                Aucune information personnelle de l'utilisateur du site [Nom du site] n'est publiée à l'insu de l'utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule l'hypothèse du rachat de [Nom de l'entreprise] et de ses droits permettrait la transmission des dites informations à l'éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de modification des données vis-à-vis de l'utilisateur du site [Nom du site].
            </p>
            <p>
                Le site est déclaré à la CNIL sous le numéro [numéro de déclaration CNIL].
            </p>
            <p>
                Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
            </p>
        </section>
        
        <section class="container">
            <h2>8. Liens hypertextes et cookies :</h2>
            <p>
                Le site [Nom du site] contient un certain nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de [Nom de l'entreprise]. Cependant, [Nom de l'entreprise] n’a pas la possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune responsabilité de ce fait.
            </p>
            <p>
                La navigation sur le site [Nom du site] est susceptible de provoquer l’installation de cookie(s) sur l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le site, et ont également vocation à permettre diverses mesures de fréquentation.
            </p>
            <p>
                Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services. L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation des cookies :
            </p>
            <p>
                Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut a droite) / options internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.
            </p>
            <p>
                Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans l'onglet Options. Cliquer sur l'onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser les paramètres personnalisés pour l'historique. Enfin décochez-la pour désactiver les cookies.
            </p>
            <p>
                Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un rouage). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité", cliquez sur Paramètres de contenu. Dans la section "Cookies", vous pouvez bloquer les cookies.
            </p>
            <p>
                Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois points verticaux). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section "Confidentialité et sécurité", cliquez sur Paramètres de site. Dans la section "Cookies et données de site", vous pouvez bloquer les cookies.
            </p>
        </section>

        <Footer />
    </>
  );
}
