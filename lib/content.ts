export const site = {
  name: "Reliable Refrigeration",
  tagline: "Keeping cool under every circumstance",
  founded: 2004,
  phones: {
    mobile: "083 538 5106",
    durban: "031 201 7672",
    queensburgh: "031 464 2281",
  },
  email: "info@relref.co.za",
  googleReviewsUrl: "https://share.google/hqPOuoqn848mp6M8z",
};

export const designer = {
  name: "The Webster",
  url: "https://thewebster.co.za",
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  image: string;
  intro: string[];
  included: string[];
};

export const services: Service[] = [
  {
    slug: "domestic-repairs",
    name: "Domestic Fridge & Freezer Repairs",
    shortName: "Domestic Repairs",
    summary: "Household fridges and freezers, diagnosed and repaired at your home.",
    image: "/images/gallery/domestic-fridge.jpg",
    intro: [
      "A fridge going down at home doesn't wait for a convenient time. We come to you, diagnose the fault on the spot, and carry the parts and tools to fix most household fridges and freezers in a single visit.",
      "Every repair is backed by a factory warranty on parts, carried out by technicians with 30+ years of combined experience across the team.",
    ],
    included: [
      "On-site diagnosis and repair — no dropping your fridge off anywhere",
      "Household fridges, freezers and combination units, any brand",
      "Factory-backed warranty on parts fitted",
      "Fully insured technicians, fully equipped vehicles",
    ],
  },
  {
    slug: "commercial-refrigeration",
    name: "Commercial Refrigeration",
    shortName: "Commercial Refrigeration",
    summary: "Restaurants, supermarkets and mobile fridges — kept running, kept legal.",
    image: "/images/gallery/commercial-fridge.jpg",
    intro: [
      "Downtime on a commercial unit costs stock, and sometimes trading hours. We service restaurants, supermarkets, bakeries and mobile fridge units across Durban and Queensburgh, with the same on-site, fix-it-today approach as our domestic work.",
      "We work around your trading hours where we can, and we understand that modern refrigerants carry their own handling requirements — our team and our insurance are up to date on that.",
    ],
    included: [
      "Display fridges, walk-in coolers, bar and kitchen refrigeration",
      "Mobile fridge units and delivery vehicles",
      "Scheduled maintenance to catch faults before they cost you stock",
      "Fully insured for flammable modern refrigerants",
    ],
  },
  {
    slug: "cold-rooms-freezer-rooms",
    name: "Cold Rooms & Freezer Rooms",
    shortName: "Cold & Freezer Rooms",
    summary: "Custom-built systems, sized to your space and your budget.",
    image: "/images/gallery/coldroom.jpg",
    intro: [
      "Every space is different, so we build cold rooms and freezer rooms to suit the room you actually have — not a one-size-fits-all box. That covers everything from a small walk-in for a bakery to larger storage for a restaurant or wholesaler.",
      "As the owners are hands-on through every install, workmanship is backed by factory warranties from day one.",
    ],
    included: [
      "Custom design and build, matched to your space and budget",
      "Walk-in cold rooms and freezer rooms for restaurants, bakeries and retail",
      "Factory-backed warranty on the finished system",
      "Ongoing service and repairs once it's installed",
    ],
  },
  {
    slug: "sales",
    name: "Refrigeration Sales",
    shortName: "Sales",
    summary: "Beverage coolers, under-counter units, meat display — buy or sell.",
    image: "/images/gallery/cooldrink-fridge.jpg",
    intro: [
      "Beyond repairs, we supply beverage coolers, under-counter fridges and meat display units at competitive prices — and we buy and sell used fridges too.",
      "If you're not sure whether to repair an ageing unit or replace it, ask us — we'll give you a straight answer, not just a sales pitch.",
    ],
    included: [
      "Beverage coolers and under-counter fridges",
      "Meat and deli display units",
      "Buying and selling of used fridges",
      "Honest advice on repair vs. replace",
    ],
  },
];

export const clients = [
  "BP",
  "Engen",
  "Glenwood Bakery",
  "Lupa Osteria",
  "Northlands Bowling Club",
  "Open Air School",
  "The Coffee Tree",
];

export const timeline = [
  { year: "2004", desc: "Founded in Durban, owner-operated from day one." },
  { year: "Since", desc: "30+ years combined technician experience across the team." },
  {
    year: "Now",
    desc: "2 branches — Durban and Queensburgh — fully insured, factory-backed warranties.",
  },
];

export type Review = {
  quote: string;
  author: string;
  rating: number;
};

