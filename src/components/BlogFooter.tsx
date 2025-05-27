import { formatToDDMMYYYY } from "@/lib/utils";
import Link from "next/link";

export default function BlogFooter({ createdAt }: { createdAt: string }) {
  const formattedDate = formatToDDMMYYYY(createdAt);

  return (
    <section className="flex justify-between">
      <Link href="/blog">Back to blogs</Link>
      <span className="text-right">
        Laurenz Guevara - Published on {formattedDate}
      </span>
    </section>
  );
}
