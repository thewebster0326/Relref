import Image from "next/image";

const logos = [
  { name: "BP", file: "bp.jpg" },
  { name: "Engen", file: "engen.jpg" },
  { name: "Glenwood Bakery", file: "glenwood-bakery.jpg" },
  { name: "Lupa Osteria", file: "lupa.jpg" },
  { name: "Northlands Bowling Club", file: "northlands-bowling-club.jpg" },
  { name: "Open Air School", file: "open-air-school.jpg" },
  { name: "The Coffee Tree", file: "the-coffee-tree.jpg" },
];

function LogoTile({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div className="flex h-28 w-44 flex-none items-center justify-center rounded-xl border border-line bg-frost p-2 sm:h-32 sm:w-52">
      <div className="relative h-full w-full">
        <Image
          src={`/images/clients/${logo.file}`}
          alt={logo.name}
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function ClientLogos() {
  return (
    <div
      className="group relative -mx-5 overflow-hidden sm:-mx-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      aria-label={`Some of our clients: ${logos.map((l) => l.name).join(", ")}`}
    >
      <div className="flex w-max animate-[marquee-reverse_24s_linear_infinite] gap-4 px-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:px-8">
        {[...logos, ...logos].map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
