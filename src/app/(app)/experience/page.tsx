import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";

export default function Experience() {
  return (
    <section className="p-4">
      <div className="mb-6">
        <p className="text-yellow mb-2">WORK EXPERIENCE</p>
        <p className="text-lavender mb-1">
          $ curl{" "}
          <Link
            className="text-blue"
            href="https://api.laurenzguevara.com/experience"
            target="_blank"
          >
            https://api.laurenzguevara.com/experience
          </Link>
        </p>
      </div>
      <WorkExperience />
    </section>
  );
}
