import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoMongodb } from "react-icons/bi";
import { SiExpress, SiGoogleappsscript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import { GrDocker } from "react-icons/gr";

import { VscAzure } from "react-icons/vsc";

import { TechnologyProps } from "@/lib/interfaces/Technology.interface";

export const technologies = [
	{ name: "JavaScript", icon: IoLogoJavascript, color: "#F1DD35" },
	{ name: "TypeScript", icon: BiLogoTypescript, color: "#3178C6" },
	{ name: "Java", icon: FaJava, color: "#F89820" },
	{ name: "React", icon: FaReact, color: "#61DAFB" },
	{ name: "NextJS", icon: RiNextjsFill, color: "#FFFFFF" },
	{ name: "Express", icon: SiExpress, color: "#FFFFFF" },
	{ name: "Azure", icon: VscAzure, color: "#0078d4" },
	{ name: "Python", icon: FaPython, color: "#FFD343" },
	{ name: "Docker", icon: GrDocker, color: "#1D63ED" },
	{ name: "MongoDB", icon: BiLogoMongodb, color: "#00ED64" },
	{
		name: "Google Apps Script",
		icon: SiGoogleappsscript,
		color: "#0F9D58",
	},
] as TechnologyProps[];
