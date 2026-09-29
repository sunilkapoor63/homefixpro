/**
 * Centralized Services & Pricing Catalog Data
 * Updated with exact rate card prices and services.
 */

export const SERVICE_CATEGORIES = [
  {
    id: "ac",
    name: "AC Repair & Service",
    shortName: "AC",
    iconName: "Wind",
    shortDescription: "Doorstep split and window AC repair, servicing, installation, uninstall, and gas charging.",
    commonIssues: [
      "Not cooling properly or blowing warm air",
      "Indoor unit water leakage & pipe dripping",
      "Low gas pressure / refrigerant refill (R32, R22, R410)",
      "Installation & uninstallation across Gurugram"
    ],
    startingPrice: 350,
    priceNote: "Service from ₹350",
    categoryFilter: "AC"
  },
  {
    id: "refrigerator",
    name: "Refrigerator Repair",
    shortName: "Refrigerator",
    iconName: "Refrigerator",
    shortDescription: "Single door, double door, side by side fridge diagnostics, deep freezer, and gas refilling.",
    commonIssues: [
      "Fridge not cooling or freezer cooling only",
      "Gas refilling (Single Door, Double Door, Side by Side)",
      "Compressor not starting or clicking noise",
      "Deep freezer temperature & cooling issues"
    ],
    startingPrice: 199,
    priceNote: "Checkup ₹199 | Gas from ₹1,850",
    categoryFilter: "Refrigerator"
  },
  {
    id: "chimney",
    name: "Chimney Cleaning & Repair",
    shortName: "Chimney",
    iconName: "Fan",
    shortDescription: "Button, touch, flap with sensor, and island chimney deep cleaning and installation.",
    commonIssues: [
      "Low suction power & heavy smoke in kitchen",
      "Excess oil dripping from baffle filters",
      "Push button, touch control & motion sensor issues",
      "Chimney wall installation & duct alignment"
    ],
    startingPrice: 500,
    priceNote: "Install ₹500 | Clean from ₹950",
    categoryFilter: "Chimney"
  },
  {
    id: "hob",
    name: "Gas Hob Service & Repair",
    shortName: "Gas Hob",
    iconName: "Flame",
    shortDescription: "2, 3, and 4 burner built-in hob servicing, nozzle cleaning, and auto-ignition repair.",
    commonIssues: [
      "Low flame or uneven yellow flame",
      "Burner nozzle blocked or clogged",
      "Auto spark ignition not firing",
      "Gas leak smell or tight control knob"
    ],
    startingPrice: 400,
    priceNote: "Service from ₹400",
    categoryFilter: "Hob"
  },
  {
    id: "ro",
    name: "RO Water Purifier",
    shortName: "RO Purifier",
    iconName: "Droplets",
    shortDescription: "RO servicing, wall mount & UTC installation, uninstallation, and 1-year AMC plans.",
    commonIssues: [
      "Very slow or no water flow from tap",
      "High TDS, strange taste or water odour",
      "Under-the-counter (UTC) installation & uninstall",
      "1-Year comprehensive AMC maintenance"
    ],
    startingPrice: 200,
    priceNote: "Service from ₹200",
    categoryFilter: "RO"
  },
  {
    id: "geyser",
    name: "Geyser Repair & Service",
    shortName: "Geyser",
    iconName: "Flame",
    shortDescription: "Kitchen instant geyser (2–5L) to 10–25L storage geyser servicing, installation & removal.",
    commonIssues: [
      "Water not heating or taking too long",
      "Water dripping from inlet/outlet valve",
      "Heating element descaling & thermostat test",
      "Geyser wall installation & safe uninstall"
    ],
    startingPrice: 300,
    priceNote: "Uninstall ₹300 | Service from ₹350",
    categoryFilter: "Geyser"
  },
  {
    id: "washing-machine",
    name: "Washing Machine Repair",
    shortName: "Washing Machine",
    iconName: "WashingMachine",
    shortDescription: "Basic service and deep cleaning for semi-automatic, top load, and front load machines.",
    commonIssues: [
      "Drum not spinning or rotating sluggishly",
      "Water drainage failure or pump blockage",
      "Tub fungus, scale buildup & bad odor",
      "High vibration, banging noise & balance issues"
    ],
    startingPrice: 500,
    priceNote: "Service from ₹500",
    categoryFilter: "Washing Machine"
  },
  {
    id: "microwave",
    name: "Microwave Oven Repair",
    shortName: "Microwave",
    iconName: "Microwave",
    shortDescription: "Checkup diagnostic visits, cavity deep cleaning, and heating repairs for solo/grill/convection.",
    commonIssues: [
      "Running but not heating food",
      "Internal cavity grease and burnt smell",
      "Turntable plate not rotating smoothly",
      "Keypad membrane buttons unresponsive"
    ],
    startingPrice: 199,
    priceNote: "Checkup ₹199 | Service ₹500",
    categoryFilter: "Microwave"
  },
  {
    id: "other-services",
    name: "Other Home Services",
    shortName: "Other Services",
    iconName: "Wrench",
    shortDescription: "Doorstep service for Water Dispensers, TV mounting/unmounting, Fans, and Air Purifiers.",
    commonIssues: [
      "TV wall mount installation & uninstall",
      "Water dispenser hot/cold servicing",
      "Air purifier HEPA filter & sensor cleaning",
      "Ceiling fan installation & uninstallation"
    ],
    startingPrice: 200,
    priceNote: "Starting from ₹200",
    categoryFilter: "Other Services"
  }
];

