export const studies = [
  {
    title: "System Engineer",
    institution: "Universidad Santiago de Cali",
    description:
      "Focused on technology, problem-solving, and the development of efficient digital solutions. Academic training includes areas such as networking, software development, databases, and information systems, providing a strong foundation for tackling real-world challenges in the IT field.",
    tags: [
      "Algorithms",
      "Data Structures",
      "Operating Systems",
      "Databases",
    ],
  },
  {
    title: "Software programming technician",
    institution: "SENA",
    description:
      "trained in software development, database management, and application design. The program provides solid technical skills in programming logic, coding best practices, and problem-solving, preparing for the creation of functional and efficient digital solutions.",
    tags: [
      "Frontend Developer",
      "Web Development",
      "Technology",
      "Creative Design",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

