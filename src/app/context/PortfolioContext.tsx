"use client";

import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
} from "react";

// interface AboutData {
// 	name: string;
// 	description: string;
// 	skills: string[];
// }

// interface ExperienceData {
// 	title: string;
// 	company: string;
// 	year: string;
// 	description: string;
// }

export interface Project {
	title: string;
	description: string;
	links: {
		live: string;
		front: string;
		back: string;
		server: string;
	};
	images: string[]; // Array of string image URLs
}

interface PortfolioContextType {
	// about: AboutData | null;
	// experience: ExperienceData[] | null;
	projects: Project[] | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
	undefined,
);

export const usePortfolio = () => {
	const context = useContext(PortfolioContext);
	if (!context) {
		throw new Error("usePortfolio must be used within a PortfolioProvider");
	}
	return context;
};

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
	// const [about, setAbout] = useState<AboutData | null>(null);
	// const [experience, setExperience] = useState<ExperienceData[] | null>(null);
	const [projects, setProjects] = useState<Project[] | null>(null);

	useEffect(() => {
		// // Fetch about data
		// fetch("data/about.json")
		// 	.then((response) => response.json())
		// 	.then((data) => setAbout(data))
		// 	.catch((err) => console.error("Error loading about data:", err));

		// // Fetch experience data
		// fetch("../data/experience.json")
		// 	.then((response) => response.json())
		// 	.then((data) => setExperience(data))
		// 	.catch((err) => console.error("Error loading experience data:", err));

		// Fetch works data
		
		
		fetch("../data/projects.json")
			.then((response) => response.json())
			.then((data) => setProjects(data))
			// .then((data) => console.log(data))
			.catch((err) => console.error("Error loading works data:", err));
	}, []);

	return (
		<PortfolioContext.Provider value={{ projects }}>
			{children}
		</PortfolioContext.Provider>
	);
};