export const PRICING_CATALOGUE = [
  // GENERAL
  {
    id: "checkup-visit",
    category: "General",
    name: "Check Up (Visit Charge)",
    shortDescription: "Doorstep check up and diagnostic inspection visit by an experienced technician across Gurugram.",
    price: 199,
    oldPrice: 299,
    priceLabel: "₹199",
    features: [
      "Applicable on all appliances (except Other Services)",
      "Complete physical & electrical fault check",
      "Clear diagnosis with upfront repair quotation",
      "Technician visits at your scheduled time slot"
    ],
    note: "Applicable on all appliances as per rate card",
    icon: "Wrench",
    isPopular: true
  },

  // 1. AC
  {
    id: "ac-window-service",
    category: "AC",
    name: "Window AC Service",
    shortDescription: "Complete cleaning of front grille, cooling fins, filter wash, and tray clearing.",
    price: 350,
    oldPrice: 450,
    priceLabel: "₹350",
    features: [
      "Front panel & filter deep cleaning",
      "Cooling coil descaling & dirt removal",
      "Blower & fan motor inspection",
      "Operating current & airflow check"
    ],
    note: "Standard Window AC service",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-split-service",
    category: "AC",
    name: "Split AC Service",
    shortDescription: "Deep cleaning of indoor cooling coil, outdoor condenser wash, and airflow check.",
    price: 400,
    oldPrice: 500,
    priceLabel: "₹400",
    features: [
      "Indoor cooling coil wash",
      "Outdoor condenser blower cleanup",
      "Drain pipe clearing & tray wash",
      "Air filter sanitization & performance check"
    ],
    note: "Standard Split AC service",
    icon: "Wind",
    isPopular: true
  },
  {
    id: "ac-vrv-service",
    category: "AC",
    name: "VRV / Unit Service",
    shortDescription: "Comprehensive servicing for VRV / VRF indoor duct and cassette units.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "VRV indoor unit deep servicing",
      "Airflow & temperature sensor check",
      "Filter cleaning & coil inspection",
      "Operating pressure verification"
    ],
    note: "Price per VRV / Unit",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-cassette-service",
    category: "AC",
    name: "Cassette AC Service",
    shortDescription: "Specialized deep servicing for ceiling cassette AC units in homes and offices.",
    price: 900,
    oldPrice: 1100,
    priceLabel: "₹900",
    features: [
      "Ceiling cassette grille & filter wash",
      "Internal cooling coil deep clean",
      "Drain pump & pipe unclogging",
      "Blower motor cleaning & noise check"
    ],
    note: "Ceiling cassette AC unit",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-split-install",
    category: "AC",
    name: "Split AC Installation",
    shortDescription: "Professional wall bracket mounting, outdoor placement, vacuuming, and testing.",
    price: 1500,
    oldPrice: 1800,
    priceLabel: "₹1,500",
    features: [
      "Indoor unit wall bracket alignment & fixing",
      "Outdoor unit placement & leveling",
      "Copper pipe connection & leak check",
      "Cooling performance & amperage test"
    ],
    note: "Copper piping & brackets extra if not supplied",
    icon: "Wind",
    isPopular: true
  },
  {
    id: "ac-window-install",
    category: "AC",
    name: "Window AC Installation",
    shortDescription: "Secure window frame mounting, bracket placement, and test run.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "Window frame bracket mounting",
      "Unit placement, leveling & side sealing",
      "Electrical connection & testing"
    ],
    note: "Standard window installation",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-split-uninstall",
    category: "AC",
    name: "Split AC Uninstall",
    shortDescription: "Safe refrigerant lock/pump-down and dismounting of indoor and outdoor units.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "Refrigerant pump-down to prevent gas loss",
      "Indoor & outdoor unit dismounting",
      "Copper pipe and cable safe packing"
    ],
    note: "Safe uninstall without refrigerant loss",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-window-uninstall",
    category: "AC",
    name: "Window AC Uninstall",
    shortDescription: "Safe unit removal from window frame and bracket dismounting.",
    price: 300,
    oldPrice: 400,
    priceLabel: "₹300",
    features: [
      "Safe unit removal from window",
      "Bracket dismounting & tidy wrap"
    ],
    note: "Standard window unit removal",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-gas-r22",
    category: "AC",
    name: "R-22 Gas Charging (1.5 Ton)",
    shortDescription: "Nitrogen pressure leak testing, vacuuming, and pure R-22 refrigerant refill.",
    price: 3000,
    oldPrice: 3500,
    priceLabel: "₹3,000",
    features: [
      "Nitrogen leak detection & brazing",
      "High vacuum air evacuation",
      "Pure R-22 refrigerant charge (1.5 Ton)",
      "Cooling performance test"
    ],
    note: "Copper Pipe: ₹950/m",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "ac-gas-r32",
    category: "AC",
    name: "R-32 Gas Charging (1.5 Ton)",
    shortDescription: "High-grade nitrogen leak testing, vacuuming, and pure R-32 gas charging.",
    price: 3200,
    oldPrice: 3800,
    priceLabel: "₹3,200",
    features: [
      "Nitrogen leak detection & brazing",
      "Complete vacuum evacuation",
      "Pure R-32 refrigerant charge (1.5 Ton)",
      "Pressure calibration & amperage check"
    ],
    note: "Copper Pipe: ₹950/m",
    icon: "Wind",
    isPopular: true
  },
  {
    id: "ac-gas-r410",
    category: "AC",
    name: "R-410 Gas Charging (1.5 Ton)",
    shortDescription: "High-pressure nitrogen leak testing, vacuuming, and pure R-410A gas refill.",
    price: 3500,
    oldPrice: 4000,
    priceLabel: "₹3,500",
    features: [
      "High-pressure nitrogen leak test",
      "Deep vacuum air evacuation",
      "Pure R-410A refrigerant charge (1.5 Ton)",
      "Cooling performance verification"
    ],
    note: "Copper Pipe: ₹950/m",
    icon: "Wind",
    isPopular: false
  },

  // 2. REFRIGERATOR
  {
    id: "fridge-single-gas",
    category: "Refrigerator",
    name: "Single Door Fridge Gas Refilling",
    shortDescription: "Pin valve installation, nitrogen leak check, and authentic refrigerant charging.",
    price: 1850,
    oldPrice: 2200,
    priceLabel: "₹1,850",
    features: [
      "Pin valve fitting & nitrogen leak check",
      "Filter dryer replacement",
      "Grade-A refrigerant charging",
      "Thermostat & cooling test"
    ],
    note: "Single door refrigerator",
    icon: "Refrigerator",
    isPopular: true
  },
  {
    id: "fridge-double-gas",
    category: "Refrigerator",
    name: "Double Door Fridge Gas Refilling",
    shortDescription: "Capillary tube check, leak repair, and genuine refrigerant recharge.",
    price: 2250,
    oldPrice: 2600,
    priceLabel: "Starts From ₹2,250",
    features: [
      "Leak detection & brazing repair",
      "High vacuum evacuation",
      "Refrigerant charging (frost-free)",
      "Evaporator & defrost cycle check"
    ],
    note: "Starts From ₹2,250 (Depends on Ltr.)",
    icon: "Refrigerator",
    isPopular: true
  },
  {
    id: "fridge-side-gas",
    category: "Refrigerator",
    name: "Side by Side Fridge Gas Refilling",
    shortDescription: "Specialized charging for multi-door, French door, and side-by-side inverter fridges.",
    price: 4000,
    oldPrice: 4600,
    priceLabel: "₹4,000",
    features: [
      "Dual evaporator & inverter circuit check",
      "High vacuum leak detection",
      "OEM specified refrigerant charge",
      "Digital sensor & freezer calibration"
    ],
    note: "Side by Side / Multi-door refrigerators",
    icon: "Refrigerator",
    isPopular: false
  },
  {
    id: "fridge-freezer-gas",
    category: "Refrigerator",
    name: "Deep Freezer Gas Refilling",
    shortDescription: "Commercial and domestic deep freezer leak inspection and complete gas charging.",
    price: 2500,
    oldPrice: 3000,
    priceLabel: "Starts From ₹2,500",
    features: [
      "Nitrogen pressure leak test",
      "Capillary & filter inspection",
      "Full gas recharge for sub-zero cooling",
      "Thermostat temperature verification"
    ],
    note: "Starts From ₹2,500 (Depends on Ltr.)",
    icon: "Refrigerator",
    isPopular: false
  },

  // 3. CHIMNEY
  {
    id: "chimney-install",
    category: "Chimney",
    name: "Chimney Installation",
    shortDescription: "Precision wall mounting, bracket fixing, duct pipe connection, and suction testing.",
    price: 500,
    oldPrice: 650,
    priceLabel: "₹500",
    features: [
      "Precision wall bracket mounting & alignment",
      "Ducting pipe attachment",
      "Power cord hookup & testing",
      "Suction performance check"
    ],
    note: "Ducting pipe extra if required",
    icon: "Fan",
    isPopular: false
  },
  {
    id: "chimney-button-clean",
    category: "Chimney",
    name: "Button Chimney Deep Cleaning",
    shortDescription: "Chemical degreasing of push-button chimney filters, blower impeller, and oil cups.",
    price: 950,
    oldPrice: 1200,
    priceLabel: "₹950",
    features: [
      "Baffle / mesh filter chemical degreasing",
      "Motor blower impeller washing",
      "Oil collector cup cleaning",
      "Outer stainless steel / glass hood polish"
    ],
    note: "Push button models",
    icon: "Fan",
    isPopular: false
  },
  {
    id: "chimney-touch-clean",
    category: "Chimney",
    name: "Touch Chimney Deep Cleaning",
    shortDescription: "Safe touch control panel cleaning, internal impeller degreasing, and filter wash.",
    price: 1050,
    oldPrice: 1350,
    priceLabel: "₹1,050",
    features: [
      "Touch panel safe cleaning & calibration",
      "Baffle filter intensive degreasing",
      "Motor impeller & housing wash",
      "Airflow suction restoration"
    ],
    note: "Touch control models",
    icon: "Fan",
    isPopular: true
  },
  {
    id: "chimney-sensor-clean",
    category: "Chimney",
    name: "Flap with Sensor Chimney Deep Cleaning",
    shortDescription: "Intensive cleaning for motion sensor and auto-opening flap chimneys.",
    price: 1350,
    oldPrice: 1650,
    priceLabel: "₹1,350",
    features: [
      "Motion sensor safe cleaning & test",
      "Auto-flap mechanism wash & lubrication",
      "Deep motor impeller oil clearance",
      "Internal oil collection chamber flush"
    ],
    note: "Auto-flap & motion sensor chimneys",
    icon: "Fan",
    isPopular: false
  },
  {
    id: "chimney-island-clean",
    category: "Chimney",
    name: "Island Chimney Deep Cleaning",
    shortDescription: "Specialized 360-degree degreasing and motor wash for ceiling-mounted island hoods.",
    price: 1500,
    oldPrice: 1900,
    priceLabel: "₹1,500",
    features: [
      "360-degree island hood deep cleaning",
      "High-power motor & blower degreasing",
      "Filter & ceiling ducting connection clean",
      "Complete oil dissolution treatment"
    ],
    note: "Ceiling-mounted island chimneys",
    icon: "Fan",
    isPopular: false
  },

  // 4. HOB
  {
    id: "hob-2-burner",
    category: "Hob",
    name: "2 Burner Hob Service",
    shortDescription: "Nozzle cleaning, gas valve inspection, and flame balancing for 2-burner hobs.",
    price: 400,
    oldPrice: 500,
    priceLabel: "₹400",
    features: [
      "Burner jet nozzle unclogging",
      "Gas pipe & control valve leak check",
      "Spark ignition electrode test",
      "Blue flame height calibration"
    ],
    note: "Standard 2-burner hob",
    icon: "Flame",
    isPopular: false
  },
  {
    id: "hob-3-burner",
    category: "Hob",
    name: "3 Burner Hob Service",
    shortDescription: "Comprehensive cleaning, nozzle clearing, and valve tuning for 3-burner gas hobs.",
    price: 500,
    oldPrice: 650,
    priceLabel: "₹500",
    features: [
      "Triple burner nozzle cleaning",
      "Gas control valve servicing",
      "Auto-ignition spark testing",
      "Simmer & high flame tuning"
    ],
    note: "Standard 3-burner hob",
    icon: "Flame",
    isPopular: true
  },
  {
    id: "hob-4-burner",
    category: "Hob",
    name: "4 Burner Hob Service",
    shortDescription: "Complete servicing, jet cleaning, and safety inspection for 4-burner kitchen hobs.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "4-burner complete deep servicing",
      "Nozzle jet & manifold clearance",
      "Pulse ignition & switch check",
      "Air-gas ratio balancing for pure blue flame"
    ],
    note: "Standard 4-burner hob",
    icon: "Flame",
    isPopular: false
  },

  // 5. RO WATER PURIFIER
  {
    id: "ro-service",
    category: "RO",
    name: "RO Service",
    shortDescription: "Filter cleaning, water flow inspection, and calibrated digital TDS level check.",
    price: 200,
    oldPrice: 300,
    priceLabel: "₹200",
    features: [
      "Physical filter cleaning & wash",
      "Calibrated digital TDS meter check",
      "Booster pump & pressure inspection",
      "Leakage check at pipes and elbows"
    ],
    note: "Spare filter parts extra if required",
    icon: "Droplets",
    isPopular: true
  },
  {
    id: "ro-wall-install",
    category: "RO",
    name: "Wall Mount RO Installation",
    shortDescription: "Wall bracket mounting, inlet diverter valve fitting, and waste pipe routing.",
    price: 400,
    oldPrice: 500,
    priceLabel: "₹400",
    features: [
      "Precision wall bracket drilling & mounting",
      "Inlet brass valve plumbing hookup",
      "Reject water tube routing",
      "Purity & flow rate verification"
    ],
    note: "Wall-mount RO purifiers",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "ro-utc-install",
    category: "RO",
    name: "UTC (Under-the-Counter) RO Installation",
    shortDescription: "Specialized under-sink installation with dedicated counter faucet and pressure tank.",
    price: 700,
    oldPrice: 900,
    priceLabel: "₹700",
    features: [
      "Under-sink mounting & plumbing connection",
      "Dedicated countertop faucet drilling & fitting",
      "Hydrostatic pressure tank setup",
      "Leak-tight line verification"
    ],
    note: "Under-the-counter (UTC) RO models",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "ro-wall-uninstall",
    category: "RO",
    name: "Wall Mount RO Uninstall",
    shortDescription: "Safe water line disconnection, wall dismounting, and tidy packing.",
    price: 300,
    oldPrice: 400,
    priceLabel: "₹300",
    features: [
      "Water inlet valve safe disconnection",
      "Unit wall dismounting",
      "Drain pipe and power adapter packing"
    ],
    note: "Standard wall RO removal",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "ro-utc-uninstall",
    category: "RO",
    name: "UTC RO Uninstall",
    shortDescription: "Under-sink RO faucet removal, pressure tank disconnection, and line capping.",
    price: 400,
    oldPrice: 500,
    priceLabel: "₹400",
    features: [
      "Under-sink faucet removal",
      "Pressure tank draining & disconnection",
      "Inlet plumbing valve cap sealing"
    ],
    note: "Under-the-counter RO removal",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "ro-amc-local",
    category: "RO",
    name: "Aqua Fresh Local RO AMC (1 Year)",
    shortDescription: "1 year complete annual maintenance contract with periodic filter replacement.",
    price: 4500,
    oldPrice: 5500,
    priceLabel: "₹4,500 / year",
    features: [
      "1 year full maintenance coverage",
      "Periodic filter cartridge replacements",
      "Booster pump & membrane servicing",
      "Unlimited breakdown visit calls"
    ],
    note: "AMC price is for 1 year",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "ro-amc-branded",
    category: "RO",
    name: "Branded RO AMC (Kent, Livpure, Pureit, Aqua Guard)",
    shortDescription: "1 year comprehensive annual maintenance contract with genuine brand-compatible filters.",
    price: 5500,
    oldPrice: 6500,
    priceLabel: "₹5,500 – ₹6,500 / year",
    features: [
      "1 year comprehensive maintenance",
      "Brand-compatible filter set replacement",
      "Free scheduled breakdown service calls",
      "TDS balancing & sanitization"
    ],
    note: "AMC price is for 1 year (₹5,500 – ₹6,500)",
    icon: "Droplets",
    isPopular: true
  },

  // 6. GEYSER
  {
    id: "geyser-kitchen-service",
    category: "Geyser",
    name: "Kitchen Geyser (2–5 Ltr.) Service",
    shortDescription: "Instant kitchen geyser descaling, heating element check, and thermostat test.",
    price: 350,
    oldPrice: 450,
    priceLabel: "₹350",
    features: [
      "Instant geyser tank descaling",
      "Heating element limescale clean",
      "Thermostat cutoff test",
      "Water leak & pipe fitting check"
    ],
    note: "2 to 5 Litre instant geysers",
    icon: "Flame",
    isPopular: false
  },
  {
    id: "geyser-10l-service",
    category: "Geyser",
    name: "Geyser 10 Ltr. Service",
    shortDescription: "10-litre storage geyser tank flushing, heating coil cleaning, and thermostat test.",
    price: 400,
    oldPrice: 500,
    priceLabel: "₹400",
    features: [
      "10L storage tank flushing & descaling",
      "Heating element limescale removal",
      "Thermostat & sensor test",
      "Pressure safety relief valve test"
    ],
    note: "10 Litre storage geysers",
    icon: "Flame",
    isPopular: false
  },
  {
    id: "geyser-15l-service",
    category: "Geyser",
    name: "Geyser 15 Ltr. Service",
    shortDescription: "15-litre storage geyser tank descaling, anode check, and element cleaning.",
    price: 450,
    oldPrice: 550,
    priceLabel: "₹450",
    features: [
      "15L tank descaling & sediment flush",
      "Heating element cleaning",
      "Anode rod inspection",
      "Thermal safety cutoff testing"
    ],
    note: "15 Litre storage geysers",
    icon: "Flame",
    isPopular: true
  },
  {
    id: "geyser-25l-service",
    category: "Geyser",
    name: "Geyser 20–25 Ltr. Service",
    shortDescription: "Heavy-capacity storage geyser descaling, element clean, and valve testing.",
    price: 500,
    oldPrice: 650,
    priceLabel: "₹500",
    features: [
      "20–25L heavy capacity tank flush",
      "Heating element descaling",
      "Multi-function safety valve test",
      "Thermostat temperature calibration"
    ],
    note: "20 to 25 Litre storage geysers",
    icon: "Flame",
    isPopular: false
  },
  {
    id: "geyser-install",
    category: "Geyser",
    name: "Geyser Installation",
    shortDescription: "Heavy-duty wall anchor mounting, plumbing connection, and electrical safety check.",
    price: 450,
    oldPrice: 550,
    priceLabel: "₹450",
    features: [
      "Heavy-load wall anchor mounting",
      "Inlet & outlet connection pipe fitting",
      "Teflon leak sealing",
      "First fill & electrical safety cutoff test"
    ],
    note: "Connection pipes extra if needed",
    icon: "Flame",
    isPopular: true
  },
  {
    id: "geyser-uninstall",
    category: "Geyser",
    name: "Geyser Uninstall",
    shortDescription: "Water tank draining, plumbing disconnection, and safe wall dismounting.",
    price: 300,
    oldPrice: 400,
    priceLabel: "₹300",
    features: [
      "Tank water safe draining",
      "Plumbing pipe disconnection",
      "Safe dismounting from wall brackets"
    ],
    note: "Standard geyser uninstall",
    icon: "Flame",
    isPopular: false
  },

  // 7. WASHING MACHINE
  {
    id: "wm-semi-basic",
    category: "Washing Machine",
    name: "Semi Automatic Basic Service",
    shortDescription: "Lint filter wash, spin tub check, belt tensioning, and drain valve inspection.",
    price: 500,
    oldPrice: 650,
    priceLabel: "₹500",
    features: [
      "Wash tub & spin tub basic clean",
      "Lint filter cleaning & wash",
      "Motor drive belt tension check",
      "Drain valve & hose unclogging"
    ],
    note: "Semi automatic machines",
    icon: "WashingMachine",
    isPopular: false
  },
  {
    id: "wm-top-basic",
    category: "Washing Machine",
    name: "Top Load Basic Service",
    shortDescription: "Filter cleaning, drain valve check, suspension inspection, and test cycle.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "Drum scale inspection",
      "Lint filter wash & cleanout",
      "Inlet valve & drain pump check",
      "Suspension rod balance test"
    ],
    note: "Fully automatic top load",
    icon: "WashingMachine",
    isPopular: false
  },
  {
    id: "wm-front-basic",
    category: "Washing Machine",
    name: "Front Load Basic Service",
    shortDescription: "Door gasket rubber clean, drain pump clearout, and drum balance check.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "Door rubber gasket fungal cleaning",
      "Drain pump filter cleanout",
      "Motor & belt rotation check",
      "Leveling & vibration test"
    ],
    note: "Fully automatic front load",
    icon: "WashingMachine",
    isPopular: true
  },
  {
    id: "wm-semi-deep",
    category: "Washing Machine",
    name: "Semi Automatic Deep Cleaning",
    shortDescription: "Pulsator removal, deep tub degreasing, sediment wash, and internal pipe flush.",
    price: 1050,
    oldPrice: 1300,
    priceLabel: "₹1,050",
    features: [
      "Pulsator removal & deep tub wash",
      "Complete wash & spin tub degreasing",
      "Sediment & dirt descaling",
      "Internal drain hose flush"
    ],
    note: "Intensive deep clean",
    icon: "WashingMachine",
    isPopular: false
  },
  {
    id: "wm-top-deep",
    category: "Washing Machine",
    name: "Top Load Deep Cleaning",
    shortDescription: "Pulsator removal, outer tub chemical descaling, and odor elimination.",
    price: 1350,
    oldPrice: 1650,
    priceLabel: "₹1,350",
    features: [
      "Pulsator removal & outer drum descaling",
      "Chemical fungal & scale wash",
      "Drain manifold clearout",
      "Tub re-alignment & balance check"
    ],
    note: "Restores drum hygiene & eliminates odor",
    icon: "WashingMachine",
    isPopular: true
  },
  {
    id: "wm-front-deep",
    category: "Washing Machine",
    name: "Front Load Deep Cleaning",
    shortDescription: "Chemical drum descaling, door boot seal mold treatment, and coin trap flush.",
    price: 1600,
    oldPrice: 1950,
    priceLabel: "₹1,600",
    features: [
      "Chemical drum descaling treatment",
      "Door rubber boot mold eradication",
      "Coin trap & drain pump flush",
      "High-temperature sanitization test"
    ],
    note: "Premium deep sanitation",
    icon: "WashingMachine",
    isPopular: true
  },

  // 8. MICROWAVE
  {
    id: "microwave-checkup",
    category: "Microwave",
    name: "Microwave Check Up (Visit Charge)",
    shortDescription: "Complete diagnostic check for microwave heating failure, sparks, or control faults.",
    price: 199,
    oldPrice: 299,
    priceLabel: "₹199",
    features: [
      "High voltage circuit diagnosis",
      "Magnetron heating check",
      "Door interlock safety switch test",
      "Upfront cost estimate before repair"
    ],
    note: "Check up visit charge",
    icon: "Microwave",
    isPopular: false
  },
  {
    id: "microwave-service",
    category: "Microwave",
    name: "Microwave Service & Cleaning",
    shortDescription: "Cavity internal degreasing, turntable motor service, and waveguide inspection.",
    price: 500,
    oldPrice: 650,
    priceLabel: "₹500",
    features: [
      "Internal cavity deep degreasing",
      "Turntable roller & motor cleaning",
      "Waveguide cover inspection",
      "Power output & heating test"
    ],
    note: "Solo, grill & convection models",
    icon: "Microwave",
    isPopular: true
  },

  // 9. OTHER SERVICES
  {
    id: "tv-install",
    category: "Other Services",
    name: "TV Installation",
    shortDescription: "Wall bracket mounting, TV secure hanging, and cable connectivity setup.",
    price: 500,
    oldPrice: 650,
    priceLabel: "₹500",
    features: [
      "Heavy-duty wall bracket mounting",
      "Up to 55-inch TV installation",
      "HDMI & power cable routing",
      "Display & leveling verification"
    ],
    note: "Wall bracket extra if not supplied",
    icon: "Tv",
    isPopular: true
  },
  {
    id: "tv-uninstall",
    category: "Other Services",
    name: "TV Uninstall",
    shortDescription: "Safe unmounting of LED/Smart TV from wall and bracket dismounting.",
    price: 300,
    oldPrice: 400,
    priceLabel: "₹300",
    features: [
      "Safe unmounting from wall",
      "Wall bracket removal",
      "Cable disconnection & packing"
    ],
    note: "Standard TV removal",
    icon: "Tv",
    isPopular: false
  },
  {
    id: "dispenser-service",
    category: "Other Services",
    name: "Water Dispenser Service",
    shortDescription: "Hot and cold water tank sanitation, tap valve descaling, and cooling check.",
    price: 600,
    oldPrice: 750,
    priceLabel: "₹600",
    features: [
      "Hot & cold tank sanitation",
      "Dispenser tap valve descaling",
      "Cooling compressor check",
      "Thermostat temperature test"
    ],
    note: "Water dispenser service",
    icon: "Droplets",
    isPopular: false
  },
  {
    id: "air-purifier-service",
    category: "Other Services",
    name: "Air Purifier Service",
    shortDescription: "HEPA & carbon filter inspection, air quality PM2.5 sensor clean, and blower wash.",
    price: 400,
    oldPrice: 500,
    priceLabel: "₹400",
    features: [
      "HEPA & carbon filter inspection",
      "Air quality PM2.5 sensor cleaning",
      "Fan blower motor dust removal",
      "Airflow speed & noise check"
    ],
    note: "Air purifier servicing",
    icon: "Wind",
    isPopular: false
  },
  {
    id: "fan-install",
    category: "Other Services",
    name: "Ceiling Fan Installation",
    shortDescription: "Ceiling hook mounting, blade assembly, wiring, and balance check.",
    price: 250,
    oldPrice: 350,
    priceLabel: "₹250",
    features: [
      "Ceiling hook & downrod assembly",
      "Blade alignment & balancing",
      "Wiring connection & speed test"
    ],
    note: "Standard fan installation",
    icon: "Fan",
    isPopular: false
  },
  {
    id: "fan-uninstall",
    category: "Other Services",
    name: "Ceiling Fan Uninstall",
    shortDescription: "Safe electrical disconnection and dismounting of ceiling fan and blades.",
    price: 200,
    oldPrice: 300,
    priceLabel: "₹200",
    features: [
      "Electrical wiring safe disconnection",
      "Blade & motor dismounting"
    ],
    note: "Standard fan removal",
    icon: "Fan",
    isPopular: false
  }
];

export const PRICING_FILTER_CATEGORIES = [
  "All",
  "AC",
  "Refrigerator",
  "Chimney",
  "Hob",
  "RO",
  "Geyser",
  "Washing Machine",
  "Microwave",
  "Other Services"
];
