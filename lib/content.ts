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
  url: "https://relref.co.za",
  address: {
    street: "81 Musgrave Rd",
    suburb: "Musgrave",
    city: "Durban",
    region: "KwaZulu-Natal",
    postalCode: "4001",
    country: "ZA",
  },
  googleReviewsUrl: "https://share.google/hqPOuoqn848mp6M8z",
};

export type AreaProfile = {
  slug: string;
  name: string;
  region: string;
  neighborSlugs: [string, string];
};

export const areas: AreaProfile[] = [
  { slug: "durban", name: "Durban", region: "central Durban", neighborSlugs: ["berea", "glenwood"] },
  { slug: "durban-north", name: "Durban North", region: "northern Durban", neighborSlugs: ["umhlanga", "mount-edgecombe"] },
  { slug: "umhlanga", name: "Umhlanga", region: "the North Coast", neighborSlugs: ["la-lucia", "durban-north"] },
  { slug: "la-lucia", name: "La Lucia", region: "the North Coast", neighborSlugs: ["umhlanga", "durban-north"] },
  { slug: "kloof", name: "Kloof", region: "the Upper Highway", neighborSlugs: ["hillcrest", "westville"] },
  { slug: "hillcrest", name: "Hillcrest", region: "the Upper Highway", neighborSlugs: ["kloof", "westville"] },
  { slug: "westville", name: "Westville", region: "the Outer West", neighborSlugs: ["pinetown", "kloof"] },
  { slug: "pinetown", name: "Pinetown", region: "the Outer West", neighborSlugs: ["westville", "queensburgh"] },
  { slug: "queensburgh", name: "Queensburgh", region: "the south-west", neighborSlugs: ["malvern", "pinetown"] },
  { slug: "malvern", name: "Malvern", region: "the south-west", neighborSlugs: ["queensburgh", "chatsworth"] },
  { slug: "berea", name: "Berea", region: "central Durban", neighborSlugs: ["glenwood", "durban"] },
  { slug: "glenwood", name: "Glenwood", region: "central Durban", neighborSlugs: ["berea", "sherwood"] },
  { slug: "bluff", name: "Bluff", region: "the Bluff", neighborSlugs: ["montclair", "chatsworth"] },
  { slug: "chatsworth", name: "Chatsworth", region: "the south-west", neighborSlugs: ["malvern", "bluff"] },
  { slug: "mount-edgecombe", name: "Mount Edgecombe", region: "northern Durban", neighborSlugs: ["durban-north", "umhlanga"] },
  { slug: "reservoir-hills", name: "Reservoir Hills", region: "central Durban", neighborSlugs: ["sherwood", "durban-north"] },
  { slug: "sherwood", name: "Sherwood", region: "central Durban", neighborSlugs: ["glenwood", "reservoir-hills"] },
  { slug: "montclair", name: "Montclair", region: "the Bluff", neighborSlugs: ["bluff", "chatsworth"] },
];

export const serviceAreas = areas.map((a) => a.name);

// The 3 highest-search-volume services get a dedicated landing page per
// area (3 services x 18 areas = 54 pages). Maintenance and Sales stay as
// single service pages only.
export const landingServiceSlugs = [
  "domestic-repairs",
  "commercial-refrigeration",
  "cold-rooms-freezer-rooms",
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

export { blogPosts } from "./posts";
export type { BlogPost, BodyBlock } from "./posts";
