import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import LegalContent, { type LegalBlock } from "@/components/LegalContent";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Mentions légales — DRM Sète",
  description:
    "Mentions légales DRM Sète : raison sociale, adresse, contact, hébergeur, propriété intellectuelle et conditions générales.",
  alternates: { canonical: `${siteConfig.url}/mentions-legales/` },
  robots: { index: true, follow: true },
};

const blocks: LegalBlock[] = [
  { type: "h2", content: "Éditeur du site" },
  { type: "p", content: `Le site ${siteConfig.url} est édité par ${siteConfig.fullName}, entreprise spécialisée dans le dépannage, l'installation et la maintenance de rideaux métalliques à Sète et sur le Bassin de Thau.` },
  { type: "p", content: `Adresse du siège social : ${siteConfig.address}.` },
  { type: "p", content: `Email : ${siteConfig.email}.` },
  { type: "p", content: "Forme juridique : SARL — RCS Montpellier — immatriculation en cours." },
  { type: "p", content: "Directeur de la publication : représentant légal de DRM Sète." },

  { type: "h2", content: "Hébergement" },
  { type: "p", content: "Le site est hébergé sur un serveur Hostinger France géré par OVH Cloud — 2 rue Kellermann, 59100 Roubaix, France. www.ovh.com." },

  { type: "h2", content: "Propriété intellectuelle" },
  { type: "p", content: `L'ensemble des contenus présents sur ${siteConfig.domain} (textes, images, photos, logo, schémas, infographies) est protégé par le droit d'auteur. Toute reproduction, représentation ou diffusion, même partielle, est strictement interdite sans accord écrit préalable de ${siteConfig.name}.` },

  { type: "h2", content: "Conditions générales d'utilisation" },
  { type: "p", content: "L'utilisation du site implique l'acceptation pleine et entière des conditions générales d'utilisation décrites ici. Ces conditions sont susceptibles d'être modifiées à tout moment." },
  { type: "p", content: "DRM Sète s'efforce de fournir des informations exactes et à jour. Toutefois, l'entreprise ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition." },

  { type: "h2", content: "Liens hypertextes" },
  { type: "p", content: `Le site ${siteConfig.url} peut contenir des liens vers d'autres sites internet ou ressources externes. ${siteConfig.name} n'exerce aucun contrôle sur ces sites et ne saurait être tenu responsable de leur contenu.` },

  { type: "h2", content: "Loi applicable" },
  { type: "p", content: "Les présentes mentions légales sont régies par la loi française. En cas de litige, et après tentative de recherche d'une solution amiable, compétence est attribuée aux tribunaux compétents du ressort de Montpellier." },

  { type: "h2", content: "Contact" },
  { type: "p", content: `Pour toute question concernant ces mentions légales ou le site, vous pouvez nous contacter par email à ${siteConfig.email} ou via le formulaire de contact.` },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Mentions légales"
          bgImage="/images/gallery/realisation-rideau-metallique-lame-pleine-commerce.webp"
          breadcrumb={[
            { label: "Accueil", href: "/" },
            { label: "Mentions légales" },
          ]}
        />
        <LegalContent
          intro={`Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique, les utilisateurs du site ${siteConfig.url} sont informés des présentes mentions légales.`}
          blocks={blocks}
        />
      </main>
      <Footer />
    </>
  );
}
