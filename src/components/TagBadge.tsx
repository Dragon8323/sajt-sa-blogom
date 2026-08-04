import Link from "next/link";
import { getTagColor } from "@/lib/tagColors";

export default function TagBadge({
  tag,
  active = false,
}: {
  tag: string;
  active?: boolean;
}) {
  const color = getTagColor(tag);

  return (
    <Link
      href={active ? "/blog" : `/blog?tag=${encodeURIComponent(tag)}`}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active ? color.active : color.inactive
      }`}
    >
      {tag}
    </Link>
  );
}
