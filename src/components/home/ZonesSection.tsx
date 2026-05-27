import Link from "next/link";
import { zones } from "@/config/site";

export default function ZonesSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-10">
          <div className="flex flex-col gap-4 max-w-[680px]">
            <span className="inline-block self-start bg-[#F4F1EC] px-[14px] py-1.5 rounded-full text-[12px] tracking-[0.2em] uppercase text-[#4A5560]">
              Zones d&apos;intervention
            </span>
            <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
              Sète, Bassin de Thau et Hérault Sud-Est
            </h2>
            <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
              Plus de 25 communes couvertes sans frais de déplacement, sous 30 à 60 minutes selon la zone.
            </p>
          </div>
          <Link
            href="/zones/"
            className="inline-flex items-center gap-2 self-start md:self-end text-[#E8633E] text-[14px] font-medium border-b border-[#E8633E] pb-1 hover:text-[#C44A26] hover:border-[#C44A26] transition-colors"
          >
            Voir toutes les zones →
          </Link>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {zones.map((z) => (
            <li key={z.slug}>
              <Link
                href={`/depannage-rideau-metallique-${z.slug}/`}
                className="block bg-[#F4F1EC] hover:bg-[#0E4F5C] hover:text-white rounded-[8px] p-4 md:p-5 transition-colors group"
              >
                <span className="block text-[#0A1F26] group-hover:text-white text-[14px] md:text-[15px] font-medium leading-tight">
                  {z.name}
                </span>
                <span className="block text-[#4A5560] group-hover:text-white/70 text-[12px] mt-1">
                  {z.postalCode} · {z.distance}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
