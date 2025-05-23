"use client";

import { useSuspenseQuery } from "@tanstack/react-query";

interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  tech_stack: string;
  responsibilities: string[];
}

export default function WorkExperience() {
  const { data: workExperience } = useSuspenseQuery({
    queryKey: ["experience"],
    staleTime: 1000 * 60 * 30,
    queryFn: async (): Promise<Experience[]> => {
      const response = await fetch("https://api.laurenzguevara.com/experience");
      return await response.json();
    },
  });

  return (
    <>
      {workExperience.map((experience) => {
        return (
          <div
            key={experience.company}
            className="border border-surface-1 p-3 mb-6"
          >
            <div className="flex justify-between mb-2">
              <p className="text-green">{experience.company}</p>
              <p className="text-maroon">
                {experience.start_date} - {experience.end_date}
              </p>
            </div>
            <p className="text-lavender mb-2">{experience.position}</p>
            <ul className="list-disc list-inside space-y-2 ml-2">
              {experience.responsibilities.map((responsibility, idx) => (
                <li key={idx}>
                  {responsibility}
                </li>
              ))}
            </ul>
            <p className="mt-2">
              Stack: <span className="text-peach">{experience.tech_stack}</span>
            </p>
          </div>
        );
      })}
    </>
  );
}