// Real Google review quotes go here once supplied — see googleReviewsUrl above
// for the live profile in the meantime.
export const reviews: Review[] = [];

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readMinutes: number;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-fridge-compressor-is-failing",
    title: "5 signs your fridge compressor is failing",
    date: "2026-06-02",
    readMinutes: 4,
    excerpt:
      "The compressor is the heart of your fridge. Here's what to watch and listen for before it fails completely.",
    body: [
      "The compressor is the heart of any fridge or freezer — it's what actually moves refrigerant through the system and keeps things cold. When it starts to fail, it rarely happens without warning. Catching the early signs can be the difference between a same-day repair and a full replacement.",
      "**1. It's louder than it used to be.** A healthy compressor hums quietly in the background. A knocking, clicking, or noticeably louder buzzing sound often means internal components are wearing out.",
      "**2. It's running constantly.** Compressors cycle on and off to maintain temperature. If yours seems to run non-stop, it may be struggling to keep up — often the first sign of reduced efficiency.",
      "**3. The fridge feels warm to the touch.** Some warmth near the back or sides is normal. Excessive heat, especially combined with a hot compressor housing, points to it working harder than it should.",
      "**4. Food isn't staying as cold.** If your milk is turning sooner than usual or ice cream is softer than it should be, the compressor may not be maintaining pressure properly.",
      "**5. It won't start at all, or starts and stops immediately.** This is usually the final stage — a failed start relay or a seized compressor.",
      "If you're seeing two or more of these, it's worth getting it looked at before it fails on a Friday night with a fridge full of food. We diagnose and repair on-site across Durban and Queensburgh.",
    ],
  },
  {
    slug: "why-is-my-walk-in-cooler-icing-up",
    title: "Why is my restaurant walk-in cooler icing up?",
    date: "2026-06-20",
    readMinutes: 5,
    excerpt:
      "Ice building up inside a commercial cooler is never just cosmetic — here's what's usually behind it.",
    body: [
      "A layer of frost or ice inside a commercial walk-in cooler is one of the most common call-outs we get from restaurants and bakeries — and it's never just cosmetic. Ice buildup means the system isn't defrosting properly, and left alone it gets worse and starts affecting temperature control across the whole unit.",
      "**A faulty defrost timer or heater.** Most commercial coolers run scheduled defrost cycles to melt any frost that naturally forms on the evaporator coil. If the timer or the defrost heater fails, that frost never clears — and it builds up fast.",
      "**A door seal that's not sealing.** Warm, humid kitchen air getting into the cooler through a worn door gasket is one of the most common causes. The moisture in that air freezes the moment it hits the cold coil.",
      "**Low refrigerant.** A slow leak drops the system's operating pressure, which can cause the coil to run colder than it should and frost over even during a normal defrost cycle.",
      "**Blocked airflow.** Stock stacked too close to the evaporator fan restricts airflow, which can cause uneven cooling and localized icing.",
      "None of these fix themselves, and a cooler that's fighting ice buildup is using more power and putting more strain on the compressor. If you're seeing frost forming faster than usual, it's worth a call before it costs you stock.",
    ],
  },
  {
    slug: "flammable-refrigerants-what-it-means-for-you",
    title: "Modern refrigerants can be flammable — what that means for you",
    date: "2026-07-08",
    readMinutes: 4,
    excerpt:
      "Newer, more efficient refrigerants like R290 come with real handling requirements. Here's the short version.",
    body: [
      "If you've bought a fridge or air conditioner in the last few years, there's a good chance it uses a newer refrigerant like R290 (propane) rather than the older gases most of us grew up with. These newer refrigerants are more energy-efficient and better for the environment — but they're also mildly flammable, and that changes how they need to be handled.",
      "**Why manufacturers switched.** Older refrigerants like R134a and R404A have a high Global Warming Potential (GWP). Refrigerants like R290 have a fraction of that impact, which is why they're becoming the standard in new appliances worldwide.",
      "**What it means for repairs.** Flammable refrigerants require different tools, ventilation, and handling procedures during servicing than older gases did. A technician working on one of these systems needs to be trained for it — and the workshop or vehicle needs to be equipped for it too.",
      "**What it means for insurance.** Because of the flammability risk, servicing these systems properly requires cover that accounts for it. It's a detail easy to overlook, but it matters if something ever goes wrong.",
      "**What you should do.** You don't need to do anything differently day-to-day — these appliances are designed to be safe in normal home or commercial use. Just make sure whoever services or repairs the unit is properly insured and trained for the refrigerant it actually uses. We are, on both counts.",
    ],
  },
];
