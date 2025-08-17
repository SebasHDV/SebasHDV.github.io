import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Administrative Assistant",
    company: "MedVital",
    region: "Colombia - United States",
    description:
      "Managed and optimized cost administration processes to improve efficiency in the company’s budget control, while coordinating and scheduling appointments to ensure proper workflow and meet client expectations regarding time and services. Additionally, developed skills in specialized management and scheduling software, adapting to the demands of an international company.",
    technologies: [
      "Web Development",
      "Creative Design",
      "Digital Solutions",
      "Problem Solving",
    ],
  },
  
];

export type WorkItem = (typeof work)[number];

