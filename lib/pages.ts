export type Photo = { src: string; alt: string; caption?: string };

export type PageFaq = { q: string; a: string };

export type BrandPage = {
  slug: string;
  name: string;
  logo?: string;
  summary: string;
  intro: string[];
  faultsHeading: string;
  faults: string[];
  note?: string;
  photos: Photo[];
  faq: PageFaq[];
};

export type IndustryPage = {
  slug: string;
  name: string;
  summary: string;
  intro: string[];
  equipmentHeading: string;
  equipment: string[];
  whatWeDo: string[];
  note?: string;
  photos: Photo[];
  faq: PageFaq[];
};

// Real figures from the owner, 6 Nov 2026.
export const pricing = {
  callout: "Call-out fees start from R250 and depend on your area.",
  minor: "Minor repairs typically cost between R350 and R950.",
  major: "Major repairs start from R1,250.",
  note: "We diagnose the fault first, so you know what is wrong and what it will cost before work starts.",
};

const j = (file: string) => `/images/jobs/${file}.jpg`;

export const brandPages: BrandPage[] = [
  {
    slug: "defy",
    name: "Defy",
    logo: "/images/brands/defy.jpg",
    summary:
      "Defy fridge and freezer repairs in Durban: compressors, evaporator and condenser fan motors, and gas leaks, fixed on site.",
    intro: [
      "Defy is one of the most common fridge brands in South African homes, and many of those fridges have been running for ten years or more. We repair Defy fridges, freezers and combination units across Durban, on site, so you do not have to move the fridge or wait days for it to come back.",
      "Most of our Defy call-outs come down to a short list of faults, listed below. Knowing which one you have is the difference between a repair that lasts and one that does not.",
    ],
    faultsHeading: "Faults we see on Defy fridges",
    faults: [
      "Compressor problems, including a compressor that will not start or has failed",
      "Evaporator fan motor failure, so the freezer stays cold but the fridge does not",
      "Condenser fan motor failure, so the fridge runs hot and cannot shed heat",
      "Internal gas leaks",
      "Faulty thermostats and temperature controls",
      "Ice build-up and water leaks from a blocked or failed defrost system",
    ],
    note:
      "A regas on a Defy with an internal gas leak does not repair the problem permanently. The gas escapes again. We find the leak and fix it, or tell you honestly if the fridge is no longer worth repairing.",
    photos: [
      { src: j("defy-fridge"), alt: "Defy fridge freezer with electronic control panel", caption: "A Defy fridge freezer we attended in Durban." },
      { src: j("defy-label"), alt: "Defy model label inside a fridge showing CFC free", caption: "The model label tells us the exact unit and refrigerant before we start." },
    ],
    faq: [
      {
        q: "Why is my Defy fridge not cooling but the freezer works?",
        a: "Usually the evaporator fan, the defrost system or the thermostat. If the freezer is cold, the compressor is normally fine, and the cold air is not reaching the fridge section.",
      },
      {
        q: "Is regassing a Defy fridge a permanent fix?",
        a: "No. If the gas has leaked out there is a leak in the sealed system, and topping up only delays the problem. The leak has to be found and repaired.",
      },
    ],
  },
  {
    slug: "kic",
    name: "KIC",
    logo: "/images/brands/kic.jpg",
    summary:
      "KIC fridge and freezer repairs in Durban: compressors, refrigerant blockages, internal leaks and corroded tubing, fixed on site.",
    intro: [
      "KIC fridges are found in homes, flats and small businesses all over Durban, and plenty of them are still going after many years. We repair KIC fridges and freezers on site and tell you plainly whether the repair makes sense.",
      "KIC units tend to show up with a particular set of faults, many of them linked to the sealed system, which is why a proper diagnosis matters more than a quick top-up.",
    ],
    faultsHeading: "Faults we see on KIC fridges",
    faults: [
      "Compressor problems",
      "Refrigerant blockages in the sealed system",
      "Internal refrigerant leaks",
      "Corrosion on the steel tubing",
      "Faulty thermostats",
      "Door seals that no longer close properly",
    ],
    note:
      "Corroded tubing and internal leaks are the cases where a repair may not be worth the cost. We will tell you before you spend money, and we will not push a repair that will not last.",
    photos: [
      { src: j("kic-label"), alt: "KIC model label on a KCG 300/2 fridge freezer", caption: "A KIC KCG 300/2 label. The model number helps us bring the right parts." },
    ],
    faq: [
      {
        q: "Is it worth repairing an old KIC fridge?",
        a: "It depends on the fault. A thermostat or a fan is a reasonable repair. Internal leaks or corroded tubing often are not. We will give you an honest answer after we have looked at it.",
      },
      {
        q: "Why does my KIC fridge stop cooling and then start again?",
        a: "That can point to a refrigerant blockage or a failing compressor start. It is worth having it looked at before it stops completely.",
      },
    ],
  },
  {
    slug: "samsung",
    name: "Samsung",
    logo: "/images/brands/samsung.jpg",
    summary:
      "Samsung fridge repairs in Durban: side-by-side and French door fridges, cooling faults, ice build-up and water leaks, fixed on site.",
    intro: [
      "Samsung fridges are often large, feature-packed side-by-side and French door models, with electronic controls and water or ice dispensers. When one stops cooling, you cannot easily move it, so we repair Samsung fridges where they stand.",
      "We start by finding out whether the fault is in the cooling system, the defrost system or the electronics, and then tell you what the repair involves.",
    ],
    faultsHeading: "What we repair on Samsung fridges",
    faults: [
      "Fridge or freezer not cooling",
      "Ice build-up from a failed defrost system",
      "Evaporator and condenser fan motor faults",
      "Water leaks, including from the dispenser and drain",
      "Ice maker and water dispenser problems",
      "Control board and temperature sensor faults",
      "Compressor and start-component problems",
    ],
    photos: [],
    faq: [
      {
        q: "Can you repair a Samsung side-by-side fridge at my home?",
        a: "Yes. We carry common parts and tools so most repairs are done on site in one visit.",
      },
      {
        q: "Why is my Samsung freezer iced up at the back?",
        a: "A thick layer of ice on the back wall usually means the defrost system has failed. Defrosting clears it for a while, but the faulty part has to be replaced for a lasting fix.",
      },
    ],
  },
  {
    slug: "lg",
    name: "LG",
    logo: "/images/brands/lg.jpg",
    summary:
      "LG fridge repairs in Durban: side-by-side fridges with ice and water dispensers, cooling faults, fans and compressors, fixed on site.",
    intro: [
      "LG fridges are popular in Durban homes, particularly the large side-by-side models with an ice and water dispenser. We repair LG fridges and freezers on site, and we work on the cooling system and the dispenser side of the fridge.",
      "If your LG is warm, noisy, leaking or iced up, we will find the fault and explain the repair before we start.",
    ],
    faultsHeading: "What we repair on LG fridges",
    faults: [
      "Fridge or freezer not cooling",
      "Compressor and inverter-related cooling faults",
      "Evaporator and condenser fan motor failures",
      "Excessive ice build-up",
      "Water leaks and blocked drains",
      "Water dispenser and ice maker problems",
      "Control board and sensor faults",
      "Strange noises from the back or the freezer",
    ],
    photos: [
      { src: j("lg-side-by-side"), alt: "LG side-by-side fridge freezer with ice and water dispenser", caption: "An LG side-by-side with a dispenser." },
      { src: j("lg-label"), alt: "LG refrigerator-freezer rating label", caption: "The rating label shows the model so we can source the right parts." },
    ],
    faq: [
      {
        q: "Do you repair LG side-by-side fridges?",
        a: "Yes. We repair LG side-by-side and French door fridges, including the dispenser and the cooling system.",
      },
      {
        q: "My LG fridge is making a loud noise. What is it?",
        a: "Often a fan touching ice or a failing fan motor. Sometimes the compressor. A technician can tell the difference by listening and checking the evaporator.",
      },
    ],
  },
  {
    slug: "hisense",
    name: "Hisense",
    summary:
      "Hisense fridge and freezer repairs in Durban: cooling faults, fans, defrost problems and compressors, fixed on site.",
    intro: [
      "Hisense has become a common sight in Durban kitchens, from compact bottom-freezer models to large side-by-side fridges. We repair Hisense fridges and freezers on site and tell you whether the repair makes sense for the age of the unit.",
      "Most Hisense faults we are called to fall into a few categories: cooling, defrost, fans or the compressor, so we check those first.",
    ],
    faultsHeading: "What we repair on Hisense fridges",
    faults: [
      "Fridge not cooling, or freezer not freezing",
      "Ice build-up and defrost problems",
      "Evaporator and condenser fan motors",
      "Water leaks",
      "Compressor and start-component faults",
      "Thermostat and sensor faults",
      "Strange noises",
    ],
    photos: [
      { src: j("hisense-label"), alt: "Hisense model label and wiring diagram inside a fridge", caption: "A Hisense label inside the fridge, with the model and wiring diagram." },
      { src: j("hisense-energy-label"), alt: "Hisense energy rating label on a fridge freezer", caption: "The energy label tells us the capacity and model we are working on." },
    ],
    faq: [
      {
        q: "Do you repair Hisense fridges?",
        a: "Yes, both household fridge freezers and larger side-by-side models.",
      },
      {
        q: "How do I know whether my Hisense fridge is worth repairing?",
        a: "Age, condition and the fault decide it. A fan, thermostat or defrost part is usually worth it. We will give you an honest view after diagnosing it.",
      },
    ],
  },
  {
    slug: "bosch",
    name: "Bosch",
    summary:
      "Bosch fridge and freezer repairs in Durban: cooling faults, defrost systems, electronic controls and compressors, fixed on site.",
    intro: [
      "Bosch fridges are built to last, and many of them are still running long after the warranty has ended. When a Bosch stops cooling, it is usually a part that has worn rather than the whole appliance, and worth repairing.",
      "We repair Bosch fridges and freezers on site in Durban. Many of these models use electronic controls and sensors, so we test the control side as well as the cooling system.",
    ],
    faultsHeading: "What we repair on Bosch fridges",
    faults: [
      "Fridge or freezer not cooling",
      "Defrost system faults and ice build-up",
      "Evaporator and condenser fans",
      "Temperature sensor and control faults",
      "Compressor and start-component problems",
      "Water leaks and blocked drains",
      "Door seal and hinge problems",
    ],
    photos: [],
    faq: [
      {
        q: "Are Bosch fridges worth repairing?",
        a: "Usually yes, if the fault is a fan, sensor, thermostat or defrost part. They are well built, and a repair often gives years of extra life.",
      },
      {
        q: "Do you repair built-in Bosch fridges?",
        a: "Yes. Call us with the model and what the fridge is doing, and we will tell you what to expect.",
      },
    ],
  },
  {
    slug: "aeg",
    name: "AEG",
    summary:
      "AEG fridge and freezer repairs in Durban: cooling faults, defrost problems, electronic controls and compressors, fixed on site.",
    intro: [
      "AEG fridges and freezers are premium appliances, so a breakdown deserves a proper diagnosis rather than a guess. We repair AEG units on site in Durban and explain the fault and the options before any work starts.",
      "Many AEG models have electronic controls and frost-free cooling, so we check the sensors, fans and defrost system alongside the compressor.",
    ],
    faultsHeading: "What we repair on AEG fridges",
    faults: [
      "Fridge or freezer not cooling",
      "Defrost faults and ice build-up",
      "Evaporator and condenser fan motors",
      "Control and temperature sensor faults",
      "Compressor and start-component problems",
      "Water leaks",
      "Strange noises",
    ],
    photos: [],
    faq: [
      {
        q: "Do you service AEG fridges and freezers?",
        a: "Yes. We repair AEG fridges and freezers, including frost-free models.",
      },
      {
        q: "Why is my AEG freezer iced up?",
        a: "Usually the defrost system has failed. Defrosting it clears the ice for a while, but the faulty part needs replacing.",
      },
    ],
  },
  {
    slug: "whirlpool",
    name: "Whirlpool",
    summary:
      "Whirlpool fridge and freezer repairs in Durban: upright freezers, fridge freezers, cooling faults and compressors, fixed on site.",
    intro: [
      "Whirlpool fridges and upright freezers are a regular part of our work in Durban. We repair them on site and carry the common parts, so many repairs are done in a single visit.",
      "If your Whirlpool is warm, iced up, noisy or running non-stop, we will diagnose the cause and give you a straight answer on the repair.",
    ],
    faultsHeading: "What we repair on Whirlpool fridges and freezers",
    faults: [
      "Fridge not cooling or freezer not freezing",
      "Upright freezer faults and temperature display problems",
      "Thermostat and control faults",
      "Evaporator and condenser fans",
      "Ice build-up and defrost problems",
      "Compressor and start-component faults",
      "Water leaks and strange noises",
    ],
    photos: [
      { src: j("whirlpool-freezer"), alt: "Whirlpool upright freezer with a temperature display", caption: "A Whirlpool upright freezer we attended." },
      { src: j("whirlpool-badge"), alt: "Whirlpool badge on a stainless steel fridge door", caption: "A Whirlpool fridge." },
    ],
    faq: [
      {
        q: "Do you repair Whirlpool upright freezers?",
        a: "Yes. We repair Whirlpool upright and chest freezers as well as fridge freezers.",
      },
      {
        q: "How long does a Whirlpool repair take?",
        a: "Most are done in a single visit if we carry the part. We will tell you after the diagnosis.",
      },
    ],
  },
  {
    slug: "fridgemaster",
    name: "Fridgemaster",
    summary:
      "Fridgemaster fridge and freezer repairs in Durban: cooling faults, thermostats, fans and compressors, fixed on site.",
    intro: [
      "Fridgemaster fridges and freezers are part of the range we repair in Durban. We look after them on site, whether the unit is in a home, a flat or a small business.",
      "We diagnose the fault first, explain what is wrong and what the repair will cost, and only then start work.",
    ],
    faultsHeading: "What we repair on Fridgemaster units",
    faults: [
      "Not cooling or not freezing",
      "Thermostat and temperature control faults",
      "Fan motor failures",
      "Ice build-up and water leaks",
      "Compressor and start-component faults",
      "Door seal problems",
      "Strange noises",
    ],
    photos: [
      { src: j("fridgemaster-logo"), alt: "Fridgemaster logo on a fridge door", caption: "A Fridgemaster fridge we attended." },
    ],
    faq: [
      {
        q: "Do you repair Fridgemaster fridges?",
        a: "Yes. Call us with the model and the problem and we will tell you what to expect.",
      },
      {
        q: "Can you repair a Fridgemaster fridge at my business?",
        a: "Yes. We repair domestic and commercial units on site.",
      },
    ],
  },
  {
    slug: "fridge-star",
    name: "Fridge Star",
    logo: "/images/brands/fridgestar.jpg",
    summary:
      "Fridge Star repairs in Durban: cooling faults, thermostats, fans and compressors, fixed on site.",
    intro: [
      "Fridge Star is one of the brands we repair in Durban. We look after Fridge Star fridges and freezers on site, and we tell you honestly whether a repair is worth doing.",
      "If your unit is warm, iced up, noisy or leaking, call us with what you are seeing and we will tell you the likely cause before we come out.",
    ],
    faultsHeading: "What we repair on Fridge Star units",
    faults: [
      "Not cooling or not freezing",
      "Thermostat and temperature control faults",
      "Fan motor failures",
      "Ice build-up and water leaks",
      "Compressor and start-component faults",
      "Gas leaks",
      "Door seal problems",
    ],
    photos: [],
    faq: [
      {
        q: "Do you repair Fridge Star fridges and freezers?",
        a: "Yes. We repair Fridge Star units on site in Durban.",
      },
      {
        q: "Can you repair it the same day?",
        a: "We aim to attend as quickly as we can. Call us with your area and we will arrange the earliest time.",
      },
    ],
  },
];

