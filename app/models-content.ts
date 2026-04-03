export type ShowcaseHighlight = {
  value: string;
  title: string;
  description: string;
};

export type ShowcaseFeature = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export type ShowcaseModel = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: {
    src: string;
    alt: string;
  };
  highlights: ShowcaseHighlight[];
  features: ShowcaseFeature[];
};

export const models: ShowcaseModel[] = [
  {
    id: "pulse",
    name: "Klein Pulse",
    tagline: "Built for Everyday City Driving",
    description:
      "An affordable ultra-compact vehicle designed to make daily urban travel simple, efficient, and stress-free.",
    heroImage: {
      src: "/images/models/pulse-hero.png",
      alt: "Klein Pulse hero vehicle shot",
    },
    highlights: [
      {
        value: "01",
        title: "Easy Parking",
        description: "Sized for tight streets, narrow lanes, and compact parking spaces.",
      },
      {
        value: "02",
        title: "Low Running Cost",
        description: "Built to keep everyday ownership practical for high-frequency city driving.",
      },
      {
        value: "03",
        title: "Compact Size",
        description: "A city-first footprint that reduces friction in dense urban environments.",
      },
    ],
    features: [
      {
        title: "Tight Turning Radius",
        description:
          "Pulse is engineered for dense traffic conditions, helping drivers navigate smaller streets, quick U-turns, and crowded intersections with less effort.",
        imageSrc: "/images/models/pulse-feature-1.png",
        imageAlt: "Klein Pulse maneuverability feature image",
      },
      {
        title: "Simple Controls",
        description:
          "Its straightforward cabin experience keeps controls intuitive and accessible, making Pulse easy to live with whether you're commuting, running errands, or sharing the car.",
        imageSrc: "/images/models/pulse-feature-2.png",
        imageAlt: "Klein Pulse interior simplicity feature image",
      },
      {
        title: "Efficient Fuel Usage",
        description:
          "Pulse focuses on real-world efficiency, offering a mobility solution designed around practical urban usage instead of unnecessary complexity.",
        imageSrc: "/images/models/pulse-feature-3.png",
        imageAlt: "Klein Pulse efficiency feature image",
      },
    ],
  },
  {
    id: "eon",
    name: "Klein Eon",
    tagline: "Smart Mobility for Modern Cities",
    description:
      "A more refined urban vehicle that balances comfort, everyday practicality, and a more premium city-driving experience.",
    heroImage: {
      src: "/images/models/eon-hero.png",
      alt: "Klein Eon hero vehicle shot",
    },
    highlights: [
      {
        value: "01",
        title: "More Space",
        description: "Designed to feel roomier and more versatile for passengers and daily routines.",
      },
      {
        value: "02",
        title: "Smooth Ride",
        description: "Comfort-oriented tuning helps Eon feel composed across everyday city roads.",
      },
      {
        value: "03",
        title: "Advanced Safety",
        description: "A more confidence-focused package for modern urban driving conditions.",
      },
    ],
    features: [
      {
        title: "Spacious Cabin",
        description:
          "Eon makes better use of its compact footprint, creating a cabin that feels more open and comfortable for everyday urban journeys.",
        imageSrc: "/images/models/eon-feature-1.png",
        imageAlt: "Klein Eon cabin space feature image",
      },
      {
        title: "Improved Suspension",
        description:
          "A smoother ride profile helps Eon absorb uneven city surfaces with more composure, adding comfort for both driver and passengers.",
        imageSrc: "/images/models/eon-feature-2.png",
        imageAlt: "Klein Eon ride comfort feature image",
      },
      {
        title: "Enhanced Safety Systems",
        description:
          "Eon is positioned as the more balanced and confidence-oriented urban option, with features tuned around everyday protection and control.",
        imageSrc: "/images/models/eon-feature-3.png",
        imageAlt: "Klein Eon safety feature image",
      },
    ],
  },
  {
    id: "volt",
    name: "Klein Volt",
    tagline: "Electric Driving Made Simple",
    description:
      "A future-focused electric city car built for clean mobility, quiet performance, and low-maintenance ownership.",
    heroImage: {
      src: "/images/models/volt-hero.png",
      alt: "Klein Volt hero vehicle shot",
    },
    highlights: [
      {
        value: "01",
        title: "Zero Emissions",
        description: "Designed for cleaner city movement and a more future-ready ownership experience.",
      },
      {
        value: "02",
        title: "Quiet Operation",
        description: "A calm, refined character that feels natural in stop-and-go urban traffic.",
      },
      {
        value: "03",
        title: "Low Maintenance",
        description: "Electric simplicity helps reduce complexity in everyday ownership.",
      },
    ],
    features: [
      {
        title: "Electric Powertrain",
        description:
          "Volt delivers city-focused electric performance with instant response, simplified running costs, and a cleaner mobility proposition.",
        imageSrc: "/images/models/volt-feature-1.png",
        imageAlt: "Klein Volt electric powertrain feature image",
      },
      {
        title: "Fast Charging",
        description:
          "Its charging experience is shaped around daily usage patterns, helping urban owners top up with less disruption.",
        imageSrc: "/images/models/volt-feature-2.png",
        imageAlt: "Klein Volt charging feature image",
      },
      {
        title: "Silent Performance",
        description:
          "The quiet character of electric propulsion makes Volt feel calm, modern, and especially well suited to city commuting.",
        imageSrc: "/images/models/volt-feature-3.png",
        imageAlt: "Klein Volt silent performance feature image",
      },
    ],
  },
];
