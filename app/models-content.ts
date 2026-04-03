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

export type ModelData = {
  id: string;
  name: string;
  description: string;
  colors: ModelColor[];
  specs: ModelSpec[];
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
    specs: [
      { label: "Engine", value: "600 cc Petrol" },
      { label: "Transmission", value: "Manual" },
      { label: "Mileage", value: "22 km/l" },
      { label: "Fuel Tank", value: "25 liters" },
      { label: "Seating Capacity", value: "2 persons" },
      { label: "Turning Radius", value: "4.2 m" },
      { label: "Boot Space", value: "120 liters" },
      { label: "Ground Clearance", value: "170 mm" },
      { label: "Top Speed", value: "90 km/h" },
      { label: "Length", value: "3,200 mm" },
      { label: "Width", value: "1,480 mm" },
      { label: "Height", value: "1,600 mm" },
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
    specs: [
      { label: "Engine", value: "650 cc Petrol" },
      { label: "Transmission", value: "Manual" },
      { label: "Mileage", value: "24 km/l" },
      { label: "Fuel Tank", value: "27 liters" },
      { label: "Seating Capacity", value: "4 persons" },
      { label: "Turning Radius", value: "4.1 m" },
      { label: "Boot Space", value: "160 liters" },
      { label: "Ground Clearance", value: "175 mm" },
      { label: "Top Speed", value: "95 km/h" },
      { label: "Length", value: "3,350 mm" },
      { label: "Width", value: "1,520 mm" },
      { label: "Height", value: "1,620 mm" },
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
    specs: [
      { label: "Powertrain", value: "Electric" },
      { label: "Battery", value: "12 kWh Lithium-ion" },
      { label: "Range", value: "135 km" },
      { label: "Charging Time", value: "3.5 hours" },
      { label: "Seating Capacity", value: "4 persons" },
      { label: "Turning Radius", value: "3.8 m" },
      { label: "Boot Space", value: "150 liters" },
      { label: "Ground Clearance", value: "170 mm" },
      { label: "Top Speed", value: "85 km/h" },
      { label: "Motor Power", value: "18 kW" },
    ],
  },
];
