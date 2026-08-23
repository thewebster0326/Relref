import Image from "next/image";

const logos = [
  { name: "Staycold", file: "stay-cold.jpg" },
  { name: "Samsung", file: "samsung.jpg" },
  { name: "LG", file: "lg.jpg" },
  { name: "KIC", file: "kic.jpg" },
  { name: "Fridgestar", file: "fridgestar.jpg" },
  { name: "Defy", file: "defy.jpg" },
  { name: "Cool Master", file: "coolmaster.jpg" },
  { name: "Concord", file: "concord.jpg" },
];

function LogoTile({ logo }: { logo: (typeof logos)[number] }) {
  return (
    <div className="flex h-28 w-44 flex-none items-center justify-center rounded-xl border border-line bg-frost p-2 sm:h-32 sm:w-52">
      <div className="relative h-full w-full">
        <Image
          src={`/images/brands/${logo.file}`}
          alt={logo.name}
          fill
          sizes="200px"
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default function BrandLogos() {
  return (
    <div
      className="group relative -mx-5 overflow-hidden sm:-mx-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
      aria-label={`Brands we service: ${logos.map((l) => l.name).join(", ")}`}
    >
      <div className="flex w-max animate-[marquee_28s_linear_infinite] gap-4 px-5 group-hover:[animation-play-state:paused] motion-reduce:animate-none sm:px-8">
        {[...logos, ...logos].map((logo, i) => (
          <LogoTile key={`${logo.name}-${i}`} logo={logo} />
        ))}
      </div>
    </div>
  );
}
