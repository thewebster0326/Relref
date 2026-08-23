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

export default function BrandLogos() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="flex items-center justify-center rounded-xl border border-line bg-frost p-5"
        >
          <div className="relative h-12 w-full">
            <Image
              src={`/images/brands/${logo.file}`}
              alt={logo.name}
              fill
              sizes="(min-width: 640px) 22vw, 40vw"
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
