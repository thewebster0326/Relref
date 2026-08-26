import { areas, services, type AreaProfile, type Service } from "./content";

const servicePhrases: Record<string, string> = {
  "domestic-repairs": "fridge and freezer repairs",
  "commercial-refrigeration": "commercial refrigeration repairs",
  "cold-rooms-freezer-rooms": "cold room or freezer room work",
};

const introTemplates: Array<(vars: {
  area: string;
  region: string;
  n1: string;
  n2: string;
  phrase: string;
}) => string> = [
  ({ area, region, n1, n2, phrase }) =>
    `If you're in ${area} and need ${phrase}, we're already on your doorstep — ${area} sits within our regular run through ${region}, alongside ${n1} and ${n2}.`,
  ({ area, region, phrase }) =>
    `${area} is part of our regular call-out route through ${region}, so getting ${phrase} sorted here is no different to anywhere else we work — same technicians, same fast response.`,
  ({ area, region, n1, n2, phrase }) =>
    `We get out to ${area} and nearby ${n1} and ${n2} regularly, covering ${region}, so you're never waiting long for ${phrase}.`,
  ({ area, region, n1, n2, phrase }) =>
    `Based in Durban and on the road across ${region}, ${area} — along with ${n1} and ${n2} — is well within reach for ${phrase}, usually the same day you call.`,
];

export function areaBySlug(slug: string): AreaProfile | undefined {
  return areas.find((a) => a.slug === slug);
}

export function neighborsOf(area: AreaProfile): AreaProfile[] {
  return area.neighborSlugs
    .map((slug) => areaBySlug(slug))
    .filter((a): a is AreaProfile => Boolean(a));
}

export function landingIntro(service: Service, area: AreaProfile): string {
  const serviceIndex = services.findIndex((s) => s.slug === service.slug);
  const areaIndex = areas.findIndex((a) => a.slug === area.slug);
  const variant = introTemplates[(serviceIndex + areaIndex) % introTemplates.length];
  const [n1, n2] = neighborsOf(area);

  return variant({
    area: area.name,
    region: area.region,
    n1: n1?.name ?? "the surrounding suburbs",
    n2: n2?.name ?? "the wider area",
    phrase: servicePhrases[service.slug] ?? service.name.toLowerCase(),
  });
}
