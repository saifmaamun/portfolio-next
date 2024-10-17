interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  servedTime: string;
  description: string[];
}

export const experiences: ExperienceItem[] = [
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
