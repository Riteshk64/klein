export type NavItem = {
  href: string;
  label: string;
};

export type PageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/product-models", label: "Product / Models" },
  { href: "/technology", label: "Technology" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about-us", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export const bookDriveItem: NavItem = {
  href: "/book-test-drive",
  label: "Book Test Drive",
};

export const pageContent: Record<string, PageContent> = {
  home: {
    eyebrow: "Future-ready mobility",
    title: "A clean starting point for your next automotive website.",
    description:
      "This homepage now acts as the central launchpad for the brand, with clear access to products, technology, pricing, and conversion-focused contact flows.",
    highlights: [
      "Introduce your hero message, brand promise, and launch campaign above the fold.",
      "Add featured models, testimonials, and comparison sections as the next iteration.",
      "Use the test drive route as the primary conversion path across the entire site.",
    ],
  },
  productModels: {
    eyebrow: "Product overview",
    title: "Product / Models",
    description:
      "Use this page to introduce your vehicle lineup, compare trims, and guide visitors toward the model that fits their needs.",
    highlights: [
      "Reserve space for flagship products, specifications, and availability.",
      "Add side-by-side comparisons for trims, performance, and features.",
      "Link each model to detail pages later without changing the overall structure.",
    ],
  },
  technology: {
    eyebrow: "Engineering story",
    title: "Technology",
    description:
      "This page can explain your battery systems, software stack, safety platform, charging ecosystem, or proprietary innovations.",
    highlights: [
      "Introduce core technology pillars with visual diagrams or animations later.",
      "Break out battery, performance, software, and safety into modular sections.",
      "Keep complex technical messaging approachable for both enthusiasts and buyers.",
    ],
  },
  pricing: {
    eyebrow: "Commercial clarity",
    title: "Pricing",
    description:
      "A scaffold for pricing tiers, financing options, subscription plans, incentives, and ownership comparisons.",
    highlights: [
      "Add base pricing, variants, and financing calculators in the next pass.",
      "Use this area for tax benefits, incentives, and regional offers.",
      "Support fast comparison between purchase, lease, and subscription options.",
    ],
  },
  aboutUs: {
    eyebrow: "Brand foundation",
    title: "About Us",
    description:
      "Tell the story behind the company, the mission, the team, and the values shaping the brand experience.",
    highlights: [
      "Introduce the company story, leadership, milestones, and mission.",
      "Add press mentions, investor trust signals, and manufacturing credentials.",
      "Use this page to build confidence before contact or purchase decisions.",
    ],
  },
  contact: {
    eyebrow: "Reach the team",
    title: "Contact",
    description:
      "This route is ready for showroom details, enquiry forms, support channels, business partnerships, or dealership contact information.",
    highlights: [
      "Add a contact form, map, support email, and phone details later.",
      "Separate sales, support, media, and partnership enquiries if needed.",
      "Use this page as the general-purpose fallback conversion route.",
    ],
  },
  bookTestDrive: {
    eyebrow: "Primary conversion",
    title: "Book Test Drive",
    description:
      "A dedicated route for visitors who are ready to experience the product. This can later become a multi-step booking flow.",
    highlights: [
      "Add lead capture fields, preferred model, date, and location selectors.",
      "Support showroom-based and at-home test drive experiences later.",
      "Keep this page focused on one outcome: getting the booking submitted.",
    ],
  },
};
