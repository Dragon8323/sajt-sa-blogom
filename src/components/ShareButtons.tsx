"use client";

import { useSyncExternalStore } from "react";
import { FacebookIcon, LinkedInIcon, XIcon } from "@/components/icons";

function subscribe() {
  return () => {};
}

function getServerSnapshot() {
  return "";
}

export default function ShareButtons({ title }: { title: string }) {
  const url = useSyncExternalStore(subscribe, () => window.location.href, getServerSnapshot);

  const shareLinks = [
    {
      label: "Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    },
    {
      label: "X (Twitter)",
      Icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    },
    {
      label: "LinkedIn",
      Icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="mt-12 flex flex-col items-center gap-3 border-t border-black/[.08] pt-8 text-center dark:border-white/[.145]">
      <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Share this post:</span>
      <div className="flex items-center justify-center gap-2">
        {shareLinks.map(({ label, Icon, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Share on ${label}`}
            className="flex size-9 items-center justify-center rounded-full border border-black/[.08] text-zinc-600 transition-colors hover:border-red-500 hover:text-red-500 dark:border-white/[.145] dark:text-zinc-400"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
