"use client";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

interface Experience {
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  tech_stack: string;
  responsibilities: string[];
}

export default function Experience() {
  const { data: workExperience } = useQuery({
    queryKey: ["experience"],
    staleTime: 1000 * 60 * 30,
    queryFn: async (): Promise<Experience[]> => {
      const response = await fetch("https://api.laurenzguevara.com/experience");
      return await response.json();
    },
  });

  return (
    <div className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">WORK EXPERIENCE</p>
        <p className="text-lavender mb-1">
          $ curl -X GET{" "}
          <Link
            className="text-blue"
            href="https://api.laurenzguevara.com/experience"
            target="_blank"
          >
            https://api.laurenzguevara.com/experience
          </Link>
        </p>
      </div>
      {workExperience?.map((experience) => {
        return (
          <div
            key={experience.company}
            className="border border-surface-1 p-3 mb-6"
          >
            <div className="flex justify-between mb-2">
              <p className="text-blue">{experience.company}</p>
              <p>{experience.start_date} - {experience.end_date}</p>
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
    </div>
  );
}