export const industryPages: IndustryPage[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    summary:
      "Commercial refrigeration repairs for restaurants in Durban: kitchen fridges, freezers, cold rooms and under-counter units, fixed fast.",
    intro: [
      "When a restaurant fridge or cold room fails, you lose stock and sometimes a whole service. We repair kitchen refrigeration for restaurants across Durban and work around your trading hours where we can.",
      "Keeping food at safe temperatures also matters for hygiene inspections, so a unit that struggles to hold temperature is worth looking at before it fails.",
    ],
    equipmentHeading: "Restaurant equipment we repair",
    equipment: [
      "Upright kitchen fridges and freezers",
      "Under-counter and prep fridges",
      "Walk-in cold rooms and freezer rooms",
      "Beverage and bottle coolers",
      "Display fridges and chillers",
    ],
    whatWeDo: [
      "Fast diagnosis and repair on site",
      "Temperature controller, fan and compressor repairs",
      "Preventative maintenance, to catch faults before service",
      "Honest advice when a unit is not worth repairing",
    ],
    photos: [
      { src: j("undercounter-fridge"), alt: "Stainless steel under-counter glass-door fridge in a kitchen", caption: "Under-counter prep fridges are the workhorses of a restaurant kitchen." },
    ],
    faq: [
      {
        q: "Can you attend outside trading hours?",
        a: "We work around your hours where we can. Call us and tell us when the kitchen is quietest.",
      },
      {
        q: "What should I do when my restaurant cold room stops cooling?",
        a: "Keep the door shut, move critical stock to a working unit and call us. We cover what to do in the first hour in our blog.",
      },
    ],
  },
  {
    slug: "bakeries",
    name: "Bakeries",
    summary:
      "Refrigeration repairs for bakeries in Durban: cold rooms, display fridges and freezers, fixed on site.",
    intro: [
      "Bakeries depend on cold rooms, display fridges and freezers to keep dough, dairy fillings, cream and finished products in good condition. We repair refrigeration for bakeries across Durban, and we already look after a Durban bakery.",
      "Early morning production leaves little room for a breakdown, so regular maintenance on the units you rely on most is worth it.",
    ],
    equipmentHeading: "Bakery equipment we repair",
    equipment: [
      "Walk-in cold rooms and freezer rooms",
      "Display fridges and cake chillers",
      "Upright fridges and freezers",
      "Under-counter fridges",
      "Dough and fillings storage fridges",
    ],
    whatWeDo: [
      "Cold room repairs and temperature controller replacement",
      "Compressor, fan and defrost system repairs",
      "Scheduled maintenance",
      "Advice on repair versus replacement",
    ],
    photos: [
      { src: j("evaporator-coldroom"), alt: "Cold room evaporator unit with two fans and a defrost thermostat", caption: "Cold room evaporators need to be clean and defrosting properly to hold temperature." },
    ],
    faq: [
      {
        q: "My bakery cold room is warm in the morning. What could it be?",
        a: "Often a failed fan, a blocked evaporator or a controller fault. We check all three on site.",
      },
      {
        q: "Do you do maintenance contracts?",
        a: "We offer scheduled maintenance. Call us to talk through what your equipment needs.",
      },
    ],
  },
  {
    slug: "butcheries",
    name: "Butcheries",
    summary:
      "Refrigeration repairs for butcheries in Durban: cold rooms, meat display fridges and freezers, fixed on site.",
    intro: [
      "A butchery stands or falls on its cold chain. A cold room that drifts a few degrees warm can cost a day's stock, so butcheries need refrigeration that is checked and repaired quickly.",
      "We repair cold rooms, meat display units and freezers for butcheries across Durban, and we can set up regular maintenance to catch problems early.",
    ],
    equipmentHeading: "Butchery equipment we repair",
    equipment: [
      "Walk-in cold rooms and freezer rooms",
      "Meat and deli display fridges",
      "Upright freezers and chest freezers",
      "Under-counter fridges",
      "Maturing and storage units",
    ],
    whatWeDo: [
      "Fast response when stock is at risk",
      "Cold room and display unit repairs",
      "Temperature controller and thermostat replacement",
      "Refrigerant leak detection and maintenance",
    ],
    photos: [
      { src: j("evaporator-twin-fan"), alt: "Twin-fan evaporator unit inside a cold room", caption: "A cold room evaporator with twin fans." },
    ],
    faq: [
      {
        q: "How fast can you reach a butchery with a failed cold room?",
        a: "We aim to attend as quickly as possible. Call us directly and tell us it is urgent.",
      },
      {
        q: "Can you service my display fridges and cold room together?",
        a: "Yes. We can service the whole shop's refrigeration in one visit.",
      },
    ],
  },
  {
    slug: "coffee-shops",
    name: "Coffee Shops",
    summary:
      "Refrigeration repairs for coffee shops in Durban: display fridges, under-counter units and milk fridges, fixed on site.",
    intro: [
      "Coffee shops live on cold milk, cakes and drinks. When the under-counter fridge or display chiller fails during a morning rush, it is felt immediately. We repair refrigeration for coffee shops across Durban, and we already look after a Durban coffee shop.",
      "Small units work hard in a warm space behind a counter, so a simple clean of the coils and a check of the seals can keep them running.",
    ],
    equipmentHeading: "Coffee shop equipment we repair",
    equipment: [
      "Under-counter milk and prep fridges",
      "Cake and pastry display chillers",
      "Beverage and bottle coolers",
      "Upright fridges and freezers",
      "Ice storage and small freezers",
    ],
    whatWeDo: [
      "On-site repairs with minimal disruption",
      "Coil cleaning and seal checks",
      "Thermostat and controller replacement",
      "Advice on repair versus replacement",
    ],
    photos: [
      { src: j("undercounter-display"), alt: "Glass-door under-counter display fridge in a counter", caption: "Under-counter units in a coffee shop counter." },
    ],
    faq: [
      {
        q: "Why does my milk fridge keep warming up?",
        a: "Often a dirty condenser, worn door seal or failing thermostat. We check all three.",
      },
      {
        q: "Do you repair display chillers?",
        a: "Yes. We repair glass-door display fridges and chillers.",
      },
    ],
  },
  {
    slug: "bars-and-pubs",
    name: "Bars and Pubs",
    summary:
      "Refrigeration repairs for bars and pubs in Durban: bottle coolers, back-bar fridges and cold rooms, fixed on site.",
    intro: [
      "Warm drinks lose sales on the spot. Bars and pubs rely on bottle coolers, back-bar fridges and sometimes a cold room, and they work hard in busy hours. We repair them across Durban and can attend outside peak trading hours where we can.",
      "Bottle coolers run in hot, crowded spaces and are opened constantly, so seals, fans and coils wear quickly. Regular servicing helps.",
    ],
    equipmentHeading: "Bar and pub equipment we repair",
    equipment: [
      "Back-bar and under-counter bottle coolers",
      "Multi-door beverage coolers",
      "Beer and wine coolers",
      "Cold rooms and keg storage",
      "Upright freezers and ice storage",
    ],
    whatWeDo: [
      "Repairs that get drinks cold again quickly",
      "Fan, thermostat and compressor repairs",
      "Door seal replacement",
      "Maintenance before busy seasons",
    ],
    photos: [
      { src: j("bar-fridge"), alt: "Three-door glass bar fridge under a bar counter", caption: "A back-bar bottle cooler." },
      { src: j("wine-cooler"), alt: "Wine cooler with wooden shelves and a digital display", caption: "Wine coolers need accurate temperature control." },
    ],
    faq: [
      {
        q: "My bar fridge is running but the drinks are warm. What is wrong?",
        a: "A dirty condenser, a failed fan or a leaking seal are common. We check these first.",
      },
      {
        q: "Can you service our coolers before summer?",
        a: "Yes. A service before the busy season catches faults before they cost you sales.",
      },
    ],
  },
  {
    slug: "supermarkets-and-spaza-shops",
    name: "Supermarkets and Spaza Shops",
    summary:
      "Refrigeration repairs for supermarkets, spaza shops and tuck shops in Durban: display fridges, drink coolers and freezers.",
    intro: [
      "For a shop, the display fridge is the product. A cooldrink fridge that is warm or a freezer that has defrosted means lost sales and lost stock. We repair display fridges, drink coolers and freezers for supermarkets, spaza shops and tuck shops across Durban.",
      "Shop fridges are open and closed all day, so seals, fans and condensers wear out quickly. Keeping them clean and checked protects both the stock and your electricity bill.",
    ],
    equipmentHeading: "Shop equipment we repair",
    equipment: [
      "Glass-door display fridges",
      "Cooldrink and beverage coolers",
      "Chest freezers and upright freezers",
      "Meat and deli display units",
      "Cold rooms and storage fridges",
    ],
    whatWeDo: [
      "On-site repair of display fridges and coolers",
      "Compressor, fan and thermostat replacement",
      "Door seal replacement",
      "Maintenance to catch faults early",
    ],
    photos: [
      { src: j("display-fridge-drinks"), alt: "Double-door glass display fridge stocked with cold drinks", caption: "A double-door drinks display fridge." },
      { src: j("display-fridge-glass"), alt: "Double-door glass display fridge with groceries inside", caption: "A glass-door display fridge." },
    ],
    faq: [
      {
        q: "My shop's drinks fridge is not cold. Can you come out?",
        a: "Yes. Call us with your suburb and what the fridge is doing and we will arrange a visit.",
      },
      {
        q: "Do you also sell or buy used display fridges?",
        a: "Yes. We buy and sell used fridges, and we can advise whether to repair or replace.",
      },
    ],
  },
  {
    slug: "petrol-station-shops",
    name: "Petrol Station Shops",
    summary:
      "Refrigeration repairs for petrol-station convenience shops in Durban: drink coolers, display fridges and freezers.",
    intro: [
      "Petrol-station shops trade long hours and depend on cold drinks, dairy and ice. We repair drink coolers, display fridges and freezers for petrol-station shops across Durban, and we already service forecourt shops.",
      "Because these shops are open for long hours, a unit that runs constantly has little rest. Regular maintenance helps it last.",
    ],
    equipmentHeading: "Forecourt shop equipment we repair",
    equipment: [
      "Multi-door cold drink coolers",
      "Dairy and sandwich display fridges",
      "Chest and upright freezers",
      "Ice storage freezers",
      "Under-counter fridges",
    ],
    whatWeDo: [
      "Fast on-site repairs to keep you trading",
      "Controller, fan and compressor repairs",
      "Condenser cleaning and seal checks",
      "Scheduled maintenance",
    ],
    photos: [
      { src: j("display-fridge-drinks"), alt: "Double-door glass drinks fridge with cold drinks", caption: "A drinks cooler of the type found in forecourt shops." },
    ],
    faq: [
      {
        q: "Do you work on drink coolers with digital controllers?",
        a: "Yes. We repair controllers and replace them when they fail.",
      },
      {
        q: "Can you come out after hours?",
        a: "Call us and tell us the situation. We will do what we can to attend when it suits the shop.",
      },
    ],
  },
  {
    slug: "schools-and-sports-clubs",
    name: "Schools and Sports Clubs",
    summary:
      "Refrigeration repairs for schools, sports clubs and bowling clubs in Durban: kitchen fridges, bar coolers and cold rooms.",
    intro: [
      "School kitchens and club bars rely on fridges and cold rooms that often run for years on little more than a yearly look. We repair refrigeration for schools and sports clubs in Durban, and we already look after a Durban school and a bowling club.",
      "Because these places run to a calendar of term times and events, a planned service before a busy period is far better than an emergency call-out in the middle of one.",
    ],
    equipmentHeading: "School and club equipment we repair",
    equipment: [
      "Kitchen fridges, freezers and cold rooms",
      "Bar and beverage coolers",
      "Under-counter and display fridges",
      "Chest freezers for bulk storage",
      "Ice storage and small freezers",
    ],
    whatWeDo: [
      "Repairs on site, without moving equipment",
      "Planned servicing before events and term time",
      "Fan, compressor and thermostat repairs",
      "Honest advice on repair versus replacement",
    ],
    photos: [
      { src: j("chest-freezer"), alt: "Small white chest freezer", caption: "Chest freezers are common in school and club kitchens." },
    ],
    faq: [
      {
        q: "Can you service our fridges before term starts?",
        a: "Yes. A service before term catches faults before they stop the kitchen.",
      },
      {
        q: "Do you repair bar coolers for clubs?",
        a: "Yes. We repair bar and beverage coolers as well as kitchen units.",
      },
    ],
  },
  {
    slug: "hotels-and-guest-houses",
    name: "Hotels and Guest Houses",
    summary:
      "Refrigeration repairs for hotels, guest houses and lodges in Durban: kitchen cold rooms, minibars, bar fridges and freezers.",
    intro: [
      "A hotel or guest house runs refrigeration in several places: the kitchen, the bar, the breakfast room and sometimes the rooms. When one fails, guests notice. We repair refrigeration for hotels, guest houses and lodges across Durban.",
      "We can service several units in one visit, which keeps disruption to a minimum.",
    ],
    equipmentHeading: "Hotel and guest-house equipment we repair",
    equipment: [
      "Kitchen cold rooms and freezer rooms",
      "Upright kitchen fridges and freezers",
      "Bar fridges and beverage coolers",
      "Breakfast and display fridges",
      "Wine coolers",
    ],
    whatWeDo: [
      "Multi-unit servicing in a single visit",
      "Cold room and kitchen fridge repairs",
      "Temperature controller and fan repairs",
      "Preventative maintenance schedules",
    ],
    photos: [
      { src: j("condensing-unit-wall"), alt: "Wall-mounted condensing unit for a cold room", caption: "The condensing unit outside a cold room." },
    ],
    faq: [
      {
        q: "Can you service the kitchen and bar fridges in one visit?",
        a: "Yes. We can inspect and service several units in one visit.",
      },
      {
        q: "Do you repair wine coolers?",
        a: "Yes. We repair wine coolers and bar fridges.",
      },
    ],
  },
  {
    slug: "caterers",
    name: "Caterers",
    summary:
      "Refrigeration repairs for caterers in Durban: cold rooms, chillers, mobile fridges and freezers, fixed on site.",
    intro: [
      "Caterers cannot afford a fridge failure the day before an event. We repair cold rooms, upright fridges, chillers and mobile refrigeration for catering businesses across Durban, so your stock stays safe and your events go ahead.",
      "Catering equipment is often moved, loaded and unloaded, which puts extra strain on seals, hinges and fans. We check these as part of every visit.",
    ],
    equipmentHeading: "Catering equipment we repair",
    equipment: [
      "Walk-in cold rooms and freezer rooms",
      "Upright fridges and freezers",
      "Mobile fridge and freezer units",
      "Under-counter and prep fridges",
      "Beverage and bottle coolers",
    ],
    whatWeDo: [
      "Urgent repairs before events",
      "Mobile fridge unit repairs",
      "Compressor, fan and controller repairs",
      "Scheduled maintenance",
    ],
    photos: [
      { src: j("gas-and-tools"), alt: "Refrigerant gas cylinder, copper pipe and gauges in the back of a service vehicle", caption: "Our service vehicle carries gas, pipe and gauges so most jobs are finished on site." },
    ],
    faq: [
      {
        q: "Can you repair mobile fridge units?",
        a: "Yes. We repair mobile fridge units and delivery-vehicle refrigeration.",
      },
      {
        q: "What if the fridge fails the day before an event?",
        a: "Call us as early as you can. We will do what we can to attend quickly.",
      },
    ],
  },
];

export const brandBySlug = (slug: string) => brandPages.find((b) => b.slug === slug);
export const industryBySlug = (slug: string) => industryPages.find((i) => i.slug === slug);
