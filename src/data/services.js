/**
 * Centralized Services & Pricing Catalog Data
 * All services and pricing are data-driven and can be customized here.
 */

export const SERVICE_CATEGORIES = [
  {
    id: "ac",
    name: "AC Repair & Service",
    shortName: "AC",
    iconName: "Wind",
    shortDescription: "Doorstep split and window AC repair, deep jet foam servicing, gas charging, and installation.",
    commonIssues: [
      "Not cooling properly or blowing warm air",
      "Indoor unit water leakage & pipe dripping",
      "Low gas pressure / refrigerant refill",
      "Noisy compressor or fan vibration"
    ],
    startingPrice: 399,
    priceNote: "Starting from ₹399",
    categoryFilter: "AC"
  },
  {
    id: "refrigerator",
    name: "Refrigerator Repair",
    shortName: "Refrigerator",
    iconName: "Refrigerator",
    shortDescription: "Single door, double door, and side-by-side fridge diagnostics, compressor repair, and gas refilling.",
    commonIssues: [
      "Fridge not cooling or freezer cooling only",
      "Excess frost/ice buildup in freezer",
      "Clicking sound or compressor not starting",
      "Gas leakage & thermostat issues"
    ],
    startingPrice: 299,
    priceNote: "Starting from ₹299",
    categoryFilter: "Refrigerator"
  },
  {
    id: "washing-machine",
    name: "Washing Machine Repair",
    shortName: "Washing Machine",
    iconName: "WashingMachine", // will map to custom or Lucide
    shortDescription: "Repairs for front load, top load, and semi-automatic machines across all major brands.",
    commonIssues: [
      "Drum not spinning or rotating sluggishly",
      "Water drainage failure or pump blockage",
      "Severe vibrating, banging or noise",
      "Control board / PCB error codes"
    ],
    startingPrice: 349,
    priceNote: "Starting from ₹349",
    categoryFilter: "Washing Machine"
  },
  {
    id: "ro",
    name: "RO Service & Repair",
    shortName: "RO Purifier",
    iconName: "Droplets",
    shortDescription: "Filter replacements, membrane flushing, booster pump repairs, and TDS level balancing.",
    commonIssues: [
      "Very slow or no water flow from tap",
      "High TDS, strange taste or water odour",
      "Continuous water leakage from bottom",
      "Booster pump not turning on or vibrating"
    ],
    startingPrice: 299,
    priceNote: "Starting from ₹299",
    categoryFilter: "RO"
  },
  {
    id: "geyser",
    name: "Geyser Repair & Service",
    shortName: "Geyser",
    iconName: "Flame",
    shortDescription: "Instant and storage electric geyser element replacement, thermostat repair, and tank descaling.",
    commonIssues: [
      "Water not heating or taking too long",
      "Water dripping from inlet/outlet valve",
      "Electric shock or MCB tripping issue",
      "Thermostat sensor and element failure"
    ],
    startingPrice: 349,
    priceNote: "Starting from ₹349",
    categoryFilter: "Geyser"
  },
  {
    id: "chimney",
    name: "Chimney Cleaning & Repair",
    shortName: "Chimney",
    iconName: "Fan",
    shortDescription: "Deep baffle/filter degreasing, motor carbon cleaning, touch panel repair, and ducting work.",
    commonIssues: [
      "Low suction power & heavy smoke in kitchen",
      "Excess oil dripping from baffle filters",
      "Loud humming or rattling motor noise",
      "Touch sensor or LED light not responding"
    ],
    startingPrice: 499,
    priceNote: "Starting from ₹499",
    categoryFilter: "Chimney"
  },
  {
    id: "tv",
    name: "LED & Smart TV Repair",
    shortName: "TV Repair",
    iconName: "Tv",
    shortDescription: "Screen backlight fixes, sound without display diagnosis, motherboard and power supply repairs.",
    commonIssues: [
      "Sound working but screen is black/dim",
      "Horizontal or vertical lines on display",
      "TV will not turn on / red standby light blinks",
      "HDMI port or audio output malfunctioning"
    ],
    startingPrice: 299,
    priceNote: "Starting from ₹299",
    categoryFilter: "TV"
  },
  {
    id: "microwave",
    name: "Microwave Oven Repair",
    shortName: "Microwave",
    iconName: "Microwave",
    shortDescription: "Solo, grill, and convection microwave magnetron repair, keypad fixes, and turntable motors.",
    commonIssues: [
      "Running but not heating food",
      "Sparks or burning smell inside chamber",
      "Turntable plate not rotating smoothly",
      "Keypad membrane buttons unresponsive"
    ],
    startingPrice: 299,
    priceNote: "Starting from ₹299",
    categoryFilter: "Microwave"
  }
];

