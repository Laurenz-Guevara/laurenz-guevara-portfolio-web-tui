import { formatToDDMMYYYY } from "@/lib/utils";
import Link from "next/link";

export default function BlogFooter({ createdAt }: { createdAt: string }) {
  const formattedDate = formatToDDMMYYYY(createdAt);

  return (
    <section className="flex flex-wrap flex-col-reverse sm:flex-row justify-between">
      <Link
        className="text-lavender text-right sm:text-left hover:text-maroon pr-2"
        href="/blog"
      >
        Back to blogs
      </Link>
      <span className="text-right text-green">
        Laurenz Guevara - Published on {formattedDate}
      </span>
    </section>
  );
}
