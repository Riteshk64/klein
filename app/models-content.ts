export type ModelColor = {
  id: string;
  label: string;
  swatch: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition?: string;
  imageScale?: number;
};

export type ModelSpec = {
  label: string;
  value: string;
};

export type ModelPowertrain = "ICE" | "EV" | "Electric";
export type ModelTransmission = "Manual" | "Automatic";

export type ModelVariant = {
  powertrain: ModelPowertrain;
  transmission?: ModelTransmission;
  specs: ModelSpec[];
};

export type ModelData = {
  id: string;
  name: string;
  description: string;
  colors: ModelColor[];
  variants: ModelVariant[];
};

export const models: ModelData[] = [
  {
    id: "pulse",
    name: "Klein Pulse",
    description:
      "A practical and affordable compact car engineered specifically for dense urban environments.",
    colors: [
      {
        id: "white",
        label: "White",
        swatch: "#F3F4F6",
        imageSrc: "/images/models/pulse-white.png",
        imageAlt: "Klein Pulse in white",
        objectPosition: "center center",
        imageScale: 0.96,
      },
      {
        id: "red",
        label: "Red",
        swatch: "#DC2626",
        imageSrc: "/images/models/pulse-red.jpg",
        imageAlt: "Klein Pulse in red",
        objectPosition: "center center",
        imageScale: 1,
      },
      {
        id: "grey",
        label: "Grey",
        swatch: "#6B7280",
        imageSrc: "/images/models/pulse-grey.png",
        imageAlt: "Klein Pulse in grey",
        objectPosition: "center center",
        imageScale: 1,
      },
    ],
    variants: [
      {
        powertrain: "ICE",
        transmission: "Manual",
        specs: [
          { label: "Engine", value: "650 cc Petrol" },
          { label: "Mileage", value: "22 km/l" },
          { label: "Transmission", value: "Manual" },
          { label: "Top Speed", value: "90 km/h" },
          { label: "Turning Radius", value: "4.2 m" },
        ],
      },
      {
        powertrain: "ICE",
        transmission: "Automatic",
        specs: [
          { label: "Engine", value: "650 cc Petrol" },
          { label: "Mileage", value: "21 km/l" },
          { label: "Transmission", value: "Automatic" },
          { label: "Top Speed", value: "90 km/h" },
          { label: "Turning Radius", value: "4.2 m" },
        ],
      },
      {
        powertrain: "EV",
        specs: [
          { label: "Powertrain", value: "Electric" },
          { label: "Battery", value: "10 kWh" },
          { label: "Range", value: "110 km" },
          { label: "Charging Time", value: "3.5 hours" },
          { label: "Top Speed", value: "85 km/h" },
          { label: "Turning Radius", value: "4.0 m" },
        ],
      },
    ],
  },
  {
    id: "eon",
    name: "Klein Eon",
    description: "A modern and efficient vehicle built for urban commuters.",
    colors: [
      {
        id: "white",
        label: "White",
        swatch: "#F3F4F6",
        imageSrc: "/images/models/eon-white.png",
        imageAlt: "Klein Eon in white",
        objectPosition: "center center",
        imageScale: 0.96,
      },
      {
        id: "red",
        label: "Red",
        swatch: "#DC2626",
        imageSrc: "/images/models/eon-red.jpg",
        imageAlt: "Klein Eon in red",
        objectPosition: "center center",
        imageScale: 1,
      },
      {
        id: "grey",
        label: "Grey",
        swatch: "#6B7280",
        imageSrc: "/images/models/eon-grey.jpg",
        imageAlt: "Klein Eon in grey",
        objectPosition: "center center",
        imageScale: 1,
      },
    ],
    variants: [
      {
        powertrain: "ICE",
        transmission: "Manual",
        specs: [
          { label: "Engine", value: "798 cc Petrol" },
          { label: "Mileage", value: "24 km/l" },
          { label: "Transmission", value: "Manual" },
          { label: "Top Speed", value: "95 km/h" },
          { label: "Turning Radius", value: "4.1 m" },
        ],
      },
      {
        powertrain: "ICE",
        transmission: "Automatic",
        specs: [
          { label: "Engine", value: "798 cc Petrol" },
          { label: "Mileage", value: "23 km/l" },
          { label: "Transmission", value: "Automatic" },
          { label: "Top Speed", value: "95 km/h" },
          { label: "Turning Radius", value: "4.1 m" },
        ],
      },
      {
        powertrain: "EV",
        specs: [
          { label: "Powertrain", value: "Electric" },
          { label: "Battery", value: "12 kWh" },
          { label: "Range", value: "130 km" },
          { label: "Charging Time", value: "3.5 hours" },
          { label: "Top Speed", value: "90 km/h" },
          { label: "Turning Radius", value: "4.0 m" },
        ],
      },
    ],
  },
  {
    id: "volt",
    name: "Klein Volt",
    description: "A fully electric city car designed for sustainable mobility.",
    colors: [
      {
        id: "white",
        label: "White",
        swatch: "#F3F4F6",
        imageSrc: "/images/models/volt-white.png",
        imageAlt: "Klein Volt in white",
        objectPosition: "center center",
        imageScale: 1,
      },
      {
        id: "red",
        label: "Red",
        swatch: "#DC2626",
        imageSrc: "/images/models/volt-red.png",
        imageAlt: "Klein Volt in red",
        objectPosition: "center center",
        imageScale: 1,
      },
      {
        id: "grey",
        label: "Grey",
        swatch: "#6B7280",
        imageSrc: "/images/models/volt-grey.png",
        imageAlt: "Klein Volt in grey",
        objectPosition: "center center",
        imageScale: 1,
      },
    ],
    variants: [
      {
        powertrain: "Electric",
        specs: [
          { label: "Powertrain", value: "Electric" },
          { label: "Battery", value: "12 kWh" },
          { label: "Range", value: "135 km" },
          { label: "Charging Time", value: "3.5 hours" },
          { label: "Top Speed", value: "85 km/h" },
          { label: "Turning Radius", value: "3.8 m" },
        ],
      },
    ],
  },
];
