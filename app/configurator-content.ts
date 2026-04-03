export type ConfigOption = {
  id: string;
  label: string;
  description?: string;
  priceDelta: number;
};

export type ConfigModel = {
  id: string;
  name: string;
  description: string;
  colors: {
    id: string;
    label: string;
    imageSrc: string;
    imageAlt: string;
  }[];
  powertrains: {
    id: "ICE" | "EV";
    label: string;
    basePrice: number;
    batteryOptions?: ConfigOption[];
    engineOptions?: ConfigOption[];
  }[];
  dashboardOptions: ConfigOption[];
};

export const configuratorModels: ConfigModel[] = [
  {
    id: "pulse",
    name: "Klein Pulse",
    description: "Compact, practical, and engineered for dense everyday city driving.",
    colors: [
      {
        id: "white",
        label: "White",
        imageSrc: "/images/pricing/pulse-white.png",
        imageAlt: "Klein Pulse in white",
      },
      {
        id: "grey",
        label: "Dark Grey",
        imageSrc: "/images/pricing/pulse-grey.png",
        imageAlt: "Klein Pulse in dark grey",
      },
      {
        id: "red",
        label: "Red",
        imageSrc: "/images/pricing/pulse-red.jpg",
        imageAlt: "Klein Pulse in red",
      },
    ],
    powertrains: [
      {
        id: "ICE",
        label: "ICE",
        basePrice: 400000,
        engineOptions: [
          {
            id: "600cc",
            label: "600 cc",
            description: "Standard city-focused petrol engine.",
            priceDelta: 0,
          },
          {
            id: "700cc",
            label: "700 cc",
            description: "Higher displacement option for stronger response.",
            priceDelta: 12000,
          },
        ],
      },
      {
        id: "EV",
        label: "EV",
        basePrice: 455000,
        batteryOptions: [
          {
            id: "standard-battery",
            label: "Standard Battery",
            description: "Normal capacity battery.",
            priceDelta: 0,
          },
          {
            id: "enhanced-battery",
            label: "Enhanced Battery",
            description: "Higher capacity and faster charging.",
            priceDelta: 35000,
          },
        ],
      },
    ],
    dashboardOptions: [
      {
        id: "standard-dashboard",
        label: "Standard Dashboard",
        description: "Small screen with analog AC and fan controls.",
        priceDelta: 0,
      },
      {
        id: "smart-digital-dashboard",
        label: "Smart Digital Dashboard",
        description: "Large touchscreen with all controls integrated.",
        priceDelta: 15000,
      },
    ],
  },
  {
    id: "eon",
    name: "Klein Eon",
    description: "A more refined city car with balanced comfort and modern daily usability.",
    colors: [
      {
        id: "white",
        label: "White",
        imageSrc: "/images/pricing/eon-white.png",
        imageAlt: "Klein Eon in white",
      },
      {
        id: "grey",
        label: "Dark Grey",
        imageSrc: "/images/pricing/eon-grey.jpg",
        imageAlt: "Klein Eon in dark grey",
      },
      {
        id: "red",
        label: "Red",
        imageSrc: "/images/pricing/eon-red.jpg",
        imageAlt: "Klein Eon in red",
      },
    ],
    powertrains: [
      {
        id: "ICE",
        label: "ICE",
        basePrice: 520000,
        engineOptions: [
          {
            id: "650cc",
            label: "650 cc",
            description: "Standard petrol engine tuned for balanced urban use.",
            priceDelta: 0,
          },
          {
            id: "750cc",
            label: "750 cc",
            description: "Higher displacement option for added performance.",
            priceDelta: 14000,
          },
        ],
      },
      {
        id: "EV",
        label: "EV",
        basePrice: 590000,
        batteryOptions: [
          {
            id: "standard-battery",
            label: "Standard Battery",
            description: "Normal capacity battery.",
            priceDelta: 0,
          },
          {
            id: "enhanced-battery",
            label: "Enhanced Battery",
            description: "Higher capacity and faster charging.",
            priceDelta: 35000,
          },
        ],
      },
    ],
    dashboardOptions: [
      {
        id: "standard-dashboard",
        label: "Standard Dashboard",
        description: "Small screen with analog AC and fan controls.",
        priceDelta: 0,
      },
      {
        id: "smart-digital-dashboard",
        label: "Smart Digital Dashboard",
        description: "Large touchscreen with all controls integrated.",
        priceDelta: 15000,
      },
    ],
  },
  {
    id: "volt",
    name: "Klein Volt",
    description: "A future-focused electric city vehicle designed around low-maintenance urban mobility.",
    colors: [
      {
        id: "white",
        label: "White",
        imageSrc: "/images/pricing/volt-white.png",
        imageAlt: "Klein Volt in white",
      },
      {
        id: "grey",
        label: "Dark Grey",
        imageSrc: "/images/pricing/volt-grey.png",
        imageAlt: "Klein Volt in dark grey",
      },
      {
        id: "red",
        label: "Red",
        imageSrc: "/images/pricing/volt-red.png",
        imageAlt: "Klein Volt in red",
      },
    ],
    powertrains: [
      {
        id: "EV",
        label: "Electric",
        basePrice: 500000,
        batteryOptions: [
          {
            id: "standard-battery",
            label: "Standard Battery",
            description: "Normal capacity battery.",
            priceDelta: 0,
          },
          {
            id: "enhanced-battery",
            label: "Enhanced Battery",
            description: "Higher capacity and faster charging.",
            priceDelta: 35000,
          },
        ],
      },
    ],
    dashboardOptions: [
      {
        id: "standard-dashboard",
        label: "Standard Dashboard",
        description: "Small screen with analog AC and fan controls.",
        priceDelta: 0,
      },
      {
        id: "smart-digital-dashboard",
        label: "Smart Digital Dashboard",
        description: "Large touchscreen with all controls integrated.",
        priceDelta: 15000,
      },
    ],
  },
];
