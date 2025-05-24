import WorkExperience from "@/components/WorkExperience";
import Link from "next/link";
import { Suspense } from "react";

export default function Experience() {
  return (
    <section className="p-4">
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
      <Suspense fallback={<ExperienceSkeletons />}>
        <WorkExperience />
      </Suspense>
    </section>
  );
}

function ExperienceSkeletons() {
  return (
    <>
      <div className="border border-surface-1 p-3 mb-6 h-52 space-y-4 animate-pulse">
        <div className="mt-1.5 h-4 w-24 bg-surface-0/70"></div>
        <div className="mt-1.5 h-4 w-36 bg-surface-0/70"></div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-16 w-full max-w-60 bg-surface-0/70">
        </div>
      </div>
      <div className="border border-surface-1 p-3 mb-6 h-52 space-y-4 animate-pulse">
        <div className="mt-1.5 h-4 w-24 bg-surface-0/70"></div>
        <div className="mt-1.5 h-4 w-36 bg-surface-0/70"></div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-16 w-full max-w-60 bg-surface-0/70">
        </div>
      </div>
      <div className="border border-surface-1 p-3 mb-6 h-52 space-y-4 animate-pulse">
        <div className="mt-1.5 h-4 w-24 bg-surface-0/70"></div>
        <div className="mt-1.5 h-4 w-36 bg-surface-0/70"></div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-24 w-full max-w-96 bg-surface-0/70">
        </div>
        <div className="mt-1.5 h-4 min-w-16 w-full max-w-60 bg-surface-0/70">
        </div>
      </div>
    </>
  );
}
