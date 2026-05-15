export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location?: string;
  note?: string;
};

export const education: EducationItem[] = [
  {
    school: "Nazeer Hussain University",
    degree: "BS in Software Engineering",
    period: "Started October 2023",
    location: "Karachi, Pakistan",
  },
];
