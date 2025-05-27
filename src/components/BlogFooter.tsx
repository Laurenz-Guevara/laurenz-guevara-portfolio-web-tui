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

function formatToDDMMYYYY(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