export const PRICING_CATALOGUE = [
  // GENERAL
  {
    id: "gen-inspection",
    category: "General",
    name: "Doorstep Diagnostic & Inspection",
    shortDescription: "Comprehensive on-site troubleshooting for any household appliance by a technician.",
    price: 199,
    oldPrice: 299,
    priceLabel: "Starting from ₹199",
    features: [
      "Complete physical & electrical check",
      "Detailed diagnosis of fault",
      "Transparent upfront repair quote",
      "Adjustable against final repair bill"
    ],
    note: "Waived if major repair is approved",
    icon: "Wrench",
    isPopular: true
  },

  // AC
  {
    id: "ac-split-service",
    category: "AC",
    name: "Split AC Jet Foam Service",
    shortDescription: "Deep indoor and outdoor unit cleaning using high-pressure foam jet and coil wash.",
    price: 499,
    oldPrice: 649,
    priceLabel: "Starting from ₹499",
    features: [
      "Indoor cooling coil foam wash",
      "Outdoor condenser blower cleanup",
      "Drain pipe unclogging & tray wash",
      "Filter sanitization & airflow check"
    ],
    note: "Spare parts & gas extra if needed",
    icon: "Wind",
    isPopular: true
  },
  {
    id: "ac-window-service",
    category: "AC",
    name: "Window AC General Service",
    shortDescription: "Complete deep cleaning of front grille, cooling fins, and base tray descaling.",
    price: 399,
    oldPrice: 499,
    priceLabel: "Starting from ₹399",
    features: [
      "Filter and front panel clean",
      "Coil cleaning & dirt removal",
      "Motor lubrication & noise check",
      "Electrical connection tightening"
    ],
    note: "On-site servicing",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-split-install",
    category: "AC",
    name: "Split AC Installation",
    shortDescription: "Professional wall bracket mounting, copper pipe laying, vacuuming, and testing.",
    price: 1499,
    oldPrice: 1799,
    priceLabel: "Starting from ₹1,499",
    features: [
      "Precision indoor bracket mounting",
      "Outdoor stand placement & leveling",
      "Pipe connection and vacuum leak check",
      "Cooling performance verification"
    ],
    note: "Copper piping & brackets extra if not supplied",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-gas-refill",
    category: "AC",
    name: "AC Gas Leak Fix & Refill",
    shortDescription: "Nitrogen pressure testing, brazing leak repair, vacuuming, and full refrigerant charge.",
    price: 1899,
    oldPrice: 2200,
    priceLabel: "Starting from ₹1,899",
    features: [
      "Thorough leak detection & brazing",
      "High-vacuum air evacuation",
      "Pure R32 / R410A / R22 gas top-up",
      "Amperage & cooling test"
    ],
    note: "Price varies by refrigerant type & tonnage",
    icon: "Wind",
    isPopular: true
  },

  // REFRIGERATOR
  {
    id: "fridge-check",
    category: "Refrigerator",
    name: "Refrigerator Diagnostic Visit",
    shortDescription: "Complete checkup of cooling coils, compressor relay, defrost sensor, and thermostat.",
    price: 299,
    oldPrice: 399,
    priceLabel: "Starting from ₹299",
    features: [
      "Compressor electrical test",
      "Thermostat & sensor diagnostic",
      "Door gasket seal inspection",
      "Same-day written quote"
    ],
    note: "Adjusted if repair is booked",
    icon: "Refrigerator",
    isPopular: false
  },
  {
    id: "fridge-gas-refill",
    category: "Refrigerator",
    name: "Single Door Fridge Gas Refill",
    shortDescription: "Capillary tube checking, pin valve installation, and authentic refrigerant recharging.",
    price: 1499,
    oldPrice: 1799,
    priceLabel: "Starting from ₹1,499",
    features: [
      "Complete nitrogen leak check",
      "Filter dryer replacement",
      "Grade-A refrigerant charge",
      "Thermostat calibration"
    ],
    note: "Includes leak testing",
    icon: "Refrigerator",
    isPopular: true
  },
  {
    id: "fridge-double-door",
    category: "Refrigerator",
    name: "Double Door Frost-Free Repair",
    shortDescription: "Diagnostic and repair for no-frost timer, bimetal sensor, thermal fuse, and fan motor.",
    price: 499,
    oldPrice: 650,
    priceLabel: "Starting from ₹499",
    features: [
      "Defrost heater & timer test",
      "Evaporator fan motor check",
      "PCB control signal test",
      "Airflow baffle inspection"
    ],
    note: "Parts charged as per actuals",
    icon: "Refrigerator",
    isPopular: false
  },

  // WASHING MACHINE
  {
    id: "wm-top-service",
    category: "Washing Machine",
    name: "Top Load Washer Service",
    shortDescription: "Routine servicing, drum scale cleaning, filter wash, and belt tensioning.",
    price: 549,
    oldPrice: 699,
    priceLabel: "Starting from ₹549",
    features: [
      "Lint filter cleaning & wash",
      "Drain valve & hose unclogging",
      "Motor belt tension adjustment",
      "Suspension rod balance check"
    ],
    note: "All major brands covered",
    icon: "WashingMachine",
    isPopular: true
  },
  {
    id: "wm-front-service",
    category: "Washing Machine",
    name: "Front Load Washer Service",
    shortDescription: "Descaling treatment, door boot seal cleaning, drain pump clear-out, and calibration.",
    price: 699,
    oldPrice: 899,
    priceLabel: "Starting from ₹699",
    features: [
      "Chemical drum descaling",
      "Door rubber gasket fungal clean",
      "Drain pump filter cleanout",
      "Shock absorber & balance test"
    ],
    note: "Recommended every 6–9 months",
    icon: "WashingMachine",
    isPopular: true
  },
  {
    id: "wm-motor-repair",
    category: "Washing Machine",
    name: "Drum & Spin Repair",
    shortDescription: "Repairing spinning failure, noisy drum bearings, spider arm issues, and drain pumps.",
    price: 449,
    oldPrice: 599,
    priceLabel: "Starting from ₹449",
    features: [
      "Drive belt & pulley check",
      "Motor capacitor test",
      "Pressure switch inspection",
      "Drain motor mechanism check"
    ],
    note: "Diagnosis + basic repair labour",
    icon: "WashingMachine",
    isPopular: false
  },

  // RO PURIFIER
  {
    id: "ro-general-service",
    category: "RO",
    name: "RO General Service & TDS Check",
    shortDescription: "Sediment and carbon pre-filter clean, membrane flush, and calibrated TDS tuning.",
    price: 299,
    oldPrice: 399,
    priceLabel: "Starting from ₹299",
    features: [
      "Physical filter cleaning",
      "Water pressure testing",
      "Calibrated digital TDS meter check",
      "Leakage inspection at connectors"
    ],
    note: "Filter replacement parts extra",
    icon: "Droplets",
    isPopular: true
  },
  {
    id: "ro-installation",
    category: "RO",
    name: "RO Installation / Uninstallation",
    shortDescription: "Mounting on wall, inlet diverter valve fitting, reject water line setup, and test run.",
    price: 399,
    oldPrice: 499,
    priceLabel: "Starting from ₹399",
    features: [
      "Precision wall drill & mounting",
      "Inlet brass valve connection",
      "Waste water tube routing",
      "Initial flush & pure water testing"
    ],
    note: "Plumbing modifications not included",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "ro-filter-kit",
    category: "RO",
    name: "Complete RO Filter Replacement",
    shortDescription: "Full set replacement of Sediment, Carbon, Post-Carbon, and RO Membrane.",
    price: 1799,
    oldPrice: 2200,
    priceLabel: "Starting from ₹1,799",
    features: [
      "Spun sediment filter replaced",
      "Activated carbon block installed",
      "High-flow RO membrane replacement",
      "Post-carbon / mineralizer cartridge"
    ],
    note: "Includes genuine compatible filters",
    icon: "Droplets",
    isPopular: true
  },

  // GEYSER
  {
    id: "geyser-service",
    category: "Geyser",
    name: "Geyser General Service & Descaling",
    shortDescription: "Draining tank, hard water scale removal from heating coil, and thermostat test.",
    price: 349,
    oldPrice: 450,
    priceLabel: "Starting from ₹349",
    features: [
      "Water tank flushing & descaling",
      "Heating element limescale clean",
      "Thermostat cutoff check",
      "Safety pressure relief valve test"
    ],
    note: "Ensures fast heating & lower power use",
    icon: "Flame",
    isPopular: true
  },
  {
    id: "geyser-install",
    category: "Geyser",
    name: "Geyser Installation / Uninstallation",
    shortDescription: "Heavy-duty wall anchor fixing, inlet-outlet connection, and safety valve check.",
    price: 449,
    oldPrice: 550,
    priceLabel: "Starting from ₹449",
    features: [
      "High-load wall anchor mounting",
      "Connection pipe hookup & Teflon sealing",
      "Electric connection testing",
      "First fill & safety cutoff check"
    ],
    note: "Angle valves / pipes extra if needed",
    icon: "Flame",
    isPopular: false
  },

  // CHIMNEY
  {
    id: "chimney-basic-clean",
    category: "Chimney",
    name: "Kitchen Chimney Basic Cleaning",
    shortDescription: "Chemical degreasing of baffle/mesh filters, outer hood cleaning, and tray wash.",
    price: 499,
    oldPrice: 650,
    priceLabel: "Starting from ₹499",
    features: [
      "Baffle/cassette filter degreasing",
      "Oil collector cup cleaning",
      "Exterior hood wash & polish",
      "Motor suction test"
    ],
    note: "Quick on-site service",
    icon: "Fan",
    isPopular: false
  },
  {
    id: "chimney-deep-clean",
    category: "Chimney",
    name: "Deep Cleaning & Motor Degreasing",
    shortDescription: "Complete disassembly of motor housing, blower impeller degreasing, and carbon wash.",
    price: 899,
    oldPrice: 1199,
    priceLabel: "Starting from ₹899",
    features: [
      "Full internal impeller cleaning",
      "Motor blower carbon removal",
      "Heavy oil & grease dissolution",
      "Ducting pipe attachment check"
    ],
    note: "Restores optimum kitchen suction",
    icon: "Fan",
    isPopular: true
  },

  // TV
  {
    id: "tv-inspection",
    category: "TV",
    name: "LED / Smart TV Diagnostic",
    shortDescription: "Diagnosis for no display, audio faults, screen flickering, or power supply failure.",
    price: 299,
    oldPrice: 399,
    priceLabel: "Starting from ₹299",
    features: [
      "Power board voltage testing",
      "LED backlight strip check",
      "Motherboard signal diagnosis",
      "Accurate cost estimate"
    ],
    note: "Screen panel replacement quoted separately",
    icon: "Tv",
    isPopular: false
  },
  {
    id: "tv-wall-mount",
    category: "TV",
    name: "TV Wall Mounting / Installation",
    shortDescription: "Secure wall mounting on brick/concrete, leveling, HDMI connection, and cable tidying.",
    price: 399,
    oldPrice: 499,
    priceLabel: "Starting from ₹399",
    features: [
      "Heavy-duty wall bracket alignment",
      "Up to 55-inch TV installation",
      "Port accessibility check",
      "Power-on display setup"
    ],
    note: "Wall bracket extra if not supplied",
    icon: "Tv",
    isPopular: true
  },

  // MICROWAVE
  {
    id: "microwave-inspection",
    category: "Microwave",
    name: "Microwave Diagnostic & Basic Repair",
    shortDescription: "Testing magnetron, high-voltage diode, thermal fuse, door switches, and control PCB.",
    price: 299,
    oldPrice: 399,
    priceLabel: "Starting from ₹299",
    features: [
      "High voltage circuit diagnosis",
      "Magnetron heating check",
      "Door interlock switch test",
      "PCB touch membrane evaluation"
    ],
    note: "Magnetron / capacitor parts quoted on-site",
    icon: "Microwave",
    isPopular: true
  }
];

export const PRICING_FILTER_CATEGORIES = [
  "All",
  "AC",
  "Refrigerator",
  "Washing Machine",
  "RO",
  "Geyser",
  "Chimney",
  "TV",
  "Microwave"
];
