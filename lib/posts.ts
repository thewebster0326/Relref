export type BodyBlock =
  | string
  | { image: string; alt: string; caption?: string }
  | { list: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  body: BodyBlock[];
};

const img = (src: string, alt: string, caption?: string) => ({ image: src, alt, caption });
const ul = (...items: string[]) => ({ list: items });
const g = (file: string) => `/images/gallery/${file}`;

// Headings: a string starting with "## " renders as a section heading.
// **bold** inside any string renders as bold.
export const blogPosts: BlogPost[] = [
  {
    slug: "signs-your-fridge-compressor-is-failing",
    title: "5 signs your fridge compressor is failing",
    date: "2026-06-02",
    readMinutes: 6,
    excerpt:
      "The compressor is the heart of your fridge. Here's what to watch and listen for before it fails completely.",
    image: g("domestic-fridge-1.jpg"),
    imageAlt: "Household fridge freezer with water dispenser",
    body: [
      "The compressor is the heart of any fridge or freezer. It is the pump that moves refrigerant around the sealed system and pulls heat out of the cabinet. When it starts to fail, it rarely happens overnight. Most of the time the fridge gives you weeks of warning, and the people who catch those warnings early usually save themselves a lot of money and a lot of spoiled food.",
      "Here is what a failing compressor tends to look, sound and feel like, and what you should do about it.",
      "## 1. It is louder than it used to be",
      "A healthy compressor produces a low, steady hum and then goes quiet when the cycle ends. If you start hearing knocking, rattling, loud buzzing or a harsh grinding sound, something inside is wearing out. Internal bearings, valves and mounting springs all age with use. Do not confuse this with a loose drip tray or a fan blade touching ice, which can make similar noises but are cheaper fixes. A technician can tell the difference in a few minutes by listening at the back of the unit.",
      "## 2. It never seems to switch off",
      "Compressors cycle on and off to hold temperature. In normal conditions a domestic fridge runs for roughly a third to half of the time, depending on the room temperature and how often the doors are opened. If yours runs almost constantly, the system is struggling to remove heat. That could point to a weakening compressor, but it can also be a dirty condenser coil, a failing door seal or low refrigerant, so it is worth having the cause confirmed before anyone talks about replacing parts.",
      img(
        g("domestic-fridge.jpg"),
        "Side-by-side fridge freezer with doors open",
        "Check the door seals and clear the vents first. They are the cheapest causes of a fridge that runs non-stop."
      ),
      "## 3. The back or sides feel very hot",
      "Some warmth around the back panel and the condenser is normal, because the fridge is rejecting heat there. What is not normal is a compressor housing that is too hot to keep your hand on, or a cabinet that radiates heat from the sides. A compressor that is overheating is working against high pressure, a restriction or worn internals, and it will not last long in that state.",
      "## 4. Food is not staying cold",
      "This one is easy to miss because it creeps up on you. Milk turns a day or two sooner than it used to. Ice cream is soft at the edges. Vegetables wilt or freeze in odd places. Put a cheap fridge thermometer on the middle shelf. A fridge should hold roughly 3 to 5 degrees Celsius and a freezer minus 18 or colder. If your readings are drifting higher and the settings have not changed, the cooling capacity is dropping.",
      "## 5. It will not start, or it clicks and stops",
      "A fridge that clicks every few minutes but never settles into a running hum is often telling you the compressor is trying to start and failing. Sometimes the culprit is just the small start relay or overload protector, which is an inexpensive part. Other times the compressor itself has seized. Either way, keep unplugging and replugging to a minimum. Repeated start attempts stress the motor and can make a repairable fault into an expensive one.",
      "## What to do when you spot these signs",
      ul(
        "Move perishable food into a cooler with ice packs if the fridge temperature is climbing.",
        "Pull the fridge a little away from the wall and check that the condenser coil and airflow are not blocked by dust.",
        "Make sure the door seals close tightly on a sheet of paper.",
        "Write down what you hear, when it happens and how the unit behaves, because it helps the diagnosis.",
        "Call a technician before the fridge stops completely. A repair done early is almost always cheaper."
      ),
      "## Repair or replace?",
      "A compressor replacement on a modern household fridge is a sealed-system repair, which means it needs proper tools, a vacuum pump and refrigerant handling. It is worth doing on a good quality fridge that is still in decent condition. On an old, cheap or heavily corroded unit, the money may be better spent on a replacement. A straightforward quote and an honest opinion on both options is what you should expect from any technician you hire.",
      "We diagnose and repair household and commercial fridges on-site across Durban and the surrounding area. If your fridge is showing two or more of the signs above, call us before it fails on a weekend with a full fridge of food."
    ],
  },
  {
    slug: "why-is-my-walk-in-cooler-icing-up",
    title: "Why is my restaurant walk-in cooler icing up?",
    date: "2026-06-20",
    readMinutes: 7,
    excerpt:
      "Ice building up inside a commercial cooler is never just cosmetic. Here's what's usually behind it and how to stop it coming back.",
    image: g("coldroom.jpg"),
    imageAlt: "Inside an insulated walk-in cold room with evaporator units on the ceiling",
    imageFit: "cover",
    body: [
      "A layer of frost or a solid sheet of ice on the evaporator, the ceiling or the floor of a walk-in cooler is one of the most common call-outs we get from restaurants, bakeries and butcheries. It is never just cosmetic. Ice is a sign that the system is not defrosting properly or that moisture is getting in where it should not. Left alone, it restricts airflow, pushes your temperatures up, drives the compressor harder and eventually gives you a very expensive breakdown on the busiest day of the week.",
      "Here are the causes we see most often, roughly in order of how common they are.",
      "## 1. A failed defrost system",
      "Every cooler evaporator collects frost during normal running, because the coil is colder than the freezing point of the water vapour in the room. To clear it, the system runs a defrost cycle on a schedule. Depending on the design that is done by an electric heater, hot gas, or simply by letting the compressor stop long enough for the air to melt the frost (the off-cycle method used in higher temperature rooms).",
      "If the defrost timer, the heater element, the termination thermostat or the controller fails, the frost never fully clears. Each cycle adds a bit more, until the coil becomes a block of ice. You will notice the cooler struggling to hold temperature, and often water pooling on the floor when it eventually melts.",
      img(
        g("commercial-freezer.jpg"),
        "Stainless steel upright commercial freezer",
        "Upright units and walk-in rooms both depend on a working defrost cycle."
      ),
      "## 2. Door seals and door habits",
      "Warm, humid kitchen air is the fuel for ice. Every time the door is propped open, or the gasket is torn or no longer sealing, moist air enters, meets the cold coil and freezes. Check the gasket along the full perimeter, especially the bottom corners. Look for light showing through when the door is closed, or tears and hardened sections. Strip curtains and a door closer help a lot in busy kitchens, and so does training staff to close the door every time.",
      "## 3. Blocked airflow",
      "The evaporator fan needs space to move air. Boxes stacked against the coil, crates on the floor under the unit or cling film hanging over the fan guard all reduce airflow. Less airflow means the coil runs colder than it should and frosts faster. Keep a clear gap of around a hand's width or more between stock and the evaporator, and never stack product directly beneath the unit.",
      "## 4. Low refrigerant or a leak",
      "When refrigerant leaks out slowly, the pressure on the low side falls and so does the evaporating temperature. The coil can run well below freezing even in a cooler, and starts to ice from the start of the coil. The ice often appears in a pattern, with the first section frosted and the rest bare. A leak needs to be found and repaired, not just topped up. Topping up without fixing the leak wastes money and, with some refrigerants, breaks environmental rules.",
      "## 5. Drain line problems",
      "Defrost water has to leave the room. If the drain line is blocked, kinked or has no heat trace in a freezer room, the water freezes in the pipe and backs up into the drain pan. That makes a thick ice block under the evaporator, which blocks the airflow even further. This is especially common in freezer rooms where the drain line runs through a cold area.",
      "## 6. Product and temperature settings",
      "Putting hot food into the cooler adds a big load of moisture. So does leaving uncovered liquids or open produce. Set a rule that cooked food is cooled and covered before it goes in, and that the cooler is not used as a place to cool large quantities of hot product at the start of the day.",
      "## What you can safely do yourself",
      ul(
        "Check door seals, hinges and the door closer.",
        "Clear stock away from the evaporator and keep floors tidy.",
        "Do not chip ice with a screwdriver or knife. Evaporator coil tubes are thin and easily punctured, which turns an ice problem into a refrigerant leak.",
        "Keep a simple temperature log. It helps spot a trend before the cooler fails.",
        "Move stock to a working fridge if the room temperature climbs above 5 degrees Celsius."
      ),
      "## When to call a technician",
      "If the ice comes back within a day or two of clearing it, or the coil is frosted solid, the underlying fault needs fixing. A technician will check the defrost controls and heater, measure refrigerant pressures, look for leaks, test fan motors and trace the drain line. Do it sooner rather than later. A defrost fault that costs a small repair today can end up as a compressor replacement in a month.",
      "We repair and service restaurant and bakery coolers, freezer rooms and display units across Durban and surrounding suburbs. Call us if your cooler is icing up and we will get to the cause."
    ],
  },
  {
    slug: "flammable-refrigerants-what-it-means-for-you",
    title: "Modern refrigerants can be flammable: what that means for you",
    date: "2026-07-08",
    readMinutes: 6,
    excerpt:
      "Newer, more efficient refrigerants like R290 come with real handling requirements. Here's the plain-language version.",
    image: g("cooldrink-fridge.jpg"),
    imageAlt: "Glass door beverage cooler",
    body: [
      "If you have bought a fridge, freezer, display cooler or air conditioner in the last few years, there is a good chance it uses a newer refrigerant such as R290 (propane) or R600a (isobutane) rather than the older gases most technicians grew up with. These newer refrigerants are more energy efficient and far better for the environment. They are also flammable, and that changes how the equipment needs to be serviced.",
      "This is not a reason to worry about the appliance in your kitchen or shop. It is a reason to choose your technician carefully.",
      "## Why manufacturers switched",
      "Older refrigerants such as R12, R134a and R404A were developed for performance and safety, but many have a high global warming potential. A kilogram of R404A has thousands of times the climate impact of a kilogram of carbon dioxide. Hydrocarbon refrigerants like R290 and R600a have a tiny fraction of that impact and work very efficiently, so they have become the standard for new domestic fridges and many commercial display coolers worldwide.",
      img(
        g("cooler.jpg"),
        "Refrigerated deli and meat display counter",
        "Self-contained display units are one of the places hydrocarbon refrigerants are now common."
      ),
      "## Why 'flammable' is not as scary as it sounds",
      "Hydrocarbon systems hold a small, carefully limited charge. The amount of refrigerant in a domestic fridge is typically measured in tens of grams, and equipment is designed with sealed electrical components so that sparks cannot reach any leaked gas. In normal use these appliances are very safe. The risk appears when someone who does not know what they are doing opens up the sealed system.",
      "## What changes for repairs",
      ul(
        "Brazing and open flames are dangerous near hydrocarbon refrigerant, so recovery and purging must be done properly before any heat is applied.",
        "Only spark-safe tools and recovery equipment suited to flammable gases should be used.",
        "The work area needs good ventilation, and leak detectors must be rated for hydrocarbons.",
        "Cylinders and charge quantities must be handled according to the equipment's data plate.",
        "Mixing refrigerants or using the wrong gas in a system is dangerous and can damage the compressor."
      ),
      "A technician working on these systems needs training for it, and the vehicle, tools and insurance need to match. This is also why you should be wary of cheap, unlicensed repairers who quote a quick 'regas'. If a system uses a hydrocarbon refrigerant, regassing it is not a casual job.",
      "## What it means for insurance",
      "Because of the extra risk, a business servicing flammable refrigerants should hold cover that reflects it. If something goes wrong on your premises, it matters a great deal whether the contractor was trained and insured for the gas in the system. It is reasonable to ask any contractor about both before they start.",
      "## Questions to ask your technician",
      ul(
        "Are you trained and equipped to work on flammable refrigerants?",
        "What refrigerant does my unit use, and how will you handle it?",
        "Are you insured for this type of work?",
        "Will you find and fix a leak rather than just topping up the gas?"
      ),
      "## What you do not need to do",
      "You do not need to replace a perfectly good appliance or avoid buying new ones. Keep the unit ventilated, do not store flammable liquids against it, do not use sharp tools to remove ice and call a professional when something is wrong. That is all.",
      "We are trained and insured to work on modern refrigerants, and we will tell you what a system contains before we touch it. If you are unsure what gas your fridge or cooler uses, the data plate inside the cabinet or on the back will say."
    ],
  },
  {
    slug: "fridge-not-cooling-but-freezer-works",
    title: "Fridge not cooling but the freezer works? Here's why",
    date: "2026-07-22",
    readMinutes: 7,
    excerpt:
      "When the freezer is rock hard but the fridge section is warm, the cold air is not getting where it needs to go. These are the usual suspects.",
    image: g("domestic-fridge.jpg"),
    imageAlt: "Side-by-side fridge freezer with both doors open",
    body: [
      "It is one of the most common fridge complaints we hear: the freezer is working perfectly, ice cream is solid, but the fridge section is lukewarm and the milk is going off. The good news is that this particular symptom often points to a fixable cause, because it means the cooling system itself is working. The cold is just not being shared properly.",
      "## How a frost-free fridge shares its cold",
      "Most modern frost-free fridge freezers have one evaporator coil, which sits behind a panel in the freezer compartment. A fan pulls air across that icy coil and blows some of it into the freezer. A small amount is directed through a vent or an adjustable flap (called a damper) into the fridge section. When the fridge reaches the right temperature, the damper closes. If anything interrupts that airflow, the freezer stays cold but the fridge warms up.",
      "## 1. Ice has blocked the evaporator or the air vents",
      "The frost-free system melts the evaporator's frost with a heater at intervals. If the defrost heater, thermostat or control board fails, frost builds up on the coil until air can barely pass through it. The freezer, which is next to the coil, can still get cold. The fridge, which depends on air moving through ducts, does not.",
      "A quick test is to look inside the freezer. If you remove the back panel and see a thick, solid layer of ice over the coil, the defrost system has failed. Do not scrape it off. Turning the fridge off and leaving the doors open for around 24 hours to melt everything will usually restore cooling for a few days, which also confirms the diagnosis. The ice will return until the defrost fault is repaired.",
      img(
        g("domestic-fridge-1.jpg"),
        "Bottom-freezer fridge with a water dispenser on the door",
        "Water dispensers and ice makers add extra water lines and drains that can freeze and block airflow."
      ),
      "## 2. A failed evaporator fan",
      "If the fan behind the freezer wall stops, there is no airflow to move cold into the fridge. You may hear nothing at all behind the panel, or a squeal and a rattle just before it dies. Open the freezer door and press the door switch. In many models the fan should spin, and you will hear it. A silent freezer with a warm fridge and cold freezer walls is a strong sign of a seized or burnt-out fan motor.",
      "## 3. A stuck damper or air baffle",
      "The damper is a small flap, often motor driven, that controls how much cold air enters the fridge. It can jam open or closed with ice, dirt or a broken gear. If it sticks closed, the fridge never receives cold air. If the damper heater has failed, moisture freezes in it and it sticks. This is usually a cheap part but needs correct fitting.",
      "## 4. Blocked vents inside the fridge",
      "Check the vents on the back wall of the fridge. Food, containers or a loaded shelf can seal them off completely. Leave a few centimetres of gap, and do not push packaging up against the vent grille. Overstuffing the fridge reduces air circulation and gives uneven cooling even when everything else is working.",
      "## 5. A temperature sensor or control board fault",
      "Sensors (thermistors) tell the control board how warm each compartment is. If the fridge sensor fails or reads incorrectly, the board might think the fridge is cold enough and shut off the airflow. Similarly, a faulty main board may stop commanding the fan or damper. These faults can be confusing, because everything seems to run normally while the fridge simply never cools.",
      "## 6. Door seals and loading habits",
      "A worn door gasket leaks warm air into the fridge and the damper cannot keep up. Frequent door opening, warm leftovers and a very warm kitchen all add to the load. Try the paper test: close a sheet of paper in the door and see if it pulls out easily at any point around the gasket.",
      "## What you can try before calling someone",
      ul(
        "Check that the temperature settings have not been bumped.",
        "Clear the vents inside the fridge and freezer and avoid overloading the shelves.",
        "Look for ice on the freezer back panel and drain area.",
        "Listen for the fan when the freezer door is opened.",
        "Clean dust off the condenser coil and make sure there is a gap behind the fridge.",
        "Defrost by switching it off for 24 hours if you see heavy ice. If cooling returns for a while, tell the technician."
      ),
      "## When to call for help",
      "If the problem returns after defrosting, or there is no fan sound, or you hear clicking from the back, it is time for a proper diagnosis. A technician can test the heater, thermostat, fan and sensors with a meter, usually in a single visit, and carry the most common parts on the van. We repair household fridge freezers of all major brands on-site across Durban and the surrounding area."
    ],
  },
  {
    slug: "load-shedding-and-your-fridge",
    title: "Load shedding and your fridge: how to protect your food and your compressor",
    date: "2026-08-05",
    readMinutes: 7,
    excerpt:
      "Power cuts are hard on food and on compressors. Here is how long food is safe, and the simple habits that prevent damage.",
    image: g("h-freezer.jpg"),
    imageAlt: "Chest freezer with the lid open",
    body: [
      "Anyone living in South Africa knows the routine. The lights go out, the kettle goes cold and your first thought is the fridge. Power cuts, whether scheduled or sudden, are hard on food and can also shorten the life of your fridge and freezer if you are not careful. The good news is that a few simple habits make a big difference.",
      "## How long does food stay safe?",
      "The general food safety guidance is that an unopened fridge keeps food cold enough for about four hours. A full, unopened freezer holds its temperature for roughly 48 hours, and a half-full one for around 24. These are rough numbers. They depend on how full the unit is, how warm your kitchen is and how well the doors seal.",
      ul(
        "Keep the doors closed. Every opening lets cold air out and warm air in.",
        "A full freezer stays cold much longer than a half-empty one, because frozen items act like ice blocks.",
        "Chest freezers hold cold better than uprights, because cold air is heavy and stays inside when you lift the lid.",
        "Discard perishable food such as meat, dairy, eggs and cooked leftovers that have been above 5 degrees Celsius for more than about four hours.",
        "Food in the freezer that still has ice crystals on it, or feels as cold as if it were in a fridge, can generally be refrozen, though the quality may suffer."
      ),
      img(
        g("Freezer.jpg"),
        "Portable chest freezer with twin lids",
        "Chest freezers keep their cold for a long time because cold air stays in when the lid is opened."
      ),
      "## Prepare before the outage",
      ul(
        "Fill empty space in the freezer with bottles of frozen water. They stabilise the temperature and give you ice for a cooler.",
        "Keep a spare cooler box and ice packs ready for essential items.",
        "Put a cheap fridge thermometer on the middle shelf so you know what temperature the food has reached.",
        "Group food together in the freezer. A tightly packed freezer holds its cold better."
      ),
      "## Why power coming back can hurt your compressor",
      "The moment the power returns is where fridges are most at risk. When a compressor stops, the refrigerant pressures inside the sealed system are still high on one side. If power returns and the compressor tries to start straight away against that pressure, it draws a huge starting current and may stall, trip the overload or burn out the start relay. Many modern fridges have a built-in delay of a few minutes. Older ones do not.",
      "Power returns can also come with surges and spikes, which damage control boards, especially on newer inverter fridges that have sensitive electronics.",
      "## Protecting the fridge",
      ul(
        "Use a surge protector with a built-in time delay made for fridges and freezers. It holds the power back for a few minutes after the supply returns and blocks spikes.",
        "If there is no protector, unplug the fridge at the wall during outages and plug it back in a few minutes after the power has stabilised.",
        "If you use an inverter or a UPS, check that it is rated for the starting surge of the compressor, which can be several times the running current. A pure sine wave inverter is kinder to compressors and electronic boards than a modified sine wave unit.",
        "Do not keep switching the fridge on and off repeatedly. Wait a few minutes between restart attempts."
      ),
      "## Signs the outage damaged your fridge",
      "After a power event, watch for a fridge that runs constantly, does not reach its normal temperature, clicks and stops, or does not start at all. Display panels that stay blank, error codes on the display or a fridge that keeps resetting often mean a board or sensor has been damaged by a surge. These faults are easier and cheaper to fix when addressed quickly.",
      "## For businesses",
      "If you run a restaurant, shop or bakery, a power cut has legal and food safety consequences. Keep a temperature record, know your backup plan, and discard food that has been out of temperature for too long. A properly sized generator or inverter, wired in by a qualified electrician, protects both your stock and your equipment. Ask us if you need to know how much power your compressors need to restart.",
      "If your fridge or freezer is not behaving after a power cut, give us a call. We repair household and commercial refrigeration across Durban and surrounding suburbs, and we will tell you plainly whether it is a quick fix or a bigger problem."
    ],
  },
  {
    slug: "why-is-my-fridge-leaking-water",
    title: "Why is my fridge leaking water onto the floor?",
    date: "2026-08-14",
    readMinutes: 6,
    excerpt:
      "A puddle under the fridge is usually a blocked drain, a loose pipe or a worn seal. Here is how to tell which one you have.",
    image: g("domestic-fridge-1.jpg"),
    imageAlt: "Household fridge with a water dispenser",
    body: [
      "Finding a puddle under your fridge is annoying and a little worrying, especially on a wooden or tiled floor. The good news is that in most cases it is not a sign that the fridge is about to die. It is usually a drainage or water supply problem, and many of them are simple to fix.",
      "## 1. A blocked defrost drain",
      "This is the most common cause by far. A frost-free fridge periodically melts the frost off its evaporator. The meltwater runs down a small drain tube to a tray at the bottom of the fridge, where it evaporates. If the drain gets blocked by food particles, dirt or ice, the water backs up, overflows inside the fridge and runs out onto the floor.",
      "Typical signs are water pooling at the back of the fridge or freezer compartment, ice forming at the bottom of the freezer, and water under the crisper drawers. To fix it, switch off the fridge, find the drain hole at the back of the compartment, and gently flush it with warm water using a syringe or turkey baster. Do not use hot water on plastic parts and do not poke anything sharp into the hole.",
      img(
        g("domestic-fridge.jpg"),
        "Side-by-side fridge with the doors open",
        "The defrost drain hole usually sits at the bottom of the back wall in the fridge or freezer compartment."
      ),
      "## 2. A cracked or overflowing drip tray",
      "The tray under the fridge catches defrost water. If it cracks, shifts or is not seated properly, water ends up on the floor. In hot weather the tray can also overflow if the fridge is defrosting a lot, which hints at a deeper problem such as door gaskets that are not sealing and letting humid air in. Pull the tray out, check it for cracks and clean it.",
      "## 3. A leaking water supply line",
      "Fridges with an ice maker or a water dispenser connect to the home's water supply through a thin plastic or copper line. These lines can crack, loosen at the fittings or be pinched when the fridge is pushed back. A slow drip can go on for weeks, damaging your floor. If your fridge has a dispenser, look behind it for damp patches, wet flooring or mineral deposits on the connections. The inlet valve behind the fridge can also fail. Turn off the water supply to the fridge until it is repaired.",
      "## 4. A faulty water filter or housing",
      "Water filters need to be seated correctly and replaced on schedule. A filter that is cross-threaded, cracked or overdue for replacement can leak at the housing. If the leak starts shortly after changing the filter, reseat it.",
      "## 5. Door seals and excess humidity",
      "In Durban's humid summers, a worn door gasket lets moist air into the fridge. That moisture condenses on cold surfaces and runs down the walls, and it also builds extra frost that the defrost drain has to cope with. Check the seals for splits, mould or hardened sections, and try the paper test around the full door perimeter.",
      "## 6. The fridge is not level",
      "Fridges are designed to sit level or tilt slightly backwards so the doors close by themselves. If the fridge leans forward, drain water can run toward the front, and the door may not seal. Use a spirit level and adjust the feet.",
      "## How to find the source quickly",
      ul(
        "Dry the floor, put a few paper towels under the fridge and see where the wetness appears first.",
        "Check inside the fridge and freezer for ice, water on the shelves and a blocked drain.",
        "Check behind the fridge for water line leaks and damp fittings.",
        "Look at the drip tray under the fridge.",
        "Check whether the water is clean (drain or supply) or smells off (food residue in the drain)."
      ),
      "## When to call a technician",
      "If the drain keeps blocking, the water seems to come from the sealed system area, or you suspect a faulty inlet valve or heater, it is best to have it checked. A defrost heater failure can cause repeated ice and flooding, and a leaking water valve can cause real damage if left unattended. We repair household fridges across Durban and the surrounding suburbs, and we will find the leak on the first visit in most cases."
    ],
  },
  {
    slug: "repair-or-replace-your-fridge",
    title: "Repair or replace? How to decide when your fridge breaks down",
    date: "2026-08-26",
    readMinutes: 7,
    excerpt:
      "Not every broken fridge is worth fixing. Here is a straightforward way to decide, including the questions a good technician should answer.",
    image: g("domestic-fridge.jpg"),
    imageAlt: "Large side-by-side fridge freezer",
    body: [
      "A fridge that stops working is never convenient. Once you have a diagnosis, you face the practical question: is it worth repairing, or is it time to buy a new one? There is no single right answer, but there is a sensible way to work it out. A good technician will help you with it, and will not push you toward a repair that does not make sense.",
      "## The age of the fridge",
      "Most household fridges last somewhere between 10 and 15 years with reasonable care. Quality brands and simple designs can go beyond that. As a rough guide:",
      ul(
        "Under 8 years old: almost always worth repairing, even for fairly big faults.",
        "Between 8 and 12 years old: depends on the fault and the fridge's quality. Repair minor and medium problems, think carefully about sealed-system work.",
        "Over 12 years old: consider replacing, unless it is a premium unit in excellent condition and the repair is cheap."
      ),
      "## The 50 percent rule",
      "A widely used rule of thumb is that if the repair costs more than about half the price of a comparable new fridge, replacement usually makes more sense. If a fridge is old and the repair is half the cost of a new one, you are paying a lot to extend a short life. If the fridge is young and good quality, the same repair may be good value.",
      img(
        g("cooldrink-fridge.jpg"),
        "Glass door commercial beverage cooler",
        "For commercial units the maths is different: downtime costs you stock and sales, so a quick repair often wins."
      ),
      "## What kind of fault is it?",
      "Not all faults cost the same. In very broad terms:",
      ul(
        "Low cost: door seals, thermostats, start relays, fans, defrost heaters, drain blockages, sensors and most electrical components.",
        "Medium cost: control boards, damper assemblies, inlet water valves and some compressor components.",
        "High cost: sealed system repairs such as a compressor replacement, evaporator or condenser leaks that need brazing, and refrigerant circuit blockages."
      ),
      "A sealed system repair on a good fridge can still be worthwhile, particularly for a high quality or built-in appliance that is expensive to replace. On a low-end fridge it often is not.",
      "## Energy use and running costs",
      "Older fridges can use noticeably more electricity than modern ones, especially models from before efficiency labelling improved. If your electricity bill matters and the fridge is more than 12 to 15 years old, a new efficient model will pay back some of its cost over time. Chest freezers and fridges kept in hot garages also use more power, so check where yours is placed.",
      "## Parts availability",
      "Some brands and older models have spare parts that are scarce or discontinued. A good technician will tell you up front whether parts are easy to get, and if a fix is a temporary measure. Common brands such as Defy, Samsung, LG and Hisense usually have readily available parts.",
      "## The refrigerant and the environment",
      "Older fridges run on gases that are being phased out. That does not mean they cannot be repaired, but the cost of certain repairs may be higher. If you do replace the fridge, make sure the old one is recovered and disposed of properly, so the refrigerant is not released.",
      "## What else to consider",
      ul(
        "Do you have a warranty or an extended warranty on the fridge? Check before paying for anything.",
        "Is the fridge integrated or built in? Replacements may be harder and costlier to fit.",
        "Has the fridge broken down several times this year? A pattern of failures suggests the unit is wearing out.",
        "Can you manage without it for a few days while a replacement is delivered?"
      ),
      "## Questions to ask your technician",
      ul(
        "What exactly is wrong and how sure are you?",
        "What will the repair cost and is the part guaranteed?",
        "How long should the fridge last after this repair?",
        "If it was your fridge, would you fix it?"
      ),
      "Our approach is simple: diagnose first, explain what is wrong, give a fair estimate and tell you honestly if the unit is not worth fixing. Several of our customers have mentioned that in their reviews. If you want an honest opinion on your fridge, call us and we will give you one."
    ],
  },
  {
    slug: "cold-room-maintenance-checklist-for-restaurants",
    title: "A cold room maintenance checklist for restaurants and bakeries",
    date: "2026-09-04",
    readMinutes: 8,
    excerpt:
      "Most cold room breakdowns are preventable. Use this daily, weekly and quarterly checklist to protect your stock and your trading days.",
    image: g("commercial-freezer.jpg"),
    imageAlt: "Stainless steel commercial freezer",
    body: [
      "A cold room or freezer room is one of the most important assets in a food business. It is also one of the easiest to neglect, because when it works nobody thinks about it. The trouble is that when it fails, it usually fails at the worst time: Friday evening, a full booking sheet, a delivery just arrived.",
      "The good news is that most breakdowns give warnings and most are preventable with a simple routine. The checklist below is what we recommend for restaurants, bakeries, butcheries and caterers.",
      "## Daily checks (two minutes)",
      ul(
        "Read the room temperature on the display and write it down. Chillers should generally sit between 0 and 5 degrees Celsius, and freezers at minus 18 or colder. Check what your local food safety requirements and your customer audits expect.",
        "Make sure the door closes fully and the strip curtain is intact.",
        "Look at the floor and door frame for water or ice.",
        "Listen for unusual noises from the evaporator fan or condensing unit.",
        "Do not prop the door open during deliveries. Move stock in quickly."
      ),
      img(
        g("coldroom.jpg"),
        "Interior of an insulated cold room",
        "Keep floors, walls and the area under the evaporator clear so air can circulate."
      ),
      "## Weekly checks (ten minutes)",
      ul(
        "Check the door gasket for tears, hardening and mould. Wipe it clean.",
        "Check that the door hinges and latch are tight and the door self-closes.",
        "Look at the evaporator for ice, frost patterns and water leaks.",
        "Make sure stock is stored off the floor and away from the evaporator and walls.",
        "Check the drain line is flowing and not frozen.",
        "Test the internal safety release and the alarm if you have one."
      ),
      "## Monthly checks",
      ul(
        "Clean the evaporator fan guard and inspect fan blades for damage.",
        "Check the condensing unit for dust, grease, leaves and debris, and make sure there is airflow around it.",
        "Inspect insulation panels, door edges and the floor for damage, moisture or soft spots.",
        "Check lights and light switch seals for water ingress.",
        "Verify the thermometer against a reference thermometer to confirm it is accurate."
      ),
      "## Quarterly service by a technician",
      "Some jobs need tools and training. A quarterly service for a busy kitchen, or at least a twice-a-year service for lighter use, typically covers:",
      ul(
        "Cleaning the condenser coil, which restores capacity and protects the compressor.",
        "Checking refrigerant pressures and looking for leaks.",
        "Testing the defrost system, heater, termination thermostat and drain heaters.",
        "Checking electrical connections, contactors and overloads for wear or heating.",
        "Calibrating the thermostat or controller and checking alarms.",
        "Inspecting fan motors, bearings and mountings.",
        "Measuring the amp draw of the compressor and fans against the data plate."
      ),
      "## Good habits that cost nothing",
      ul(
        "Let hot food cool before it goes in, and cover it.",
        "Do not overload the room. Air needs to circulate around stock.",
        "Rotate stock on a first-in, first-out basis so nothing sits forgotten against the evaporator.",
        "Keep the area around the condensing unit clear and ventilated. A blocked condenser is the number one cause of overheated compressors.",
        "Train all staff to close the door and report anything unusual immediately."
      ),
      "## Keep records",
      "A temperature log, a service record and a note of faults and repairs do two things. They help a technician find patterns faster, and they support your food safety audits and insurance claims if a failure ever causes a stock loss. A simple clipboard on the door works.",
      "## Have a plan for failure",
      "Know where your stock goes if the cold room fails. Have a backup fridge or cooler boxes, a technician you can call quickly and a basic emergency procedure written down. Staff should know who to call, and what to do with product at risk.",
      "We service and repair cold rooms and freezer rooms for restaurants, bakeries and retailers across Durban and the surrounding area. Ask us about a scheduled maintenance plan for your site."
    ],
  },
  {
    slug: "how-a-cold-room-is-built",
    title: "How a cold room is built, sized and priced: what to know before you buy",
    date: "2026-09-12",
    readMinutes: 8,
    excerpt:
      "From insulated panels to the condensing unit, here is what goes into a cold room and the questions to answer before you ask for a quote.",
    image: g("coldroom.jpg"),
    imageAlt: "Inside of a white insulated cold room",
    imageFit: "cover",
    body: [
      "If you run a restaurant, bakery, butchery or small food manufacturer, sooner or later you will ask whether you need a cold room or a freezer room. They look simple from the outside: an insulated box with a door and a unit on the wall. In practice the details of design, sizing and installation make a very big difference to how well it works, how much power it uses and how long it lasts.",
      "This guide explains what a cold room is made of and what to think about before you request quotes.",
      "## The main parts",
      ul(
        "Insulated panels: the walls and ceiling are made from sandwich panels with a steel or coated skin and a core of polyurethane or similar insulation. Panels lock together with cam-lock fittings.",
        "The floor: freezer rooms need an insulated and often heated floor to stop the ground freezing. Chiller rooms may use an insulated panel floor or a floor with a sealed finish.",
        "The door: a hinged or sliding door with a heavy duty gasket, a heated frame in freezers and an internal safety release.",
        "The refrigeration system: a condensing unit (compressor and condenser, usually mounted outside or in a ventilated space) and an evaporator inside the room.",
        "Controls: a thermostat or controller, a defrost control and alarms.",
        "Extras: strip curtains, internal lighting, shelving, a pressure relief port in freezers and a drain line."
      ),
      img(
        g("mobile-fridge.jpg"),
        "Mobile refrigerated trailer",
        "Mobile cold units are an option for events, temporary storage or sites where a fixed room is not possible."
      ),
      "## Chiller or freezer?",
      "A chiller holds stock at above freezing temperatures, normally 0 to 5 degrees Celsius, for produce, dairy, drinks and meat for short term storage. A freezer room runs at minus 18 degrees Celsius or lower for frozen food. A freezer needs thicker panels, a more powerful system, an electric or hot gas defrost and a heated floor and door frame. It costs more to build and to run, so do not buy a freezer if a chiller will do.",
      "## What decides the size of the system",
      "The refrigeration load is not just about the size of the room. A properly sized system takes into account:",
      ul(
        "The room volume and the panel thickness.",
        "The temperature you want to hold, and the temperature of the surrounding area.",
        "How much product goes in each day, and at what temperature. Warm product adds a large heat load.",
        "How often the door is opened, and for how long.",
        "Lighting, fans, people working inside and other internal heat sources.",
        "The climate. Durban's warm and humid summers mean condensing units work harder than in a cooler region."
      ),
      "A system that is too small runs non-stop, cannot recover after door openings and wears out early. One that is too big short-cycles, wastes power and does not dehumidify properly. A good supplier will ask you these questions rather than quote by size alone.",
      "## Where to put it",
      "Think about access for deliveries, how close it is to the kitchen or preparation area and whether the floor is level and strong enough. The condensing unit needs space and airflow, so avoid enclosed, hot spots next to ovens or flues. The condensate drain needs a route to a drain. A power supply with the correct capacity and protection is essential, especially for a three-phase system.",
      "## Choosing a refrigerant and equipment",
      "Modern systems use a range of refrigerants, some of which are flammable. Ask what refrigerant the supplier proposes, what the equipment brand is and how easy it is to get parts and service in your area. Cheap, unbranded units can be difficult to repair.",
      "## What to ask for in a quote",
      ul(
        "Room size, panel thickness, door size and floor type.",
        "Make, model and capacity of the condensing unit and evaporator.",
        "Design temperature and ambient conditions used for the calculation.",
        "Electrical requirements and what is included in the price.",
        "Warranty on the panels, the refrigeration system and the workmanship.",
        "Installation, commissioning and testing, and what training or documentation you receive.",
        "After-sales service and response times."
      ),
      "## The cost of getting it wrong",
      "The cheapest quote can turn out the most expensive. An undersized or badly installed system wastes electricity every day, breaks down during peak season and may fail food safety inspections. Spend time on the design, and choose a contractor who will still be around to service it in five years.",
      "We design and build cold rooms and freezer rooms to suit your space and budget, and we service them once they are in. If you are planning a new room, or struggling with an existing one, give us a call and we will talk it through with you."
    ],
  },
  {
    slug: "durban-humidity-and-your-refrigeration",
    title: "How Durban's heat, humidity and salty air affect your refrigeration",
    date: "2026-09-19",
    readMinutes: 6,
    excerpt:
      "Living near the coast is hard on fridges, freezers and cold rooms. Here are the effects to watch for and the habits that help.",
    image: g("commercial-fridge.jpg"),
    imageAlt: "Supermarket style open display refrigerator",
    body: [
      "Durban is a wonderful place to live, but its warm, humid coastal climate is not kind to refrigeration equipment. Fridges and freezers that would run quietly for fifteen years inland can age faster here. The reasons are straightforward, and so are the ways to reduce the damage.",
      "## Heat makes the system work harder",
      "A refrigeration system removes heat from inside the cabinet and releases it into the surrounding air through the condenser. The hotter the surrounding air, the harder it is to release that heat, the higher the system pressures, and the longer the compressor has to run. A fridge in a hot kitchen or a garage in a Durban summer uses more electricity and runs closer to its limits.",
      ul(
        "Keep the fridge away from ovens, stoves, direct sunlight and heating appliances.",
        "Leave a gap of several centimetres at the back and sides for ventilation, as per the manual.",
        "In garages and outbuildings, make sure the space is ventilated. Standard domestic fridges are designed for a certain ambient range and struggle outside it.",
        "Do not enclose the fridge in a cabinet without ventilation."
      ),
      img(
        g("cooler.jpg"),
        "Deli and meat display counter",
        "Display units in shops work against both heat and humidity from the shop floor."
      ),
      "## Humidity means moisture and mould",
      "High humidity brings more water vapour into the cabinet every time the door opens. That moisture condenses on cold surfaces, freezes into frost and puts extra pressure on defrost systems and drains. It also encourages mould on door gaskets, in drip trays and around the fridge's cold surfaces.",
      ul(
        "Wipe door seals regularly with warm soapy water and dry them. Mould in the seal folds can cause the gasket to stiffen and leak.",
        "Clean the drip tray and defrost drain. Standing water and food residue smell and breed mould.",
        "Do not store uncovered liquids and open containers in the fridge, because they release moisture.",
        "Avoid leaving the door open. Every second adds humid air."
      ),
      "## Salt air and corrosion",
      "Close to the coast, airborne salt settles on metal surfaces. Over time it attacks the thin aluminium fins and copper tubes of condenser and evaporator coils, as well as electrical contacts and the steel cabinet. Corroded coils lose efficiency and eventually leak refrigerant, which is an expensive repair. Rust on the base of a cabinet, flaking paint or green deposits on the pipework are warning signs.",
      ul(
        "Rinse and clean condenser coils regularly, especially for outdoor condensing units. Use a soft brush and low pressure, never a pressure washer on fins.",
        "For outdoor units, ask about coated or protected coils when you buy.",
        "Touch up scratches and rust on cabinets early.",
        "Keep electrical contacts clean and dry, and check outdoor isolators and wiring for corrosion."
      ),
      "## Dust, grease and cooking residue",
      "Kitchens add grease and flour dust, which clog condenser coils and form a sticky layer that traps even more dirt. Restaurants and bakeries should plan to clean condenser coils every few months. A blocked condenser is one of the leading causes of compressor failures we see.",
      "## Heavy rain and storms",
      "Coastal storms bring heavy rain, flooding and electrical surges. Outdoor condensing units should sit on a raised base clear of standing water, and lightning or surge protection for the power supply is worth the cost.",
      "## A simple coastal care routine",
      ul(
        "Every month: wipe seals, clean the drip tray, check the temperature.",
        "Every three to six months: clean condenser coils and the area around them.",
        "Every year: have a technician inspect the refrigeration system, test the defrost system and look for corrosion.",
        "After storms or power surges: check that the unit starts and runs normally."
      ),
      "A little attention goes a long way in a coastal climate. If your fridge, display unit or cold room is struggling with the heat or showing signs of corrosion, call us. We service equipment across Durban, Umhlanga, Kloof, Hillcrest and surrounding suburbs, and we see these coastal problems every week."
    ],
  },
  {
    slug: "chest-freezer-vs-upright-freezer",
    title: "Chest freezer or upright freezer? How to choose for your home or business",
    date: "2026-09-25",
    readMinutes: 6,
    excerpt:
      "Both do the same job, but they differ in running costs, space, organisation and how they cope with power cuts.",
    image: g("h-freezer.jpg"),
    imageAlt: "White chest freezer",
    body: [
      "Buying a freezer sounds simple until you stand in the shop and have to pick between a chest and an upright. Both keep food frozen, but they behave differently in daily use. The right choice depends on what you store, how much space you have and how you live.",
      "## Chest freezers: the case for",
      ul(
        "Better at holding cold. Cold air is heavy and stays in the chest when you open the lid. An upright loses much more cold air when the door opens.",
        "Generally more energy efficient than an upright of the same capacity.",
        "More usable space, because there are no shelves or door bins taking room.",
        "Usually cheaper to buy per litre of capacity.",
        "Hold their temperature longer during power cuts, which matters in South Africa.",
        "Their simple design means fewer parts to fail. Most are manual defrost."
      ),
      img(
        g("Freezer.jpg"),
        "Chest freezer with lift-up lids",
        "Chest freezers take more floor space but hold cold well and cost less to run."
      ),
      "## Chest freezers: the downsides",
      ul(
        "Harder to organise. Food gets buried and forgotten at the bottom unless you use baskets and a stock list.",
        "They need more floor space, since you need clearance to lift the lid.",
        "Manual defrost is a chore and usually requires emptying the freezer a couple of times a year.",
        "Reaching the bottom can be awkward for some people."
      ),
      "## Upright freezers: the case for",
      ul(
        "Easy to organise. Shelves and door bins keep food visible and accessible.",
        "A smaller footprint in a kitchen or pantry, since they stand upright.",
        "Many models are frost-free, which reduces the need for manual defrosting.",
        "Often look neater and fit under counters or in built-in spaces."
      ),
      "## Upright freezers: the downsides",
      ul(
        "Use more electricity for the same capacity, particularly frost-free models.",
        "Lose cold air each time the door opens, so temperatures fluctuate more.",
        "Usually cost more per litre of storage.",
        "Frost-free models have more components, such as fans, heaters and sensors, which can fail with age."
      ),
      "## Questions to help you choose",
      ul(
        "How much do you want to store? Bulk buyers, hunters, fishermen and families who buy meat in bulk benefit from a chest.",
        "How often will you open it? Frequent small trips favour an upright. Occasional deep storage favours a chest.",
        "Where will it go? Garages are often hot and humid. Make sure the model is rated for the ambient temperature, which usually means a climate class of SN, N or ST.",
        "How would a power cut affect you? A chest gives you more time.",
        "Are you willing to defrost by hand?"
      ),
      "## For businesses",
      "In restaurants and shops, chest freezers are common for bulk storage at the back of house, while upright stainless steel freezers are common in kitchens for easy access during service. Display chest freezers are widely used for ice cream and frozen goods in retail. Take into account the volume of product, how often staff access it and your hygiene routine.",
      "## Keep it running well",
      ul(
        "Leave space around the freezer for airflow.",
        "Keep it at minus 18 degrees Celsius or colder.",
        "Do not overfill an upright, since air needs to circulate.",
        "Defrost manual models when the ice layer reaches about half a centimetre.",
        "Check door gaskets and clean the condenser coil regularly."
      ),
      "If your freezer is not holding temperature, or you are deciding whether to repair or replace an older unit, we are happy to help. We repair household and commercial freezers across Durban and the surrounding area and can also supply freezers, beverage coolers and display units."
    ],
  },
  {
    slug: "how-often-should-commercial-refrigeration-be-serviced",
    title: "How often should commercial refrigeration be serviced?",
    date: "2026-10-01",
    readMinutes: 7,
    excerpt:
      "Skipping maintenance feels cheaper until something fails. Here is a sensible service schedule and what a proper service includes.",
    image: g("cooler.jpg"),
    imageAlt: "Refrigerated deli display counter",
    body: [
      "Ask most business owners when they last had their refrigeration serviced and the honest answer is often, 'when it broke'. It is understandable. Refrigeration works quietly in the background and there is always something more urgent to spend money on. But reactive maintenance is the most expensive kind. Breakdowns happen at the worst time, they cost stock, and they usually cost more to fix than they would have if caught early.",
      "## So how often?",
      "There is no single answer, because it depends on the equipment, the environment and how heavily it is used. As a practical guide:",
      ul(
        "Busy restaurants, takeaways, butcheries and bakeries with walk-in rooms: every three months.",
        "Supermarkets and convenience stores with display cabinets and condensing units: every three to four months, with extra attention to condenser coils.",
        "Bars, small restaurants and shops with beverage coolers and under-counter units: every six months.",
        "Light use equipment in clean environments: at least once a year.",
        "Equipment in dusty, greasy or coastal conditions: more often than the schedule above."
      ),
      img(
        g("commercial-fridge.jpg"),
        "Open display refrigerator in a shop",
        "Display cabinets in shops pick up dust and packaging debris, so their coils need regular cleaning."
      ),
      "## What a proper service includes",
      "A service should be more than a quick glance and a signature. A thorough visit usually covers:",
      ul(
        "Full system inspection: visual checks on cabinets, doors, seals, pipework, insulation and mounting.",
        "Condenser and evaporator coil cleaning to restore airflow and capacity.",
        "Refrigerant pressure checks and leak detection.",
        "Electrical testing: contactors, overloads, wiring, terminals and earthing.",
        "Compressor and fan motor amp draw checks against the data plate.",
        "Defrost system testing: timers, heaters, sensors and drains.",
        "Thermostat and controller calibration and alarm checks.",
        "Door seal, hinge and latch inspection.",
        "Performance testing, including pull-down time and temperature stability."
      ),
      "## The cost of skipping it",
      ul(
        "Dirty condenser coils force the compressor to work harder, which raises your electricity bill and shortens the compressor's life.",
        "Small refrigerant leaks go unnoticed until the system loses capacity and stock starts to warm.",
        "Worn electrical parts overheat and fail, and sometimes cause damage to other components.",
        "Failed defrost systems let ice build up and block airflow.",
        "Emergency call-outs cost more than planned maintenance, and parts may not be available immediately."
      ),
      "## The hidden savings",
      "Cleaner coils and correct refrigerant charge mean equipment runs for shorter cycles and draws less power. Many businesses see a noticeable difference on their electricity bills after servicing neglected equipment. Fewer breakdowns mean less spoiled stock, less lost trading and less stress.",
      "## Compliance and records",
      "Food businesses are expected to keep cold storage at safe temperatures and to show that they manage it. Service records, temperature logs and invoices form part of that picture. If an inspector, a customer or your insurer asks, you want to be able to show that the equipment is maintained.",
      "## How to get the most from a service visit",
      ul(
        "Tell the technician about any recent problems, odd noises or temperature changes.",
        "Make sure the equipment is accessible and that someone can let the technician in.",
        "Ask for a short written report listing what was done and any recommended repairs.",
        "Keep service records together with your temperature logs.",
        "Schedule the visit in a quiet period if you can."
      ),
      "## Planned maintenance vs repair on demand",
      "A maintenance plan gives you predictable costs, regular check-ups and priority when something goes wrong. For most businesses with more than a couple of units, it is cheaper and far less stressful than waiting for failures. We offer scheduled refrigeration maintenance across Durban and the surrounding area, from small shops to larger kitchens and cold rooms. Call us to discuss a plan that fits your equipment and your budget."
    ],
  },
  {
    slug: "fridge-noises-normal-or-worrying",
    title: "Fridge noises: what is normal and what means trouble",
    date: "2026-10-04",
    readMinutes: 6,
    excerpt:
      "Clicks, hums, gurgles and rattles. Some are perfectly normal, others are early warnings. Here is how to tell the difference.",
    image: g("domestic-fridge-1.jpg"),
    imageAlt: "Household fridge freezer",
    body: [
      "Fridges are never completely silent. They hum, click, gurgle and occasionally pop. Most of those sounds are completely normal and just mean the appliance is doing its job. Others are early warnings that something is wearing out. Knowing the difference can save you from a sudden failure, and from a lot of unnecessary worry.",
      "## Normal sounds",
      ul(
        "A low hum: the compressor running. It should be steady and not too loud.",
        "Gurgling or bubbling: refrigerant moving through the pipes, especially when the compressor starts or stops.",
        "A click when the fridge starts or stops: the thermostat or relay switching.",
        "A soft whoosh or fan noise: the fan moving air across the coil in a frost-free model.",
        "Occasional cracking, popping or ticking: plastic and metal parts expanding and contracting as temperatures change.",
        "A trickle or dripping: defrost water running to the drip tray.",
        "A buzz or water-filling sound: the ice maker filling."
      ),
      img(
        g("domestic-fridge.jpg"),
        "Open side-by-side fridge showing shelves and vents",
        "Fan, damper and drain noises usually come from the freezer compartment of frost-free models."
      ),
      "## Sounds that need attention",
      "## Loud buzzing or humming",
      "A compressor that has become much louder than before may be worn or mounted badly. A loud buzzing that comes and goes can also mean the compressor is struggling to start. If it is accompanied by warm food, call a technician.",
      "## Repeated clicking",
      "If the fridge clicks every few minutes and the compressor never runs for long, the start relay or overload protector may be failing, or the compressor is trying to start and cannot. This often ends with a fridge that stops cooling.",
      "## Rattling or vibration",
      "Often caused by a loose drip tray, an unlevel fridge or items touching the back of the unit. Check that the fridge sits level and that it does not touch the wall or cabinets. If the noise persists, a loose compressor mount or fan blade may be to blame.",
      "## Squealing or chirping",
      "A high-pitched squeal usually comes from a fan motor with a worn bearing. It might be the evaporator fan in the freezer or the condenser fan at the back. Fan motors are inexpensive parts, but if ignored they can fail and cause temperature problems.",
      "## Scraping or grinding from the freezer",
      "A fan blade hitting a build-up of ice often makes a scraping sound. It usually means the defrost system has stopped working and ice has formed around the fan. Do not chip the ice. Turn the fridge off and let it defrost, then have the defrost system checked.",
      "## Knocking or banging",
      "Deep knocking from the compressor area could indicate internal damage. If it happens along with overheating or poor cooling, the compressor may be reaching the end of its life.",
      "## Constant running with a roaring noise",
      "A dirty condenser coil or a failing condenser fan makes the fridge run louder and longer. Cleaning the coil is often enough to restore normal operation.",
      "## What to do when you hear something odd",
      ul(
        "Check that the fridge is level and not touching walls or cabinets.",
        "Check the drip tray and look for loose items behind the fridge.",
        "Vacuum dust from the condenser coil, which is usually at the back or under the fridge.",
        "Open the freezer door and listen for the fan.",
        "Note when the sound occurs: on startup, during running, or only with the door open.",
        "If it is accompanied by warm food, burning smells or constant running, switch the fridge off and call a technician."
      ),
      "## When a noise is just a noise",
      "If the fridge is cooling well, the temperatures are stable and the sound has always been there, it is probably normal. New noises are what matter. A change from the usual pattern, or a sound that gets steadily worse, deserves a closer look.",
      "If your fridge is making a noise you do not like, call us. We can often tell what it is from your description, and we diagnose and repair household fridges on-site across Durban and the surrounding area."
    ],
  },
  {
    slug: "how-much-does-fridge-repair-cost-durban",
    title: "How much does a fridge repair cost in Durban?",
    date: "2026-10-12",
    readMinutes: 7,
    excerpt:
      "No two fridge repairs cost the same. Here is what drives the price, what a fair quote looks like and how to avoid paying twice.",
    image: "/images/blog/cover-repair-cost.jpg",
    imageAlt: "Cover graphic: what does a fridge repair cost in Durban",
    imageFit: "cover",
    body: [
      "It is the first thing people ask when a fridge stops working, and the honest answer is that it depends. A fridge that stopped because of a worn door seal and one that stopped because of a seized compressor can differ in price by a factor of ten. Rather than quote a number that would be wrong for most readers, this guide explains what actually drives the cost, so you can judge whether a quote is fair.",
      "## The four parts of a repair bill",
      ul(
        "**The call-out and diagnosis.** A technician has to travel to you, open the unit up and test it. Most companies charge a call-out or diagnostic fee for this. Ask what it is before the visit, and whether it is deducted from the repair if you go ahead.",
        "**The parts.** A start relay, a thermostat, a fan motor, a defrost heater, a control board and a compressor are all very different prices. Genuine parts cost more than cheap copies, but they usually last longer and are easier to warranty.",
        "**The labour.** Simple swaps take minutes. Sealed system work such as replacing a compressor or fixing a leak takes hours, because it needs recovery of the refrigerant, brazing, a vacuum and a recharge.",
        "**Gas.** If the refrigerant has to be replaced, the type and quantity matter. Hydrocarbon systems have small charges, but need proper handling."
      ),
      img(
        g("domestic-fridge.jpg"),
        "Side-by-side fridge freezer with doors open",
        "Larger, feature-rich fridges often have more parts that can fail, and the parts cost more."
      ),
      "## Broad cost bands (not prices)",
      "Instead of rand figures, think in bands. Prices change, and every brand and model is different.",
      ul(
        "**Low:** door seals, thermostats, start relays, fans, defrost heaters, drain blockages and temperature sensors. These are the most common faults and usually the cheapest.",
        "**Medium:** control boards, water inlet valves, damper assemblies and some electronic components.",
        "**High:** compressor replacement, evaporator or condenser leaks and anything else that means opening the sealed refrigerant circuit."
      ),
      "## What makes a repair more expensive",
      ul(
        "**The brand and model.** Common brands such as Defy, Samsung, LG and Hisense usually have parts available locally. Rare or imported models can take weeks to source.",
        "**The age of the fridge.** Older units can have corroded pipework and brittle plastics that complicate repairs.",
        "**Waiting too long.** A small fault ignored for months, such as a noisy fan or a failing relay, can cause a bigger one, like a burnt compressor.",
        "**Urgency.** After-hours and weekend call-outs normally cost more.",
        "**Access.** Built-in fridges and units wedged into tight spaces take longer to work on."
      ),
      "## What a fair quote looks like",
      ul(
        "It names the fault, not just a vague 'it needs gas'.",
        "It separates the call-out, parts and labour.",
        "It tells you whether the part is new, and what warranty you get on it and on the work.",
        "It is given before work starts, and the technician tells you if the cost changes once the unit is opened up.",
        "It comes with an honest opinion on whether the repair is worth it for the age of the fridge."
      ),
      "## Red flags",
      ul(
        "A quote for a 'regas' without finding a leak. If gas has escaped, something is leaking, and topping up only delays the problem.",
        "A very low phone quote that grows once the technician arrives.",
        "No invoice, no warranty and no company details.",
        "Pressure to decide on the spot, or to replace parts that you have not been shown are faulty."
      ),
      "## How to keep the bill down",
      ul(
        "Act early. A fridge that is making new noises or not holding temperature is cheaper to fix now than after it fails.",
        "Do the free checks first: power supply, settings, door seals and a dusty condenser coil.",
        "Keep the model number and fault description ready when you call. It helps the technician bring the right parts and fix it in one visit.",
        "Ask whether the unit is worth repairing at all. Our repair or replace guide covers how to decide."
      ),
      "Customers who have reviewed us often mention honest explanations and fair estimates, and that is how we work: we tell you what is wrong, what it will cost and whether it is worth doing. Call us on 083 538 5106 for a quote on your fridge anywhere in Durban and the surrounding suburbs."
    ],
  },
  {
    slug: "fridge-clicking-but-not-starting",
    title: "Fridge clicking but not starting? What the click is telling you",
    date: "2026-10-16",
    readMinutes: 6,
    excerpt:
      "A fridge that clicks and then goes quiet is usually trying to start and failing. Here is what that means and what is safe to try.",
    image: "/images/blog/cover-clicking.jpg",
    imageAlt: "Cover graphic: fridge clicking but not starting",
    imageFit: "cover",
    body: [
      "You hear a click from the back of the fridge. A few minutes later, another click. The fridge never settles into its usual hum and the food slowly warms up. This is one of the most common calls we get, and the good news is that the click is a useful clue. It tells us that power is reaching the fridge and the control circuit is working. The problem is somewhere in the starting circuit of the compressor.",
      "## What the click is",
      "A compressor needs a burst of extra current to start turning. On most domestic fridges this is handled by two small parts that sit in a plastic box on the side of the compressor: a start relay (or PTC starter) and an overload protector. When you hear a click, the overload protector is usually switching off because the compressor drew too much current and failed to start. A few minutes later it cools down, resets with another click and tries again.",
      "## The usual suspects",
      "## 1. A worn start relay",
      "The relay is a small, cheap component that takes a lot of punishment. Over years its contacts burn and it stops delivering the start current. This is the most common cause and the least expensive to fix. The fridge is otherwise perfectly healthy.",
      img(
        g("domestic-fridge-1.jpg"),
        "Bottom-freezer fridge with a water dispenser",
        "The start relay and overload sit in a small box on the compressor at the back, so the fix is quick for a technician."
      ),
      "## 2. A weak overload protector",
      "The overload is a thermal switch that protects the compressor from overheating. When it gets old, it trips too easily, even when the compressor is fine. It is cheap and usually replaced together with the relay.",
      "## 3. A start capacitor that has failed",
      "Some fridges use a capacitor to help the compressor start. If it dries out, the compressor hums and clicks but cannot turn. Again, it is an inexpensive part.",
      "## 4. A compressor that has seized or is struggling",
      "If the starting parts are good and the fridge still clicks, the problem may be the compressor itself. A compressor with worn windings or a mechanical seizure cannot turn however much current you give it. This is the expensive result, and a technician can confirm it by measuring the winding resistance and current.",
      "## 5. Power problems",
      "A low voltage supply, a loose plug or a failing extension lead can make the compressor struggle to start. After a power cut, a surge or load shedding, a voltage drop can also stall a start attempt. Plug the fridge directly into a good wall socket for a test.",
      "## 6. High head pressure",
      "If pressure on the high side has not equalised after a power cut, the compressor may not be able to start right away. Waiting about five to ten minutes after switching off lets the pressure drop. This is why quick on and off switching often makes things worse.",
      "## What you can safely try",
      ul(
        "Check that the plug is firmly in and try a different socket.",
        "Switch the fridge off at the wall and leave it for 10 minutes, then switch it back on once.",
        "Check that the temperature dial is not at the off position.",
        "Vacuum dust off the condenser coil and make sure the fridge has airflow around it.",
        "Move food that matters to a cooler with ice if the fridge is warm."
      ),
      "## What not to do",
      ul(
        "Do not keep switching the fridge on and off. Each attempt stresses the compressor and the starting parts.",
        "Do not tap or hit the compressor. It can damage the internals.",
        "Do not open the electrical box on the compressor yourself unless you know how to isolate and test it. It is mains voltage.",
        "Do not leave the fridge clicking for days with food inside."
      ),
      "## Does a clicking fridge need replacing?",
      "Usually not. In most cases the fault is a starting part costing a fraction of a new fridge, and the technician can fix it in a single visit. Only when the compressor itself has failed does the repair-or-replace decision come up, and then it depends on the age and quality of the fridge.",
      "If your fridge is clicking and not starting, switch it off, keep the doors closed and call us. We diagnose and repair household fridges on-site across Durban and the surrounding suburbs, and we carry the common starting parts on the van."
    ],
  },
  {
    slug: "cold-room-failed-what-to-do-in-the-first-hour",
    title: "Cold room failed? What to do in the first hour",
    date: "2026-10-20",
    readMinutes: 7,
    excerpt:
      "When a cold room stops cooling, what you do in the first hour decides how much stock you lose. A calm, practical checklist for restaurants and bakeries.",
    image: "/images/blog/cover-cold-room-failure.jpg",
    imageAlt: "Cover graphic: cold room failed, your first hour",
    imageFit: "cover",
    body: [
      "It is a bad moment. You open the cold room and it is warm, or the alarm is beeping, or the display shows a temperature well above where it should be. Staff look at you. Deliveries are due. The next hour matters more than anything else, because stock that is moved quickly can often be saved, and a cold room that is left shut with a fault can lose thousands of rand of product.",
      "Here is a simple order of actions. It is worth printing and sticking on the wall next to the door.",
      "## Minutes 0 to 10: protect the stock",
      ul(
        "Check the temperature. Note the time and the reading. This is the start of your record.",
        "Keep the door closed as much as possible. The more it opens, the faster it warms.",
        "Decide what is most at risk: raw meat, poultry, fish, dairy, cooked food and cream-based items first.",
        "Move high-risk stock into any working fridge or freezer, even if it is a domestic unit in the back. Use cooler boxes with ice if you have them.",
        "Do not overload working units, as they will struggle and fail to keep the food cold."
      ),
      img(
        g("coldroom.jpg"),
        "Inside an empty insulated cold room",
        "A closed, well insulated room holds its temperature for a while, so avoid opening the door unless you need to."
      ),
      "## Minutes 10 to 20: quick checks",
      "A surprising number of failures turn out to be simple. Before you call anyone, check these in a couple of minutes:",
      ul(
        "Is the power on? Look at the main isolator, the distribution board and any tripped breakers.",
        "Is the condensing unit running? Go and listen to it. A silent unit with a warm room points to a power or compressor problem.",
        "Is the evaporator fan running inside? A fan that has stopped can warm the room even if the compressor is working.",
        "Is the door closing and sealing? Check the gasket and that nothing is jamming the door open.",
        "Is the evaporator covered in ice? If it is a solid block, the defrost has failed. Note it for the technician.",
        "Has the controller been changed or set to defrost or off by mistake?"
      ),
      "## Minutes 20 to 30: call for help",
      "If the room is still warm, call your refrigeration technician. Have the following ready so they can help quickly:",
      ul(
        "The temperature now and when it started rising.",
        "What you have already checked.",
        "The make and model on the condensing unit data plate, and the refrigerant type if you can read it.",
        "Any noises, smells, error codes or alarms.",
        "Your address and access arrangements."
      ),
      "A call to a company that knows your system is much quicker than searching for a new one in an emergency. This is a good reason to have a service relationship before something breaks.",
      "## Minutes 30 to 60: keep the cold chain",
      ul(
        "Keep recording the temperature every 15 minutes.",
        "Group the stock that you moved, and label what came from where and when.",
        "Use the time while waiting for the technician to arrange backup, such as cooler boxes, a hired cold trailer or help from a neighbouring business.",
        "Do not add more warm product to the failing room."
      ),
      "## How long is food safe?",
      "As a general rule, perishable food that has been above 5 degrees Celsius for more than about four hours should be thrown away. Frozen food that still contains ice crystals and is cold to the touch can usually be kept, though quality may suffer. When in doubt, follow your food safety procedure and your supplier's advice. It is better to discard a small amount than to risk customers' health.",
      "## What to do afterwards",
      ul(
        "Get a written report from the technician on the cause and repair.",
        "Record the incident, the temperatures and what was discarded. Insurance claims and audits want this information.",
        "Ask what could prevent a repeat: maintenance, a temperature alarm, a surge protector or a backup plan.",
        "Review your plan with staff so that everyone knows what to do next time."
      ),
      "## Prevent the next emergency",
      "Most cold room failures give a warning. Rising temperatures, constant running, ice on the coil and strange noises are all signs. A scheduled maintenance plan catches them early, and a remote temperature alarm tells you before the stock is lost. Our cold room maintenance checklist and our servicing schedule guide are good places to start.",
      "We repair and service cold rooms and freezer rooms across Durban and surrounding suburbs. If yours has failed, call 083 538 5106 and tell us what you can see. We will tell you what to do while we are on the way."
    ],
  },
  {
    slug: "keep-your-fridge-running-in-a-durban-summer",
    title: "How to keep your fridge running through a Durban summer",
    date: "2026-10-24",
    readMinutes: 6,
    excerpt:
      "Heat, humidity and long power cuts make summer the hardest season for fridges. Ten simple habits that prevent most summer breakdowns.",
    image: "/images/blog/cover-summer-heat.jpg",
    imageAlt: "Cover graphic: keep your fridge alive in a Durban summer",
    imageFit: "cover",
    body: [
      "Every year, as the temperature climbs in November and December, our phones get busier. Fridges that have been fine all winter start to struggle, freezers lose their edge and display coolers in shops start to sweat. It is not a coincidence. Summer is the hardest season for refrigeration, and Durban's heat and humidity make it harder still. The good news is that a few habits prevent most of the problems.",
      "## Why summer is harder on fridges",
      ul(
        "The condenser has to push heat into warmer air, so the compressor runs longer and at higher pressure.",
        "Humid air brings more moisture in each time the door opens, which means more frost and more load on the defrost system.",
        "More people, more drinks, more food and more door openings all raise the load.",
        "Thunderstorms, power surges and outages are most common in summer.",
        "Hot kitchens, garages and outbuildings can exceed what a domestic fridge is designed to handle."
      ),
      img(
        g("domestic-fridge.jpg"),
        "Large side-by-side fridge freezer",
        "Give the fridge room to breathe. A few centimetres of clearance makes a real difference in summer."
      ),
      "## Ten habits that help",
      "## 1. Give it space",
      "Leave a gap of several centimetres behind and beside the fridge for airflow, and never box it in with cabinets without ventilation. Heat that cannot escape forces the compressor to work harder.",
      "## 2. Clean the condenser coil",
      "Dust and pet hair on the coil act like a blanket. Vacuum it every three to six months, and more often if you have pets. It is the single most effective maintenance job you can do yourself.",
      "## 3. Keep it away from heat",
      "Do not place a fridge next to an oven, a dishwasher exhaust or in direct sun. Garage fridges in a Durban summer are working in conditions that can exceed their rating, so check the climate class on the data plate.",
      "## 4. Do not overload the door",
      "Every time the door opens, warm, humid air gets in. Decide what you want before you open it, and close it promptly. Do not stand with the door open while you think.",
      "## 5. Check the door seals",
      "A worn gasket leaks cold air all day long. Test it with a sheet of paper, clean the seal with warm soapy water and replace it if it is cracked or soft.",
      "## 6. Set the right temperature",
      "Around 3 to 5 degrees Celsius for the fridge and minus 18 for the freezer is right. Setting it colder than needed wastes power and can freeze food. Check with a thermometer instead of trusting the dial.",
      "## 7. Let hot food cool first",
      "Putting a hot pot straight into the fridge raises the temperature for everything else. Let it cool a little, cover it and then refrigerate it promptly.",
      "## 8. Protect against surges",
      "Summer storms bring spikes and outages. A surge protector with a time delay, designed for fridges, protects the compressor and electronics. Unplug the fridge during a nearby lightning storm if you can.",
      "## 9. Prepare for power cuts",
      "Keep frozen water bottles in the freezer, a cooler box ready and a thermometer in the fridge. Do not open the doors during an outage. Our load shedding guide covers this in more detail.",
      "## 10. Listen and look",
      "Notice new noises, ice build-up, water on the floor and food spoiling faster. These are early warnings, and small repairs in November are much cheaper than emergency calls on 24 December.",
      "## For shops and restaurants",
      ul(
        "Schedule a service before the festive season. Clean condenser coils and check refrigerant levels, defrost systems and door seals.",
        "Check that condensing units have shade and airflow, not stacked boxes and kitchen grease.",
        "Do not overstock display coolers. Air has to circulate.",
        "Train staff to close doors and keep records of temperatures.",
        "Have your technician's number ready for peak days."
      ),
      "If your fridge or cooler is struggling already, or you want a service before the busy season, call us on 083 538 5106. We service homes and businesses across Durban, Umhlanga, Kloof, Hillcrest and the surrounding area."
    ],
  },
  {
    slug: "beverage-cooler-not-cooling",
    title: "Beverage cooler not cooling? Check these before you call",
    date: "2026-10-27",
    readMinutes: 6,
    excerpt:
      "Glass-door drink coolers are the workhorses of shops and restaurants. When yours warms up, these are the usual causes, easiest first.",
    image: "/images/blog/cover-beverage-cooler.jpg",
    imageAlt: "Cover graphic: beverage cooler not cooling, check this",
    imageFit: "cover",
    body: [
      "A glass-door beverage cooler earns its keep every day. It chills your stock, shows your products and brings in impulse sales. When it stops cooling, you lose all three. The good news is that many drink-cooler problems are simple and cheap, and some you can sort out yourself in a few minutes. Work through this list in order, easiest first.",
      "## 1. Is it actually getting power?",
      "Check that the plug is in, the socket is working and the switch or breaker has not tripped. Look at the display or the internal light. Extension leads and multi-plugs are common culprits, especially when a cooler shares a socket with other equipment. A cooler needs its own good, properly rated socket.",
      "## 2. Is the thermostat set correctly?",
      "Staff, cleaners and customers sometimes bump the dial. Check it is on the setting you expect, and that the controller is not in defrost or standby. A typical drinks setting is around 2 to 5 degrees Celsius.",
      img(
        g("cooldrink-fridge.jpg"),
        "Double glass-door beverage cooler",
        "Two-door upright coolers hold a lot of stock and are sensitive to blocked airflow and dirty condensers."
      ),
      "## 3. Is the condenser clogged?",
      "This is the most common cause of a cooler that runs all the time and still gets warm. The condenser is the finned coil, usually at the bottom or back, where the system gets rid of heat. Dust, grease and packaging blocks it, and the compressor overheats.",
      ul(
        "Switch the cooler off and unplug it.",
        "Remove the grille at the bottom or back.",
        "Brush and vacuum the coil gently, going with the fins, not across them.",
        "Never use a pressure washer on the fins or the electrical parts."
      ),
      "Cleaning the condenser every few months is the best prevention. In a dusty or greasy shop, do it monthly.",
      "## 4. Is the airflow blocked inside?",
      "Coolers rely on a fan to circulate cold air. If the shelves are packed tight against the back, or boxes cover the air vents, the air cannot move. Leave gaps at the back and the top, do not push cartons against the vents and do not overload the shelves.",
      "## 5. Is the fan working?",
      "There are usually two fans: one inside blowing air across the evaporator and one outside cooling the condenser and compressor. If either has stopped, the cooler will warm up. You can often hear or feel them. A fan that is silent, slow or noisy needs replacing.",
      "## 6. Is the door sealing?",
      "Check the gasket around the glass door for tears, hardening or dirt. Make sure the door closes fully, and that the self-closing mechanism works. Do not let staff prop the door open during restocking. A door that does not seal also causes condensation on the glass and ice on the evaporator.",
      "## 7. Is it iced up?",
      "If the evaporator at the back is covered with ice, the defrost has failed or the cooler is being overloaded with warm stock. Turn it off, empty it into another fridge and let it defrost fully. If ice comes back quickly, the defrost heater, timer or sensor needs checking.",
      "## 8. Is the room too hot?",
      "A cooler in direct sun, next to a kitchen or in a tiny stockroom has to work much harder. Check the ambient temperature and move it if you can. Leave space on all sides for ventilation, as the manufacturer recommends.",
      "## 9. Did you load a lot of warm stock?",
      "A fresh delivery of warm drinks can take hours to chill. Load in stages, and where possible keep a second cooler or fridge for pre-chilling.",
      "## When it is time to call a technician",
      "If you have worked through the list and the cooler still will not cool, the cause is probably one of the following:",
      ul(
        "A failing compressor or starting parts.",
        "A refrigerant leak.",
        "A faulty controller, sensor or relay.",
        "A blocked or damaged evaporator.",
        "A failed defrost heater or timer."
      ),
      "These need proper tools and testing. Early help is cheaper, and it protects your stock and your sales.",
      "## Keep it running",
      ul(
        "Clean the condenser every one to three months.",
        "Check the door gasket weekly and wipe the glass.",
        "Keep the temperature log and check the display each day.",
        "Have the cooler serviced at least twice a year, more often in a busy shop.",
        "Keep your technician's number near the cooler."
      ),
      "We repair and service beverage coolers, display fridges and cold rooms for shops, restaurants and bakeries across Durban and the surrounding suburbs. If your cooler is warm, call 083 538 5106 and we will help you work out what to do next."
    ],
  },
];
