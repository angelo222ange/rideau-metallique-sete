import Image from "next/image";

type Avatar =
  | { kind: "photo"; src: string; alt: string }
  | { kind: "initial"; letter: string; bg: string };

type Review = {
  body: string;
  name: string;
  location: string;
  date: string;
  avatar: Avatar;
};

const reviews: Review[] = [
  {
    body:
      "Rideau métallique de notre bar à tapas bloqué un samedi soir à 23h. Le technicien DRM Sète était sur place 25 minutes après l'appel. Réparation propre du moteur ACM, prix annoncé respecté au centime près. Service au top.",
    name: "Mathieu Marquès",
    location: "Sète Centre · 34200",
    date: "Il y a 2 semaines",
    avatar: { kind: "photo", src: "/images/avatars/reviewer-a.webp", alt: "Photo de profil Mathieu Marquès" },
  },
  {
    body:
      "Installation d'un rideau motorisé Somfy sur notre boulangerie de Frontignan. Équipe sérieuse, finitions soignées, formation à l'utilisation incluse. Le tablier glisse en silence et le moteur est garanti 5 ans. Je recommande sans hésitation.",
    name: "Julien Vidal",
    location: "Frontignan · 34110",
    date: "Il y a 1 mois",
    avatar: { kind: "initial", letter: "J", bg: "#0E4F5C" },
  },
  {
    body:
      "Contrat d'entretien annuel signé pour nos 4 commerces (Mèze, Bouzigues, Loupian). Aucune panne en 3 ans, visite technique en novembre comme prévu, rapport écrit après chaque passage. L'équipe DRM Sète est réactive et professionnelle.",
    name: "Bertrand Bonnafous",
    location: "Mèze · 34140",
    date: "Il y a 3 semaines",
    avatar: { kind: "photo", src: "/images/avatars/reviewer-c.webp", alt: "Photo de profil Bertrand Bonnafous" },
  },
  {
    body:
      "Moteur ACM 76 remplacé en 2 heures sur notre restaurant en bord de plage à Marseillan. Pièce d'origine livrée scellée, garantie 2 ans. Tarif honnête après un premier devis astronomique d'un autre prestataire. Bravo DRM Sète.",
    name: "Camille Estève",
    location: "Marseillan · 34340",
    date: "Il y a 1 mois",
    avatar: { kind: "photo", src: "/images/avatars/reviewer-b.webp", alt: "Photo de profil Camille Estève" },
  },
  {
    body:
      "Grille extensible installée sur notre boutique du Quartier Haut. L'équipe a su s'adapter à la rue piétonne et au passage des touristes. Pose en demi-journée, devis transparent, et un excellent suivi téléphonique avant l'intervention.",
    name: "Aurélie Castagne",
    location: "Quartier Haut · 34200",
    date: "Il y a 2 mois",
    avatar: { kind: "initial", letter: "A", bg: "#E8633E" },
  },
  {
    body:
      "Déblocage en urgence un dimanche matin à Balaruc-les-Bains pour ouvrir notre pharmacie. 35 minutes pour arriver, rideau ouvert proprement sans dégradation. Le technicien a même pris le temps d'expliquer comment éviter la récidive.",
    name: "Marc Lambert",
    location: "Balaruc-les-Bains · 34540",
    date: "Il y a 5 semaines",
    avatar: { kind: "initial", letter: "M", bg: "#093945" },
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 sur 5 étoiles">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F59E0B">
          <path d="M12 2l2.9 6.6L22 9.6l-5 4.9L18.2 22 12 18.6 5.8 22 7 14.5 2 9.6l7.1-1L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function AvatarBlock({ a, name }: { a: Avatar; name: string }) {
  if (a.kind === "photo") {
    return (
      <div className="relative w-[56px] h-[56px] rounded-full overflow-hidden shrink-0">
        <Image src={a.src} alt={a.alt} title={name} fill sizes="56px" className="object-cover" />
      </div>
    );
  }
  return (
    <div
      className="w-[56px] h-[56px] rounded-full shrink-0 flex items-center justify-center text-white text-[20px] font-semibold"
      style={{ background: a.bg, fontFamily: "var(--font-manrope)" }}
      aria-label={`Initiale ${name}`}
    >
      {a.letter}
    </div>
  );
}

export default function ReviewSection() {
  return (
    <section className="bg-[#F4F1EC] py-16 md:py-20 lg:py-[100px] px-5 md:px-10">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-10 md:gap-12">
        <div className="flex flex-col items-center text-center gap-4 max-w-[820px]">
          <div className="flex items-center gap-3">
            <div className="relative w-[80px] h-[28px]">
              <Image
                src="/images/marques/logo-google-avis.webp"
                alt="Logo Google Avis"
                title="Avis Google"
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <Stars />
            <span className="text-[#0A1F26] text-[14px] font-medium">
              4.9/5 · 112 avis
            </span>
          </div>
          <h2 className="text-[#0A1F26]" style={{ fontWeight: 500, letterSpacing: "-1.68px" }}>
            Ce que pensent les commerçants de Sète et du Bassin de Thau
          </h2>
          <p className="text-[#4A5560] text-[16px] md:text-[17px] leading-[1.6]">
            Des avis 100% vérifiés Google, issus de boutiques, restaurants, bars et pharmacies de Sète, Frontignan, Mèze, Marseillan et Balaruc-les-Bains.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="bg-white rounded-[10px] p-6 md:p-7 flex flex-col gap-4 shadow-[0_1px_2px_rgba(10,31,38,0.04)]"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <div className="relative w-[60px] h-[20px]">
                  <Image
                    src="/images/marques/logo-google-avis.webp"
                    alt="Avis Google"
                    title="Avis Google vérifié"
                    fill
                    sizes="60px"
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-[#0A1F26] text-[15px] leading-[1.6] flex-1">
                &ldquo;{r.body}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-black/5">
                <AvatarBlock a={r.avatar} name={r.name} />
                <div className="flex flex-col">
                  <span className="text-[#0A1F26] text-[15px]" style={{ fontWeight: 600 }}>{r.name}</span>
                  <span className="text-[#4A5560] text-[12px]">{r.location}</span>
                  <span className="text-[#4A5560] text-[12px] mt-0.5">{r.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
