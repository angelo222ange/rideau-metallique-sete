import { siteConfig, services, zones } from "@/config/site";

type Service = (typeof services)[number];
type Zone = (typeof zones)[number];

export function replaceVariables(
  text: string,
  zone?: string,
  zonePostal?: string
): string {
  if (!text) return "";
  const replacements: Record<string, string> = {
    "{name}": siteConfig.fullName,
    "{phone}": siteConfig.phone,
    "{phoneLink}": siteConfig.phoneLink,
    "{email}": siteConfig.email,
    "{city}": siteConfig.city,
    "{postalCode}": siteConfig.postalCode,
    "{department}": siteConfig.department,
    "{departmentCode}": siteConfig.departmentCode,
    "{region}": siteConfig.region,
    "{address}": siteConfig.address,
    "{domain}": siteConfig.domain,
    "{url}": siteConfig.url,
    "{experience}": siteConfig.experience,
    "{delai}": siteConfig.delai,
    "{rating}": siteConfig.rating,
    "{interventions}": siteConfig.interventions,
  };

  if (zone) replacements["{zone}"] = zone;
  if (zonePostal) replacements["{zonePostal}"] = zonePostal;

  let result = text;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.split(key).join(value);
  }
  return result;
}

export function getZoneBySlug(slug: string): Zone | undefined {
  return zones.find((z) => z.slug === slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug || s.id === slug);
}

export function generateSlug(serviceSlug: string, zoneSlug: string): string {
  return `${serviceSlug}-${zoneSlug}`;
}

export function parseSlug(
  slug: string
): { service: Service; zone: Zone } | { service: Service; zone: null } | null {
  // 1) Match service x zone
  for (const service of services) {
    for (const zone of zones) {
      if (slug === `${service.slug}-${zone.slug}`) {
        return { service, zone };
      }
    }
  }
  // 2) Match service x ville principale (slug = `${service.slug}-${citySlug}`)
  for (const service of services) {
    if (slug === `${service.slug}-${siteConfig.citySlug}`) {
      return { service, zone: null };
    }
  }
  return null;
}
