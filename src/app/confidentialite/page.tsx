import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LegalContent, { type LegalBlock } from "@/components/LegalContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité — DRM Sète",
  description:
    "Politique de confidentialité et RGPD DRM Sète : données collectées, finalités, durée de conservation, droits des utilisateurs et cookies.",
  alternates: { canonical: `${siteConfig.url}/confidentialite/` },
  robots: { index: true, follow: true },
};

const blocks: LegalBlock[] = [
  { type: "h2", content: "Collecte et utilisation des données" },
  { type: "p", content: `Les données personnelles collectées via les formulaires du site ${siteConfig.url} (nom, téléphone, email, message) sont utilisées exclusivement par ${siteConfig.fullName} pour répondre à vos demandes de devis, planifier des interventions et assurer le suivi commercial.` },
  { type: "p", content: "Aucune donnée n'est cédée à des tiers à des fins commerciales. Les seuls destinataires sont l'équipe DRM Sète et nos sous-traitants techniques (hébergeur, prestataire de routage email) liés par contrat de confidentialité." },

  { type: "h2", content: "Finalités du traitement" },
  { type: "ul", content: [
    "Répondre aux demandes de devis et d'intervention.",
    "Planifier et confirmer les rendez-vous techniques.",
    "Assurer le suivi commercial et la facturation.",
    "Vous informer ponctuellement de nos services (avec votre consentement).",
  ]},

  { type: "h2", content: "Durée de conservation" },
  { type: "p", content: "Les données issues des formulaires sont conservées 3 ans à compter de votre dernière sollicitation. Au-delà, elles sont supprimées ou anonymisées. Les données comptables sont conservées 10 ans conformément aux obligations légales." },

  { type: "h2", content: "Vos droits (RGPD)" },
  { type: "p", content: "Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants :" },
  { type: "ul", content: [
    "Droit d'accès à vos données personnelles.",
    "Droit de rectification des données inexactes.",
    "Droit à l'effacement (droit à l'oubli).",
    "Droit à la limitation du traitement.",
    "Droit d'opposition au traitement.",
    "Droit à la portabilité de vos données.",
  ]},
  { type: "p", content: `Pour exercer ces droits, contactez-nous à ${siteConfig.email}. Une réponse vous sera apportée sous 30 jours maximum. En cas de désaccord, vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).` },

  { type: "h2", content: "Cookies" },
  { type: "p", content: "Le site utilise des cookies techniques strictement nécessaires à son fonctionnement (session, préférences) et, sous réserve de votre consentement, des cookies de mesure d'audience anonyme (Plausible Analytics ou équivalent)." },
  { type: "p", content: "Vous pouvez à tout moment refuser ou supprimer les cookies via les paramètres de votre navigateur." },

  { type: "h2", content: "Sécurité" },
  { type: "p", content: `${siteConfig.fullName} met en œuvre les mesures techniques et organisationnelles appropriées pour assurer la sécurité et la confidentialité des données collectées : chiffrement HTTPS, hébergement sécurisé OVH France, accès restreints aux données.` },

  { type: "h2", content: "Contact" },
  { type: "p", content: `Pour toute question relative à la protection de vos données personnelles, contactez-nous à ${siteConfig.email} ou par courrier à ${siteConfig.address}.` },
];

export default function ConfidentialitePage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Politique de confidentialité"
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Confidentialité" },
          ]}
        />
        <LegalContent
          intro={`${siteConfig.fullName} attache la plus grande importance à la protection de vos données personnelles. La présente politique de confidentialité décrit la manière dont nous collectons, utilisons et protégeons les informations recueillies sur ${siteConfig.url}.`}
          blocks={blocks}
        />
      </main>
      <Footer />
    </>
  );
}
