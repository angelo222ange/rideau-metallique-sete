import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[60vh] flex items-center justify-center px-5 md:px-10 py-20">
        <div className="max-w-[640px] text-center">
          <span className="inline-block bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560] mb-5">
            Erreur 404
          </span>
          <h1
            className="text-[#0A1F26] mb-5"
            style={{ fontWeight: 500, letterSpacing: "-2.4px", fontFamily: "var(--font-manrope)" }}
          >
            Cette page n&apos;existe pas
          </h1>
          <p className="text-[#4A5560] text-[16px] md:text-[18px] leading-[1.7] mb-6">
            La page que vous cherchez a été déplacée ou n&apos;existe plus. Revenez à l&apos;accueil ou contactez-nous pour un devis rideau métallique à Sète.
          </p>
          <h2
            className="text-[#0A1F26] mb-3 text-[20px] md:text-[22px]"
            style={{ fontWeight: 500, fontFamily: "var(--font-manrope)", letterSpacing: "-0.4px" }}
          >
            Besoin d&apos;une intervention 24h/24 sur le Bassin de Thau ?
          </h2>
          <p className="text-[#4A5560] text-[15px] md:text-[16px] leading-[1.7] mb-8">
            Notre équipe DRM Sète intervient en moins de 30 minutes à Sète, Frontignan, Balaruc, Mèze, Marseillan, Agde
            et toutes les communes du Bassin de Thau. Dépannage, installation, motorisation et réparation de rideaux
            métalliques.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-11 px-5 bg-[#0E4F5C] hover:bg-[#093945] text-white text-[14px] font-medium rounded-[5px] transition-colors"
            >
              Retour à l&apos;accueil
            </Link>
            <Link
              href={siteConfig.telephoneHref}
              className="inline-flex items-center justify-center h-11 px-5 bg-[#E8633E] hover:bg-[#C44A26] text-white text-[14px] font-medium rounded-[5px] transition-colors"
            >
              Appeler 04 48 14 12 98
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
