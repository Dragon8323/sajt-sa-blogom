// Tailwind class names must appear as full literal strings for the JIT scanner to pick them up,
// so each palette entry is spelled out rather than built from a template string.
const TAG_COLORS = [
  {
    inactive:
      "border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-400 dark:border-rose-900 dark:bg-rose-950 dark:text-rose-300 dark:hover:border-rose-600",
    active: "border-rose-500 bg-rose-500 text-white",
  },
  {
    inactive:
      "border-orange-200 bg-orange-50 text-orange-700 hover:border-orange-400 dark:border-orange-900 dark:bg-orange-950 dark:text-orange-300 dark:hover:border-orange-600",
    active: "border-orange-500 bg-orange-500 text-white",
  },
  {
    inactive:
      "border-amber-200 bg-amber-50 text-amber-700 hover:border-amber-400 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-300 dark:hover:border-amber-600",
    active: "border-amber-500 bg-amber-500 text-white",
  },
  {
    inactive:
      "border-lime-200 bg-lime-50 text-lime-700 hover:border-lime-400 dark:border-lime-900 dark:bg-lime-950 dark:text-lime-300 dark:hover:border-lime-600",
    active: "border-lime-500 bg-lime-500 text-white",
  },
  {
    inactive:
      "border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-400 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-300 dark:hover:border-emerald-600",
    active: "border-emerald-500 bg-emerald-500 text-white",
  },
  {
    inactive:
      "border-teal-200 bg-teal-50 text-teal-700 hover:border-teal-400 dark:border-teal-900 dark:bg-teal-950 dark:text-teal-300 dark:hover:border-teal-600",
    active: "border-teal-500 bg-teal-500 text-white",
  },
  {
    inactive:
      "border-sky-200 bg-sky-50 text-sky-700 hover:border-sky-400 dark:border-sky-900 dark:bg-sky-950 dark:text-sky-300 dark:hover:border-sky-600",
    active: "border-sky-500 bg-sky-500 text-white",
  },
  {
    inactive:
      "border-indigo-200 bg-indigo-50 text-indigo-700 hover:border-indigo-400 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300 dark:hover:border-indigo-600",
    active: "border-indigo-500 bg-indigo-500 text-white",
  },
  {
    inactive:
      "border-violet-200 bg-violet-50 text-violet-700 hover:border-violet-400 dark:border-violet-900 dark:bg-violet-950 dark:text-violet-300 dark:hover:border-violet-600",
    active: "border-violet-500 bg-violet-500 text-white",
  },
  {
    inactive:
      "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 hover:border-fuchsia-400 dark:border-fuchsia-900 dark:bg-fuchsia-950 dark:text-fuchsia-300 dark:hover:border-fuchsia-600",
    active: "border-fuchsia-500 bg-fuchsia-500 text-white",
  },
] as const;

/** Deterministically maps a tag name to the same color palette entry every time. */
export function getTagColor(tag: string) {
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = (hash * 31 + tag.charCodeAt(i)) | 0;
  }
  const index = Math.abs(hash) % TAG_COLORS.length;
  return TAG_COLORS[index];
}
