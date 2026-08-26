export const site = {
  name: "Reliable Refrigeration",
  heroHeadline: "Expert Fridge & Commercial Refrigeration Repairs in Durban",
  tagline: "Keeping cool under every circumstance",
  founded: 2004,
  phones: {
    mobile: "083 538 5106",
    office: "031 201 7672",
    alternate: "031 464 2281",
  },
  email: "info@relref.co.za",
  googleReviewsUrl: "https://share.google/hqPOuoqn848mp6M8z",
};

export const serviceAreas = [
  "Durban",
  "Durban North",
  "Umhlanga",
  "La Lucia",
  "Kloof",
  "Hillcrest",
  "Westville",
  "Pinetown",
  "Queensburgh",
  "Malvern",
  "Berea",
  "Glenwood",
  "Bluff",
  "Chatsworth",
  "Mount Edgecombe",
  "Reservoir Hills",
  "Sherwood",
  "Montclair",
];

export const designer = {
  name: "The Webster",
  url: "https://thewebster.co.za",
};

export type ServiceExtra = {
  heading: string;
  items: string[];
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  image: string;
  intro: string[];
  included: string[];
  extras?: ServiceExtra[];
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
    extras: [
      {
        heading: "Brands we repair",
        items: [
          "Samsung",
          "LG",
          "Defy",
          "KIC",
          "Hisense",
          "Bosch",
          "AEG",
          "Whirlpool",
          "Kelvinator",
          "Side-by-side & French door fridges",
          "Upright & chest freezers",
        ],
      },
      {
        heading: "Common faults we fix",
        items: [
          "Fridge not cooling",
          "Freezer not freezing",
          "Water leaks",
          "Excessive ice build-up",
          "Faulty thermostats",
          "Compressor problems",
          "Gas leaks",
          "Fan motor failures",
          "Electrical faults",
          "Strange noises",
        ],
      },
    ],
  },
  {
    slug: "commercial-refrigeration",
    name: "Commercial Refrigeration",
    shortName: "Commercial Refrigeration",
    summary: "Restaurants, supermarkets and mobile fridges — kept running, kept legal.",
    image: "/images/gallery/commercial-fridge.jpg",
    intro: [
      "Downtime on a commercial unit costs stock, and sometimes trading hours. We service restaurants, supermarkets, bakeries and mobile fridge units across Durban and the surrounding area, with the same on-site, fix-it-today approach as our domestic work.",
      "We work around your trading hours where we can, and we understand that modern refrigerants carry their own handling requirements — our team and our insurance are up to date on that.",
    ],
    included: [
      "Display fridges, walk-in coolers, bar and kitchen refrigeration",
      "Mobile fridge units and delivery vehicles",
      "Scheduled maintenance to catch faults before they cost you stock",
      "Fully insured for flammable modern refrigerants",
    ],
    extras: [
      {
        heading: "Equipment we repair and service",
        items: [
          "Display fridges",
          "Upright commercial refrigerators",
          "Under-counter fridges",
          "Beverage & bottle coolers",
          "Freezer rooms & cold rooms",
          "Walk-in refrigerators",
          "Restaurant refrigeration",
          "Supermarket refrigeration",
          "Catering equipment refrigeration",
        ],
      },
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
    extras: [
      {
        heading: "Also covered",
        items: [
          "Temperature controller replacement",
          "Compressor replacement",
          "Refrigerant leak detection",
          "Preventative maintenance",
          "System servicing",
        ],
      },
    ],
  },
  {
    slug: "maintenance",
    name: "Refrigeration Maintenance",
    shortName: "Maintenance",
    summary: "Scheduled servicing that catches faults before they become breakdowns.",
    image: "/images/gallery/domestic-fridge-1.jpg",
    intro: [
      "Most breakdowns give a warning first — a coil running dirty, a gas pressure slowly dropping, a thermostat drifting out of calibration. Regular maintenance catches those warnings before they turn into an emergency call-out.",
      "A well-maintained system also runs more efficiently, which shows up directly on your power bill and extends the life of the equipment.",
    ],
    included: [
      "Full system inspections",
      "Coil cleaning",
      "Gas pressure checks",
      "Electrical testing",
      "Thermostat calibration",
      "Leak detection",
      "Performance testing",
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

export const timeline = [
  { year: "2004", desc: "Founded in Durban, owner-operated from day one." },
  { year: "Since", desc: "30+ years combined technician experience across the team." },
  {
    year: "Now",
    desc: "Servicing Durban and 15+ surrounding suburbs, fully insured, factory-backed warranties.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Do you repair all fridge brands?",
    answer:
      "Yes. We repair most major domestic and commercial refrigeration brands, including Samsung, LG, Defy, KIC, Hisense, Bosch, AEG and many others.",
  },
  {
    question: "Do you provide commercial refrigeration repairs?",
    answer:
      "Yes. We service commercial refrigeration equipment, cold rooms, freezer rooms, display fridges and beverage coolers for restaurants, supermarkets and other businesses.",
  },
  {
    question: "How quickly can you attend a breakdown?",
    answer:
      "We always aim to respond as quickly as possible and will arrange the earliest available appointment — call us directly for the fastest response.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes. Regular maintenance helps prevent unexpected breakdowns, improves energy efficiency and extends the life of your refrigeration equipment.",
  },
  {
    question: "What areas do you service?",
    answer:
      "We cover Durban and the surrounding area, including Durban North, Umhlanga, La Lucia, Kloof, Hillcrest, Westville, Pinetown, Queensburgh, Malvern and more.",
  },
];

export type Review = {
  quote: string;
  author: string;
  rating: number;
};

// Real quotes from Google — copied over manually since Google blocks
// automated access. See googleReviewsUrl above for the live profile.
export const reviews: Review[] = [
  {
    quote:
      "Nolan and Reliable Refrigeration give fantastic service at reasonable rates. They are honest, explain problems and give fair estimates. They give good advice and if a unit is not viable to repair they'll tell you. I highly recommend their services.",
    author: "Love Local Live Music",
    rating: 5,
  },
  {
    quote:
      "Very reliable co. The technician has a vast knowledge on fridge repair. Ive had 3 guys repair my fridge and i lost money. Nolan and his team i will recommend any day.",
    author: "Carl Pretorius",
    rating: 5,
  },
  {
    quote:
      "I am very happy with the service received. The quick response to my call, the honest no nonsense discussion regards the assessment of my problem and the turn around time to fix it. I would highly recommend using Reliable Refrigeration.",
    author: "Carol Robinson",
    rating: 5,
  },
  {
    quote:
      "Nolan and team are excellent in what they do. Always reliable and affordable. Using them for close to 17 years. Also services special needs school Open Air School. Trustworthy and efficient.",
    author: "Roshan Sewsunker",
    rating: 5,
  },
  {
    quote:
      "Very responsive compared to others I contacted. Was very quick to arrive at my property to assess the fridge. Extremely professional and offered different options for repair. Communicated times of arrival and expected turnarounds very well. I would highly recommend Nolan.",
    author: "Vaughn Reyneke",
    rating: 5,
  },
  {
    quote:
      "Reliable Refrigeration provided excellent service from start to finish. True to their name, they were incredibly reliable and right there when I needed them. The entire process was smooth and highly efficient. If you want a team that actually shows up and delivers top-notch work, look no further. Highly recommended!",
    author: "Vivek Bhagwan",
    rating: 5,
  },
];

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
      "If you're seeing two or more of these, it's worth getting it looked at before it fails on a Friday night with a fridge full of food. We diagnose and repair on-site across Durban and the surrounding area.",
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
