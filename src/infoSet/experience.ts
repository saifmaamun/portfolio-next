interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  servedTime: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "Goxpart",
    duration: "04-2025 to Present",
    servedTime: "3 months + Continue",
    description: [
      "Worked on a Dashboard Management System",

      "Developed a dynamic Purchase Receive module with live product & supplier search, VAT/tax calculation, and multi-row item management.",

      "Built reusable Ant Design-based components (ProductSelect, SupplierSelect) with debounced live search and pagination.",

      "Implemented form auto-fill, subtotal/total calculation, and clean read-only field rendering using Typography.Text.",

      "Designed Zod-based modular validation schemas with auto-transform (e.g., sku, slug, dates).",

      "Integrated language translation editor with real-time key-value updates and API syncing.",

      "Ensured clean architecture with modular services, custom hooks (useCrudFormService, useLiveSearchItemList), and controller separation.",
    ],
  },
  {
    title: "Mern Stack Developer",
    company: "Nyx Wolves",
    duration: "03-2022 to 06-2022",
    servedTime: "3 months",
    description: [
      "Worked on an AR based website named Xarwin (like PlugXR.com )",
      "Implemented the authentication part. Where user can both Signup & Login using Google or via their Email.",
      "Implemented User AR Module upload section. Where user can upload new AR Modules, edit existing Modules, delete Modules & publish to Marketplace.",
    ],
  },
  // Add more experiences as needed
];
