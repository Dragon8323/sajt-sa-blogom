import Link from "next/link";

export default function TagBadge({
  tag,
  active = false,
}: {
  tag: string;
  active?: boolean;
}) {
  return (
    <Link
      href={active ? "/blog" : `/blog?tag=${encodeURIComponent(tag)}`}
      className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
        active
          ? "border-red-500 bg-red-500 text-white"
          : "border-black/[.08] text-zinc-600 hover:border-red-500 hover:text-red-500 dark:border-white/[.145] dark:text-zinc-400"
      }`}
    >
      {tag}
    </Link>
  );
}
